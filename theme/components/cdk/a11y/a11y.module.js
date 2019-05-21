"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbA11yModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _focusTrap = require("./focus-trap");

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NbA11yModule = /** @class */function () {
    function NbA11yModule() {}
    NbA11yModule_1 = NbA11yModule;
    NbA11yModule.forRoot = function () {
        return {
            ngModule: NbA11yModule_1,
            providers: [_focusTrap.NbFocusTrapFactoryService]
        };
    };
    var NbA11yModule_1;
    NbA11yModule = NbA11yModule_1 = __decorate([(0, _core.NgModule)({})], NbA11yModule);
    return NbA11yModule;
}();
exports.NbA11yModule = NbA11yModule;
//# sourceMappingURL=a11y.module.js.map
//# sourceMappingURL=a11y.module.js.map