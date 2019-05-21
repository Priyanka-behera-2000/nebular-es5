"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbWindowModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _common = require("@angular/common");

var _overlay = require("../cdk/overlay");

var _card = require("../card/card.module");

var _icon = require("../icon/icon.module");

var _button = require("../button/button.module");

var _window = require("./window.service");

var _windowsContainer = require("./windows-container.component");

var _window2 = require("./window.component");

var _window3 = require("./window.options");

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NbWindowModule = /** @class */function () {
    function NbWindowModule() {}
    NbWindowModule_1 = NbWindowModule;
    NbWindowModule.forRoot = function (defaultConfig) {
        return {
            ngModule: NbWindowModule_1,
            providers: [_window.NbWindowService, { provide: _window3.NB_WINDOW_CONFIG, useValue: defaultConfig }]
        };
    };
    NbWindowModule.forChild = function (defaultConfig) {
        return {
            ngModule: NbWindowModule_1,
            providers: [_window.NbWindowService, { provide: _window3.NB_WINDOW_CONFIG, useValue: defaultConfig }]
        };
    };
    var NbWindowModule_1;
    NbWindowModule = NbWindowModule_1 = __decorate([(0, _core.NgModule)({
        imports: [_common.CommonModule, _overlay.NbOverlayModule, _card.NbCardModule, _icon.NbIconModule, _button.NbButtonModule],
        declarations: [_windowsContainer.NbWindowsContainerComponent, _window2.NbWindowComponent],
        entryComponents: [_windowsContainer.NbWindowsContainerComponent, _window2.NbWindowComponent]
    })], NbWindowModule);
    return NbWindowModule;
}();
exports.NbWindowModule = NbWindowModule;
//# sourceMappingURL=window.module.js.map
//# sourceMappingURL=window.module.js.map