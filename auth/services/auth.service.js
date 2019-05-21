"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbAuthService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _auth = require("../auth.options");

var _token = require("./token/token.service");

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
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Common authentication service.
 * Should be used to as an interlayer between UI Components and Auth Strategy.
 */
var NbAuthService = /** @class */function () {
    function NbAuthService(tokenService, strategies) {
        this.tokenService = tokenService;
        this.strategies = strategies;
    }
    /**
     * Retrieves current authenticated token stored
     * @returns {Observable<any>}
     */
    NbAuthService.prototype.getToken = function () {
        return this.tokenService.get();
    };
    /**
     * Returns true if auth token is present in the token storage
     * @returns {Observable<boolean>}
     */
    NbAuthService.prototype.isAuthenticated = function () {
        return this.getToken().pipe((0, _operators.map)(function (token) {
            return token.isValid();
        }));
    };
    /**
     * Returns true if valid auth token is present in the token storage.
     * If not, calls the strategy refreshToken, and returns isAuthenticated() if success, false otherwise
     * @returns {Observable<boolean>}
     */
    NbAuthService.prototype.isAuthenticatedOrRefresh = function () {
        var _this = this;
        return this.getToken().pipe((0, _operators.switchMap)(function (token) {
            if (token.getValue() && !token.isValid()) {
                return _this.refreshToken(token.getOwnerStrategyName(), token).pipe((0, _operators.switchMap)(function (res) {
                    if (res.isSuccess()) {
                        return _this.isAuthenticated();
                    } else {
                        return (0, _rxjs.of)(false);
                    }
                }));
            } else {
                return (0, _rxjs.of)(token.isValid());
            }
        }));
    };
    /**
     * Returns tokens stream
     * @returns {Observable<NbAuthSimpleToken>}
     */
    NbAuthService.prototype.onTokenChange = function () {
        return this.tokenService.tokenChange();
    };
    /**
     * Returns authentication status stream
     * @returns {Observable<boolean>}
     */
    NbAuthService.prototype.onAuthenticationChange = function () {
        return this.onTokenChange().pipe((0, _operators.map)(function (token) {
            return token.isValid();
        }));
    };
    /**
     * Authenticates with the selected strategy
     * Stores received token in the token storage
     *
     * Example:
     * authenticate('email', {email: 'email@example.com', password: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.authenticate = function (strategyName, data) {
        var _this = this;
        return this.getStrategy(strategyName).authenticate(data).pipe((0, _operators.switchMap)(function (result) {
            return _this.processResultToken(result);
        }));
    };
    /**
     * Registers with the selected strategy
     * Stores received token in the token storage
     *
     * Example:
     * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.register = function (strategyName, data) {
        var _this = this;
        return this.getStrategy(strategyName).register(data).pipe((0, _operators.switchMap)(function (result) {
            return _this.processResultToken(result);
        }));
    };
    /**
     * Sign outs with the selected strategy
     * Removes token from the token storage
     *
     * Example:
     * logout('email')
     *
     * @param strategyName
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.logout = function (strategyName) {
        var _this = this;
        return this.getStrategy(strategyName).logout().pipe((0, _operators.switchMap)(function (result) {
            if (result.isSuccess()) {
                _this.tokenService.clear().pipe((0, _operators.map)(function () {
                    return result;
                }));
            }
            return (0, _rxjs.of)(result);
        }));
    };
    /**
     * Sends forgot password request to the selected strategy
     *
     * Example:
     * requestPassword('email', {email: 'email@example.com'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.requestPassword = function (strategyName, data) {
        return this.getStrategy(strategyName).requestPassword(data);
    };
    /**
     * Tries to reset password with the selected strategy
     *
     * Example:
     * resetPassword('email', {newPassword: 'test'})
     *
     * @param strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.resetPassword = function (strategyName, data) {
        return this.getStrategy(strategyName).resetPassword(data);
    };
    /**
     * Sends a refresh token request
     * Stores received token in the token storage
     *
     * Example:
     * refreshToken('email', {token: token})
     *
     * @param {string} strategyName
     * @param data
     * @returns {Observable<NbAuthResult>}
     */
    NbAuthService.prototype.refreshToken = function (strategyName, data) {
        var _this = this;
        return this.getStrategy(strategyName).refreshToken(data).pipe((0, _operators.switchMap)(function (result) {
            return _this.processResultToken(result);
        }));
    };
    /**
     * Get registered strategy by name
     *
     * Example:
     * getStrategy('email')
     *
     * @param {string} provider
     * @returns {NbAbstractAuthProvider}
     */
    NbAuthService.prototype.getStrategy = function (strategyName) {
        var found = this.strategies.find(function (strategy) {
            return strategy.getName() === strategyName;
        });
        if (!found) {
            throw new TypeError("There is no Auth Strategy registered under '" + strategyName + "' name");
        }
        return found;
    };
    NbAuthService.prototype.processResultToken = function (result) {
        if (result.isSuccess() && result.getToken()) {
            return this.tokenService.set(result.getToken()).pipe((0, _operators.map)(function (token) {
                return result;
            }));
        }
        return (0, _rxjs.of)(result);
    };
    NbAuthService = __decorate([(0, _core.Injectable)(), __param(1, (0, _core.Inject)(_auth.NB_AUTH_STRATEGIES)), __metadata("design:paramtypes", [_token.NbTokenService, Object])], NbAuthService);
    return NbAuthService;
}();
exports.NbAuthService = NbAuthService;
//# sourceMappingURL=auth.service.js.map
//# sourceMappingURL=auth.service.js.map