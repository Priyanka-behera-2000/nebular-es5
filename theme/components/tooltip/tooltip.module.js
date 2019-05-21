"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbTooltipModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _shared = require("../shared/shared.module");

var _cdk = require("../cdk");

var _icon = require("../icon/icon.module");

var _tooltip = require("./tooltip.component");

var _tooltip2 = require("./tooltip.directive");

/*
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

var NbTooltipModule = /** @class */function () {
    function NbTooltipModule() {}
    NbTooltipModule = __decorate([(0, _core.NgModule)({
        imports: [_shared.NbSharedModule, _cdk.NbOverlayModule, _icon.NbIconModule],
        declarations: [_tooltip.NbTooltipComponent, _tooltip2.NbTooltipDirective],
        exports: [_tooltip2.NbTooltipDirective],
        entryComponents: [_tooltip.NbTooltipComponent]
    })], NbTooltipModule);
    return NbTooltipModule;
}();
exports.NbTooltipModule = NbTooltipModule;
//# sourceMappingURL=tooltip.module.js.map
//# sourceMappingURL=tooltip.module.js.map