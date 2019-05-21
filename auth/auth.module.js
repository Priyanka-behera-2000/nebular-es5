"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbAuthModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.nbStrategiesFactory = nbStrategiesFactory;
exports.nbTokensFactory = nbTokensFactory;
exports.nbOptionsFactory = nbOptionsFactory;
exports.nbNoOpInterceptorFilter = nbNoOpInterceptorFilter;

var _core = require("@angular/core");

var _common = require("@angular/common");

var _router = require("@angular/router");

var _forms = require("@angular/forms");

var _theme = require("@nebular/theme");

var _services = require("./services");

var _strategies = require("./strategies");

var _auth = require("./auth.options");

var _auth2 = require("./components/auth.component");

var _authBlock = require("./components/auth-block/auth-block.component");

var _login = require("./components/login/login.component");

var _register = require("./components/register/register.component");

var _logout = require("./components/logout/logout.component");

var _requestPassword = require("./components/request-password/request-password.component");

var _resetPassword = require("./components/reset-password/reset-password.component");

var _helpers = require("./helpers");

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function nbStrategiesFactory(options, injector) {
    var strategies = [];
    options.strategies.forEach(function (_a) {
        var strategyClass = _a[0],
            strategyOptions = _a[1];
        var strategy = injector.get(strategyClass);
        strategy.setOptions(strategyOptions);
        strategies.push(strategy);
    });
    return strategies;
}
function nbTokensFactory(strategies) {
    var tokens = [];
    strategies.forEach(function (strategy) {
        tokens.push(strategy.getOption('token.class'));
    });
    return tokens;
}
function nbOptionsFactory(options) {
    return (0, _helpers.deepExtend)(_auth.defaultAuthOptions, options);
}
function nbNoOpInterceptorFilter(req) {
    return true;
}
var NbAuthModule = /** @class */function () {
    function NbAuthModule() {}
    NbAuthModule_1 = NbAuthModule;
    NbAuthModule.forRoot = function (nbAuthOptions) {
        return {
            ngModule: NbAuthModule_1,
            providers: [{ provide: _auth.NB_AUTH_USER_OPTIONS, useValue: nbAuthOptions }, { provide: _auth.NB_AUTH_OPTIONS, useFactory: nbOptionsFactory, deps: [_auth.NB_AUTH_USER_OPTIONS] }, { provide: _auth.NB_AUTH_STRATEGIES, useFactory: nbStrategiesFactory, deps: [_auth.NB_AUTH_OPTIONS, _core.Injector] }, { provide: _auth.NB_AUTH_TOKENS, useFactory: nbTokensFactory, deps: [_auth.NB_AUTH_STRATEGIES] }, { provide: _services.NB_AUTH_FALLBACK_TOKEN, useValue: _services.NbAuthSimpleToken }, { provide: _auth.NB_AUTH_INTERCEPTOR_HEADER, useValue: 'Authorization' }, { provide: _auth.NB_AUTH_TOKEN_INTERCEPTOR_FILTER, useValue: nbNoOpInterceptorFilter }, { provide: _services.NbTokenStorage, useClass: _services.NbTokenLocalStorage }, _services.NbAuthTokenParceler, _services.NbAuthService, _services.NbTokenService, _strategies.NbDummyAuthStrategy, _strategies.NbPasswordAuthStrategy, _strategies.NbOAuth2AuthStrategy]
        };
    };
    var NbAuthModule_1;
    NbAuthModule = NbAuthModule_1 = __decorate([(0, _core.NgModule)({
        imports: [_common.CommonModule, _theme.NbLayoutModule, _theme.NbCardModule, _theme.NbCheckboxModule, _theme.NbAlertModule, _theme.NbInputModule, _theme.NbButtonModule, _router.RouterModule, _forms.FormsModule, _theme.NbIconModule],
        declarations: [_auth2.NbAuthComponent, _authBlock.NbAuthBlockComponent, _login.NbLoginComponent, _register.NbRegisterComponent, _requestPassword.NbRequestPasswordComponent, _resetPassword.NbResetPasswordComponent, _logout.NbLogoutComponent],
        exports: [_auth2.NbAuthComponent, _authBlock.NbAuthBlockComponent, _login.NbLoginComponent, _register.NbRegisterComponent, _requestPassword.NbRequestPasswordComponent, _resetPassword.NbResetPasswordComponent, _logout.NbLogoutComponent]
    })], NbAuthModule);
    return NbAuthModule;
}();
exports.NbAuthModule = NbAuthModule;
//# sourceMappingURL=auth.module.js.map
//# sourceMappingURL=auth.module.js.map