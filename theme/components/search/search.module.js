"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbSearchModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _shared = require("../shared/shared.module");

var _overlay = require("../cdk/overlay/overlay.module");

var _icon = require("../icon/icon.module");

var _button = require("../button/button.module");

var _search = require("./search.component");

var _search2 = require("./search.service");

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

var NbSearchModule = /** @class */function () {
    function NbSearchModule() {}
    NbSearchModule = __decorate([(0, _core.NgModule)({
        imports: [_shared.NbSharedModule, _overlay.NbOverlayModule, _icon.NbIconModule, _button.NbButtonModule],
        declarations: [_search.NbSearchComponent, _search.NbSearchFieldComponent],
        exports: [_search.NbSearchComponent, _search.NbSearchFieldComponent],
        providers: [_search2.NbSearchService],
        entryComponents: [_search.NbSearchFieldComponent]
    })], NbSearchModule);
    return NbSearchModule;
}();
exports.NbSearchModule = NbSearchModule;
//# sourceMappingURL=search.module.js.map
//# sourceMappingURL=search.module.js.map