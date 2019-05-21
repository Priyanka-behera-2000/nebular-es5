"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbDialogModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _shared = require("../shared/shared.module");

var _cdk = require("../cdk");

var _dialog = require("./dialog.service");

var _dialogContainer = require("./dialog-container");

var _dialogConfig = require("./dialog-config");

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

var NbDialogModule = /** @class */function () {
    function NbDialogModule() {}
    NbDialogModule_1 = NbDialogModule;
    NbDialogModule.forRoot = function (dialogConfig) {
        if (dialogConfig === void 0) {
            dialogConfig = {};
        }
        return {
            ngModule: NbDialogModule_1,
            providers: [_dialog.NbDialogService, { provide: _dialogConfig.NB_DIALOG_CONFIG, useValue: dialogConfig }]
        };
    };
    NbDialogModule.forChild = function (dialogConfig) {
        if (dialogConfig === void 0) {
            dialogConfig = {};
        }
        return {
            ngModule: NbDialogModule_1,
            providers: [_dialog.NbDialogService, { provide: _dialogConfig.NB_DIALOG_CONFIG, useValue: dialogConfig }]
        };
    };
    var NbDialogModule_1;
    NbDialogModule = NbDialogModule_1 = __decorate([(0, _core.NgModule)({
        imports: [_shared.NbSharedModule, _cdk.NbOverlayModule],
        declarations: [_dialogContainer.NbDialogContainerComponent],
        entryComponents: [_dialogContainer.NbDialogContainerComponent]
    })], NbDialogModule);
    return NbDialogModule;
}();
exports.NbDialogModule = NbDialogModule;
//# sourceMappingURL=dialog.module.js.map
//# sourceMappingURL=dialog.module.js.map