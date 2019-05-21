"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbSecurityModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _common = require("@angular/common");

var _security = require("./security.options");

var _acl = require("./services/acl.service");

var _accessChecker = require("./services/access-checker.service");

var _isGranted = require("./directives/is-granted.directive");

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NbSecurityModule = /** @class */function () {
    function NbSecurityModule() {}
    NbSecurityModule_1 = NbSecurityModule;
    NbSecurityModule.forRoot = function (nbSecurityOptions) {
        return {
            ngModule: NbSecurityModule_1,
            providers: [{ provide: _security.NB_SECURITY_OPTIONS_TOKEN, useValue: nbSecurityOptions }, _acl.NbAclService, _accessChecker.NbAccessChecker],
            exports: [_isGranted.NbIsGrantedDirective]
        };
    };
    var NbSecurityModule_1;
    NbSecurityModule = NbSecurityModule_1 = __decorate([(0, _core.NgModule)({
        imports: [_common.CommonModule],
        declarations: [_isGranted.NbIsGrantedDirective],
        exports: [_isGranted.NbIsGrantedDirective]
    })], NbSecurityModule);
    return NbSecurityModule;
}();
exports.NbSecurityModule = NbSecurityModule;
//# sourceMappingURL=security.module.js.map
//# sourceMappingURL=security.module.js.map