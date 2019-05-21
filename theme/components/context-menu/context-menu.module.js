"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbContextMenuModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _common = require("@angular/common");

var _cdk = require("../cdk");

var _contextMenu = require("./context-menu.directive");

var _contextMenu2 = require("./context-menu.component");

var _menu = require("../menu/menu.module");

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

var NbContextMenuModule = /** @class */function () {
    function NbContextMenuModule() {}
    NbContextMenuModule = __decorate([(0, _core.NgModule)({
        imports: [_common.CommonModule, _cdk.NbOverlayModule, _menu.NbMenuModule],
        exports: [_contextMenu.NbContextMenuDirective],
        declarations: [_contextMenu.NbContextMenuDirective, _contextMenu2.NbContextMenuComponent],
        entryComponents: [_contextMenu2.NbContextMenuComponent]
    })], NbContextMenuModule);
    return NbContextMenuModule;
}();
exports.NbContextMenuModule = NbContextMenuModule;
//# sourceMappingURL=context-menu.module.js.map
//# sourceMappingURL=context-menu.module.js.map