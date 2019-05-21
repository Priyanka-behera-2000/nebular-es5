"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbMenuModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _shared = require("../shared/shared.module");

var _menu = require("./menu.component");

var _menu2 = require("./menu.service");

var _icon = require("../icon/icon.module");

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

var nbMenuComponents = [_menu.NbMenuComponent, _menu.NbMenuItemComponent];
var NB_MENU_PROVIDERS = [_menu2.NbMenuService, _menu2.NbMenuInternalService];
var NbMenuModule = /** @class */function () {
    function NbMenuModule() {}
    NbMenuModule_1 = NbMenuModule;
    NbMenuModule.forRoot = function () {
        return {
            ngModule: NbMenuModule_1,
            providers: NB_MENU_PROVIDERS.slice()
        };
    };
    var NbMenuModule_1;
    NbMenuModule = NbMenuModule_1 = __decorate([(0, _core.NgModule)({
        imports: [_shared.NbSharedModule, _icon.NbIconModule],
        declarations: nbMenuComponents.slice(),
        exports: nbMenuComponents.slice()
    })], NbMenuModule);
    return NbMenuModule;
}();
exports.NbMenuModule = NbMenuModule;
//# sourceMappingURL=menu.module.js.map
//# sourceMappingURL=menu.module.js.map