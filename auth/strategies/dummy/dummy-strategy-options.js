'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dummyStrategyOptions = exports.NbDummyAuthStrategyOptions = undefined;

var _authStrategyOptions = require('../auth-strategy-options');

var _services = require('../../services/');

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
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

var NbDummyAuthStrategyOptions = /** @class */function (_super) {
    __extends(NbDummyAuthStrategyOptions, _super);
    function NbDummyAuthStrategyOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.token = {
            class: _services.NbAuthSimpleToken
        };
        _this.delay = 1000;
        _this.alwaysFail = false;
        return _this;
    }
    return NbDummyAuthStrategyOptions;
}(_authStrategyOptions.NbAuthStrategyOptions);
exports.NbDummyAuthStrategyOptions = NbDummyAuthStrategyOptions;
var dummyStrategyOptions = exports.dummyStrategyOptions = new NbDummyAuthStrategyOptions();
//# sourceMappingURL=dummy-strategy-options.js.map
//# sourceMappingURL=dummy-strategy-options.js.map