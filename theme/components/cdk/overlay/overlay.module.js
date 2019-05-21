"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbOverlayModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _shared = require("../../shared/shared.module");

var _a11y = require("../a11y/a11y.module");

var _mapping = require("./mapping");

var _overlayPosition = require("./overlay-position");

var _overlayContainer = require("./overlay-container");

var _overlay = require("./overlay");

var _adapter = require("../adapter/adapter.module");

var _positionHelper = require("./position-helper");

var _overlayTrigger = require("./overlay-trigger");

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NbOverlayModule = /** @class */function () {
    function NbOverlayModule() {}
    NbOverlayModule_1 = NbOverlayModule;
    NbOverlayModule.forRoot = function () {
        return {
            ngModule: NbOverlayModule_1,
            providers: [_overlayPosition.NbPositionBuilderService, _overlayTrigger.NbTriggerStrategyBuilderService, _overlay.NbOverlayService, _positionHelper.NbPositionHelper].concat(_mapping.NbCdkMappingModule.forRoot().providers, _adapter.NbCdkAdapterModule.forRoot().providers, _a11y.NbA11yModule.forRoot().providers)
        };
    };
    var NbOverlayModule_1;
    NbOverlayModule = NbOverlayModule_1 = __decorate([(0, _core.NgModule)({
        imports: [_mapping.NbCdkMappingModule, _shared.NbSharedModule],
        declarations: [_overlayContainer.NbOverlayContainerComponent],
        exports: [_mapping.NbCdkMappingModule, _adapter.NbCdkAdapterModule, _overlayContainer.NbOverlayContainerComponent]
    })], NbOverlayModule);
    return NbOverlayModule;
}();
exports.NbOverlayModule = NbOverlayModule;
//# sourceMappingURL=overlay.module.js.map
//# sourceMappingURL=overlay.module.js.map