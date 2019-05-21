"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbAuthJWTInterceptor = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _operators = require("rxjs/operators");

var _auth = require("../auth.service");

var _auth2 = require("../../auth.options");

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};

var NbAuthJWTInterceptor = /** @class */function () {
    function NbAuthJWTInterceptor(injector, filter) {
        this.injector = injector;
        this.filter = filter;
    }
    NbAuthJWTInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // do not intercept request whose urls are filtered by the injected filter
        if (!this.filter(req)) {
            return this.authService.isAuthenticatedOrRefresh().pipe((0, _operators.switchMap)(function (authenticated) {
                if (authenticated) {
                    return _this.authService.getToken().pipe((0, _operators.switchMap)(function (token) {
                        var JWT = "Bearer " + token.getValue();
                        req = req.clone({
                            setHeaders: {
                                Authorization: JWT
                            }
                        });
                        return next.handle(req);
                    }));
                } else {
                    // Request is sent to server without authentication so that the client code
                    // receives the 401/403 error and can act as desired ('session expired', redirect to login, aso)
                    return next.handle(req);
                }
            }));
        } else {
            return next.handle(req);
        }
    };
    Object.defineProperty(NbAuthJWTInterceptor.prototype, "authService", {
        get: function get() {
            return this.injector.get(_auth.NbAuthService);
        },
        enumerable: true,
        configurable: true
    });
    NbAuthJWTInterceptor = __decorate([(0, _core.Injectable)(), __param(1, (0, _core.Inject)(_auth2.NB_AUTH_TOKEN_INTERCEPTOR_FILTER)), __metadata("design:paramtypes", [_core.Injector, Object])], NbAuthJWTInterceptor);
    return NbAuthJWTInterceptor;
}();
exports.NbAuthJWTInterceptor = NbAuthJWTInterceptor;
//# sourceMappingURL=jwt-interceptor.js.map
//# sourceMappingURL=jwt-interceptor.js.map