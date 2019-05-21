"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbPlatformModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _platform = require("@angular/cdk/platform");

var _platform2 = require("./platform");

var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NbPlatformModule = /** @class */function (_super) {
    __extends(NbPlatformModule, _super);
    function NbPlatformModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPlatformModule = __decorate([(0, _core.NgModule)({
        providers: [{ provide: _platform2.NbPlatform, useExisting: _platform.Platform }]
    })], NbPlatformModule);
    return NbPlatformModule;
}(_platform.PlatformModule);
exports.NbPlatformModule = NbPlatformModule;
//# sourceMappingURL=platform.module.js.map
//# sourceMappingURL=platform.module.js.map