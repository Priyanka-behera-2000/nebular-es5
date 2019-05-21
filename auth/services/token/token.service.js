"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbTokenService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _tokenStorage = require("./token-storage");

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

/**
 * Service that allows you to manage authentication token - get, set, clear and also listen to token changes over time.
 */
var NbTokenService = /** @class */function () {
    function NbTokenService(tokenStorage) {
        this.tokenStorage = tokenStorage;
        this.token$ = new _rxjs.BehaviorSubject(null);
        this.publishStoredToken();
    }
    /**
     * Publishes token when it changes.
     * @returns {Observable<NbAuthToken>}
     */
    NbTokenService.prototype.tokenChange = function () {
        return this.token$.pipe((0, _operators.filter)(function (value) {
            return !!value;
        }), (0, _operators.share)());
    };
    /**
     * Sets a token into the storage. This method is used by the NbAuthService automatically.
     *
     * @param {NbAuthToken} token
     * @returns {Observable<any>}
     */
    NbTokenService.prototype.set = function (token) {
        this.tokenStorage.set(token);
        this.publishStoredToken();
        return (0, _rxjs.of)(null);
    };
    /**
     * Returns observable of current token
     * @returns {Observable<NbAuthToken>}
     */
    NbTokenService.prototype.get = function () {
        var token = this.tokenStorage.get();
        return (0, _rxjs.of)(token);
    };
    /**
     * Removes the token and published token value
     *
     * @returns {Observable<any>}
     */
    NbTokenService.prototype.clear = function () {
        this.tokenStorage.clear();
        this.publishStoredToken();
        return (0, _rxjs.of)(null);
    };
    NbTokenService.prototype.publishStoredToken = function () {
        this.token$.next(this.tokenStorage.get());
    };
    NbTokenService = __decorate([(0, _core.Injectable)(), __metadata("design:paramtypes", [_tokenStorage.NbTokenStorage])], NbTokenService);
    return NbTokenService;
}();
exports.NbTokenService = NbTokenService;
//# sourceMappingURL=token.service.js.map
//# sourceMappingURL=token.service.js.map