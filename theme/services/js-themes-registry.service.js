"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbJSThemesRegistry = exports.BUILT_IN_THEMES = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _default = require("./js-themes/default.theme");

var _cosmic = require("./js-themes/cosmic.theme");

var _corporate = require("./js-themes/corporate.theme");

var _theme = require("../theme.options");

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var BUILT_IN_THEMES = exports.BUILT_IN_THEMES = [_default.DEFAULT_THEME, _cosmic.COSMIC_THEME, _corporate.CORPORATE_THEME];
/**
 * Js Themes registry - provides access to the JS themes' variables.
 * Usually shouldn't be used directly, but through the NbThemeService class methods (getJsTheme).
 */
var NbJSThemesRegistry = /** @class */function () {
    function NbJSThemesRegistry(builtInThemes, newThemes) {
        var _this = this;
        if (newThemes === void 0) {
            newThemes = [];
        }
        this.themes = {};
        var themes = this.combineByNames(newThemes, builtInThemes);
        themes.forEach(function (theme) {
            _this.register(theme, theme.name, theme.base);
        });
    }
    /**
     * Registers a new JS theme
     * @param config any
     * @param themeName string
     * @param baseTheme string
     */
    NbJSThemesRegistry.prototype.register = function (config, themeName, baseTheme) {
        var base = this.has(baseTheme) ? this.get(baseTheme) : {};
        this.themes[themeName] = this.mergeDeep({}, base, config);
    };
    /**
     * Checks whether the theme is registered
     * @param themeName
     * @returns boolean
     */
    NbJSThemesRegistry.prototype.has = function (themeName) {
        return !!this.themes[themeName];
    };
    /**
     * Return a theme
     * @param themeName
     * @returns NbJSThemeOptions
     */
    NbJSThemesRegistry.prototype.get = function (themeName) {
        if (!this.themes[themeName]) {
            throw Error("NbThemeConfig: no theme '" + themeName + "' found registered.");
        }
        return JSON.parse(JSON.stringify(this.themes[themeName]));
    };
    NbJSThemesRegistry.prototype.combineByNames = function (newThemes, oldThemes) {
        var _this = this;
        if (newThemes) {
            var mergedThemes_1 = [];
            newThemes.forEach(function (theme) {
                var sameOld = oldThemes.find(function (tm) {
                    return tm.name === theme.name;
                }) || {};
                var mergedTheme = _this.mergeDeep({}, sameOld, theme);
                mergedThemes_1.push(mergedTheme);
            });
            oldThemes.forEach(function (theme) {
                if (!mergedThemes_1.find(function (tm) {
                    return tm.name === theme.name;
                })) {
                    mergedThemes_1.push(theme);
                }
            });
            return mergedThemes_1;
        }
        return oldThemes;
    };
    NbJSThemesRegistry.prototype.isObject = function (item) {
        return item && (typeof item === "undefined" ? "undefined" : _typeof(item)) === 'object' && !Array.isArray(item);
    };
    // TODO: move to helpers
    NbJSThemesRegistry.prototype.mergeDeep = function (target) {
        var _a, _b;
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        if (!sources.length) {
            return target;
        }
        var source = sources.shift();
        if (this.isObject(target) && this.isObject(source)) {
            for (var key in source) {
                if (this.isObject(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, (_a = {}, _a[key] = {}, _a));
                    }
                    this.mergeDeep(target[key], source[key]);
                } else {
                    Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                }
            }
        }
        return this.mergeDeep.apply(this, [target].concat(sources));
    };
    NbJSThemesRegistry = __decorate([(0, _core.Injectable)(), __param(0, (0, _core.Inject)(_theme.NB_BUILT_IN_JS_THEMES)), __param(1, (0, _core.Inject)(_theme.NB_JS_THEMES)), __metadata("design:paramtypes", [Array, Array])], NbJSThemesRegistry);
    return NbJSThemesRegistry;
}();
exports.NbJSThemesRegistry = NbJSThemesRegistry;
//# sourceMappingURL=js-themes-registry.service.js.map
//# sourceMappingURL=js-themes-registry.service.js.map