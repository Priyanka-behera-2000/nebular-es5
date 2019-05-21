"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbDummyAuthStrategy = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _authStrategy = require("../auth-strategy");

var _authResult = require("../../services/auth-result");

var _dummyStrategyOptions = require("./dummy-strategy-options");

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

/**
 * Dummy auth strategy. Could be useful for auth setup when backend is not available yet.
 *
 *
 * Strategy settings.
 *
 * ```ts
 * export class NbDummyAuthStrategyOptions extends NbAuthStrategyOptions {
 *   name = 'dummy';
 *   token = {
 *     class: NbAuthSimpleToken,
 *   };
 *   delay? = 1000;
 *   alwaysFail? = false;
 * }
 * ```
 */
var NbDummyAuthStrategy = /** @class */function (_super) {
    __extends(NbDummyAuthStrategy, _super);
    function NbDummyAuthStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = _dummyStrategyOptions.dummyStrategyOptions;
        return _this;
    }
    NbDummyAuthStrategy_1 = NbDummyAuthStrategy;
    NbDummyAuthStrategy.setup = function (options) {
        return [NbDummyAuthStrategy_1, options];
    };
    NbDummyAuthStrategy.prototype.authenticate = function (data) {
        return (0, _rxjs.of)(this.createDummyResult(data)).pipe((0, _operators.delay)(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.register = function (data) {
        return (0, _rxjs.of)(this.createDummyResult(data)).pipe((0, _operators.delay)(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.requestPassword = function (data) {
        return (0, _rxjs.of)(this.createDummyResult(data)).pipe((0, _operators.delay)(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.resetPassword = function (data) {
        return (0, _rxjs.of)(this.createDummyResult(data)).pipe((0, _operators.delay)(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.logout = function (data) {
        return (0, _rxjs.of)(this.createDummyResult(data)).pipe((0, _operators.delay)(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.refreshToken = function (data) {
        return (0, _rxjs.of)(this.createDummyResult(data)).pipe((0, _operators.delay)(this.getOption('delay')));
    };
    NbDummyAuthStrategy.prototype.createDummyResult = function (data) {
        if (this.getOption('alwaysFail')) {
            return new _authResult.NbAuthResult(false, this.createFailResponse(data), null, ['Something went wrong.']);
        }
        try {
            var token = this.createToken('test token', true);
            return new _authResult.NbAuthResult(true, this.createSuccessResponse(data), '/', [], ['Successfully logged in.'], token);
        } catch (err) {
            return new _authResult.NbAuthResult(false, this.createFailResponse(data), null, [err.message]);
        }
    };
    var NbDummyAuthStrategy_1;
    NbDummyAuthStrategy = NbDummyAuthStrategy_1 = __decorate([(0, _core.Injectable)()], NbDummyAuthStrategy);
    return NbDummyAuthStrategy;
}(_authStrategy.NbAuthStrategy);
exports.NbDummyAuthStrategy = NbDummyAuthStrategy;
//# sourceMappingURL=dummy-strategy.js.map
//# sourceMappingURL=dummy-strategy.js.map