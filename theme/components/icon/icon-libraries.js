"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbIconLibraries = exports.NbIconDefinition = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var i0 = _interopRequireWildcard(_core);

var _iconPack = require("./icon-pack");

var _icon = require("./icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

var NbIconDefinition = /** @class */function () {
    function NbIconDefinition() {}
    return NbIconDefinition;
}();
exports.NbIconDefinition = NbIconDefinition;

function throwPackNotFoundError(name) {
    throw Error("Icon Pack '" + name + "' is not registered");
}
function throwNoDefaultPackError() {
    throw Error('Default pack is not registered.');
}
function throwIconNotFoundError(name, pack) {
    throw Error("Icon '" + name + "' is not registered in pack '" + pack + "'. Check icon name or consider switching icon pack.");
}
function throwWrongPackTypeError(name, type, desiredType) {
    throw Error("Pack '" + name + "' is not an '" + desiredType + "' Pack and its type is '" + type + "'");
}
/**
 * This service allows to register multiple icon packs to use them later within `<nb-icon></nb-icon>` component.
 */
var NbIconLibraries = /** @class */function () {
    function NbIconLibraries() {
        this.packs = new Map();
    }
    /**
     * Registers new Svg icon pack
     * @param {string} name
     * @param {NbIcon} icons
     * @param {NbIconPackParams} params
     */
    NbIconLibraries.prototype.registerSvgPack = function (name, icons, params) {
        if (params === void 0) {
            params = {};
        }
        this.packs.set(name, {
            name: name,
            icons: new Map(Object.entries(icons)),
            params: params,
            type: _iconPack.NbIconPackType.SVG
        });
    };
    /**
     * Registers new font pack
     * @param {string} name
     * @param {NbIconPackParams} params
     */
    NbIconLibraries.prototype.registerFontPack = function (name, params) {
        if (params === void 0) {
            params = {};
        }
        this.packs.set(name, {
            name: name,
            params: params,
            icons: new Map(),
            type: _iconPack.NbIconPackType.FONT
        });
    };
    /**
     * Returns pack by name
     * @param {string} name
     */
    NbIconLibraries.prototype.getPack = function (name) {
        return this.packs.get(name);
    };
    /**
     * Sets pack as a default
     * @param {string} name
     */
    NbIconLibraries.prototype.setDefaultPack = function (name) {
        if (!this.packs.has(name)) {
            throwPackNotFoundError(name);
        }
        this.defaultPack = this.packs.get(name);
    };
    /**
     * Returns Svg icon
     * @param {string} name
     * @param {string} pack
     *
     * @returns NbIconDefinition
     */
    NbIconLibraries.prototype.getSvgIcon = function (name, pack) {
        var iconsPack = pack ? this.getPackOrThrow(pack) : this.getDefaultPackOrThrow();
        if (iconsPack.type !== _iconPack.NbIconPackType.SVG) {
            throwWrongPackTypeError(iconsPack.name, iconsPack.type, 'SVG');
        }
        var icon = this.getIconFromPack(name, iconsPack);
        return {
            name: name,
            pack: iconsPack.name,
            type: _iconPack.NbIconPackType.SVG,
            icon: this.createSvgIcon(name, icon, iconsPack.params)
        };
    };
    /**
     * Returns Font icon
     * @param {string} name
     * @param {string} pack
     *
     * @returns NbIconDefinition
     */
    NbIconLibraries.prototype.getFontIcon = function (name, pack) {
        var iconsPack = pack ? this.getPackOrThrow(pack) : this.getDefaultPackOrThrow();
        if (iconsPack.type !== _iconPack.NbIconPackType.FONT) {
            throwWrongPackTypeError(iconsPack.name, iconsPack.type, 'Font');
        }
        var icon = this.getIconFromPack(name, iconsPack, false);
        return {
            name: name,
            pack: iconsPack.name,
            type: _iconPack.NbIconPackType.FONT,
            icon: this.createFontIcon(name, icon ? icon : '', iconsPack.params)
        };
    };
    /**
     * Returns an icon
     * @param {string} name
     * @param {string} pack
     *
     * @returns NbIconDefinition
     */
    NbIconLibraries.prototype.getIcon = function (name, pack) {
        var iconsPack = pack ? this.getPackOrThrow(pack) : this.getDefaultPackOrThrow();
        if (iconsPack.type === _iconPack.NbIconPackType.SVG) {
            return this.getSvgIcon(name, pack);
        }
        return this.getFontIcon(name, pack);
    };
    NbIconLibraries.prototype.createSvgIcon = function (name, content, params) {
        return content instanceof _icon.NbSvgIcon ? content : new _icon.NbSvgIcon(name, content, params);
    };
    NbIconLibraries.prototype.createFontIcon = function (name, content, params) {
        return content instanceof _icon.NbFontIcon ? content : new _icon.NbFontIcon(name, content, params);
    };
    NbIconLibraries.prototype.getPackOrThrow = function (name) {
        var pack = this.packs.get(name);
        if (!pack) {
            throwPackNotFoundError(name);
        }
        return pack;
    };
    NbIconLibraries.prototype.getDefaultPackOrThrow = function () {
        if (!this.defaultPack) {
            throwNoDefaultPackError();
        }
        return this.defaultPack;
    };
    NbIconLibraries.prototype.getIconFromPack = function (name, pack, shouldThrow) {
        if (shouldThrow === void 0) {
            shouldThrow = true;
        }
        if (shouldThrow && !pack.icons.has(name)) {
            throwIconNotFoundError(name, pack.name);
        }
        return pack.icons.get(name);
    };
    NbIconLibraries.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NbIconLibraries_Factory() {
            return new NbIconLibraries();
        }, token: NbIconLibraries, providedIn: "root" });
    NbIconLibraries = __decorate([(0, _core.Injectable)({ providedIn: 'root' })], NbIconLibraries);
    return NbIconLibraries;
}();
exports.NbIconLibraries = NbIconLibraries;
//# sourceMappingURL=icon-libraries.js.map
//# sourceMappingURL=icon-libraries.js.map