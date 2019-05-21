"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbTabsetModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _shared = require("../shared/shared.module");

var _tabset = require("./tabset.component");

var _badge = require("../badge/badge.module");

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

var NB_TABSET_COMPONENTS = [_tabset.NbTabsetComponent, _tabset.NbTabComponent];
var NbTabsetModule = /** @class */function () {
    function NbTabsetModule() {}
    NbTabsetModule = __decorate([(0, _core.NgModule)({
        imports: [_shared.NbSharedModule, _badge.NbBadgeModule, _icon.NbIconModule],
        declarations: NB_TABSET_COMPONENTS.slice(),
        exports: NB_TABSET_COMPONENTS.slice()
    })], NbTabsetModule);
    return NbTabsetModule;
}();
exports.NbTabsetModule = NbTabsetModule;
//# sourceMappingURL=tabset.module.js.map
//# sourceMappingURL=tabset.module.js.map