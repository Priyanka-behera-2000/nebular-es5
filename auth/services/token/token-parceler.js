"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbAuthTokenParceler = exports.NB_AUTH_FALLBACK_TOKEN = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _token = require("./token");

var _auth = require("../../auth.options");

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
var NB_AUTH_FALLBACK_TOKEN = exports.NB_AUTH_FALLBACK_TOKEN = new _core.InjectionToken('Nebular Auth Options');
/**
 * Creates a token parcel which could be stored/restored
 */
var NbAuthTokenParceler = /** @class */function () {
    function NbAuthTokenParceler(fallbackClass, tokenClasses) {
        this.fallbackClass = fallbackClass;
        this.tokenClasses = tokenClasses;
    }
    NbAuthTokenParceler.prototype.wrap = function (token) {
        return JSON.stringify({
            name: token.getName(),
            ownerStrategyName: token.getOwnerStrategyName(),
            createdAt: token.getCreatedAt().getTime(),
            value: token.toString()
        });
    };
    NbAuthTokenParceler.prototype.unwrap = function (value) {
        var tokenClass = this.fallbackClass;
        var tokenValue = '';
        var tokenOwnerStrategyName = '';
        var tokenCreatedAt = null;
        var tokenPack = this.parseTokenPack(value);
        if (tokenPack) {
            tokenClass = this.getClassByName(tokenPack.name) || this.fallbackClass;
            tokenValue = tokenPack.value;
            tokenOwnerStrategyName = tokenPack.ownerStrategyName;
            tokenCreatedAt = new Date(Number(tokenPack.createdAt));
        }
        return (0, _token.nbAuthCreateToken)(tokenClass, tokenValue, tokenOwnerStrategyName, tokenCreatedAt);
    };
    // TODO: this could be moved to a separate token registry
    NbAuthTokenParceler.prototype.getClassByName = function (name) {
        return this.tokenClasses.find(function (tokenClass) {
            return tokenClass.NAME === name;
        });
    };
    NbAuthTokenParceler.prototype.parseTokenPack = function (value) {
        try {
            return JSON.parse(value);
        } catch (e) {}
        return null;
    };
    NbAuthTokenParceler = __decorate([(0, _core.Injectable)(), __param(0, (0, _core.Inject)(NB_AUTH_FALLBACK_TOKEN)), __param(1, (0, _core.Inject)(_auth.NB_AUTH_TOKENS)), __metadata("design:paramtypes", [Object, Array])], NbAuthTokenParceler);
    return NbAuthTokenParceler;
}();
exports.NbAuthTokenParceler = NbAuthTokenParceler;
//# sourceMappingURL=token-parceler.js.map
//# sourceMappingURL=token-parceler.js.map