"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCdkAdapterModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _overlay = require("@angular/cdk/overlay");

var _overlayContainerAdapter = require("./overlay-container-adapter");

var _scrollDispatcherAdapter = require("./scroll-dispatcher-adapter");

var _viewportRulerAdapter = require("./viewport-ruler-adapter");

var _blockScrollStrategyAdapter = require("./block-scroll-strategy-adapter");

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NbCdkAdapterModule = /** @class */function () {
    function NbCdkAdapterModule() {}
    NbCdkAdapterModule_1 = NbCdkAdapterModule;
    NbCdkAdapterModule.forRoot = function () {
        return {
            ngModule: NbCdkAdapterModule_1,
            providers: [_viewportRulerAdapter.NbViewportRulerAdapter, _overlayContainerAdapter.NbOverlayContainerAdapter, _blockScrollStrategyAdapter.NbBlockScrollStrategyAdapter, { provide: _overlay.OverlayContainer, useExisting: _overlayContainerAdapter.NbOverlayContainerAdapter }, { provide: _overlay.ScrollDispatcher, useClass: _scrollDispatcherAdapter.NbScrollDispatcherAdapter }, { provide: _overlay.ScrollStrategyOptions, useClass: _blockScrollStrategyAdapter.NbScrollStrategyOptions }]
        };
    };
    var NbCdkAdapterModule_1;
    NbCdkAdapterModule = NbCdkAdapterModule_1 = __decorate([(0, _core.NgModule)({})], NbCdkAdapterModule);
    return NbCdkAdapterModule;
}();
exports.NbCdkAdapterModule = NbCdkAdapterModule;
//# sourceMappingURL=adapter.module.js.map
//# sourceMappingURL=adapter.module.js.map