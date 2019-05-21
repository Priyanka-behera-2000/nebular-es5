'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.auth2StrategyOptions = exports.NbOAuth2AuthStrategyOptions = exports.NbOAuth2ClientAuthMethod = exports.NbOAuth2GrantType = exports.NbOAuth2ResponseType = undefined;

var _services = require('../../services');

var _authStrategyOptions = require('../auth-strategy-options');

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
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
var NbOAuth2ResponseType = exports.NbOAuth2ResponseType = undefined;
(function (NbOAuth2ResponseType) {
    NbOAuth2ResponseType["CODE"] = "code";
    NbOAuth2ResponseType["TOKEN"] = "token";
})(NbOAuth2ResponseType || (exports.NbOAuth2ResponseType = NbOAuth2ResponseType = {}));
// TODO: client_credentials
var NbOAuth2GrantType = exports.NbOAuth2GrantType = undefined;
(function (NbOAuth2GrantType) {
    NbOAuth2GrantType["AUTHORIZATION_CODE"] = "authorization_code";
    NbOAuth2GrantType["PASSWORD"] = "password";
    NbOAuth2GrantType["REFRESH_TOKEN"] = "refresh_token";
})(NbOAuth2GrantType || (exports.NbOAuth2GrantType = NbOAuth2GrantType = {}));
var NbOAuth2ClientAuthMethod = exports.NbOAuth2ClientAuthMethod = undefined;
(function (NbOAuth2ClientAuthMethod) {
    NbOAuth2ClientAuthMethod["NONE"] = "none";
    NbOAuth2ClientAuthMethod["BASIC"] = "basic";
    NbOAuth2ClientAuthMethod["REQUEST_BODY"] = "request-body";
})(NbOAuth2ClientAuthMethod || (exports.NbOAuth2ClientAuthMethod = NbOAuth2ClientAuthMethod = {}));
var NbOAuth2AuthStrategyOptions = /** @class */function (_super) {
    __extends(NbOAuth2AuthStrategyOptions, _super);
    function NbOAuth2AuthStrategyOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseEndpoint = '';
        _this.clientId = '';
        _this.clientSecret = '';
        _this.clientAuthMethod = NbOAuth2ClientAuthMethod.NONE;
        _this.redirect = {
            success: '/',
            failure: null
        };
        _this.defaultErrors = ['Something went wrong, please try again.'];
        _this.defaultMessages = ['You have been successfully authenticated.'];
        _this.authorize = {
            endpoint: 'authorize',
            responseType: NbOAuth2ResponseType.CODE
        };
        _this.token = {
            endpoint: 'token',
            grantType: NbOAuth2GrantType.AUTHORIZATION_CODE,
            requireValidToken: false,
            class: _services.NbAuthOAuth2Token
        };
        _this.refresh = {
            endpoint: 'token',
            grantType: NbOAuth2GrantType.REFRESH_TOKEN
        };
        return _this;
    }
    return NbOAuth2AuthStrategyOptions;
}(_authStrategyOptions.NbAuthStrategyOptions);
exports.NbOAuth2AuthStrategyOptions = NbOAuth2AuthStrategyOptions;
var auth2StrategyOptions = exports.auth2StrategyOptions = new NbOAuth2AuthStrategyOptions();
//# sourceMappingURL=oauth2-strategy.options.js.map
//# sourceMappingURL=oauth2-strategy.options.js.map