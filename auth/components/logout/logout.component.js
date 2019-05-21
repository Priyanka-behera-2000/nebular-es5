"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbLogoutComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _router = require("@angular/router");

var _auth = require("../../auth.options");

var _helpers = require("../../helpers");

var _auth2 = require("../../services/auth.service");

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

var NbLogoutComponent = /** @class */function () {
    function NbLogoutComponent(service, options, router) {
        if (options === void 0) {
            options = {};
        }
        this.service = service;
        this.options = options;
        this.router = router;
        this.redirectDelay = 0;
        this.strategy = '';
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.strategy = this.getConfigValue('forms.logout.strategy');
    }
    NbLogoutComponent.prototype.ngOnInit = function () {
        this.logout(this.strategy);
    };
    NbLogoutComponent.prototype.logout = function (strategy) {
        var _this = this;
        this.service.logout(strategy).subscribe(function (result) {
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    };
    NbLogoutComponent.prototype.getConfigValue = function (key) {
        return (0, _helpers.getDeepFromObject)(this.options, key, null);
    };
    NbLogoutComponent = __decorate([(0, _core.Component)({
        selector: 'nb-logout',
        template: "<div>Logging out, please wait...</div> "
    }), __param(1, (0, _core.Inject)(_auth.NB_AUTH_OPTIONS)), __metadata("design:paramtypes", [_auth2.NbAuthService, Object, _router.Router])], NbLogoutComponent);
    return NbLogoutComponent;
}();
exports.NbLogoutComponent = NbLogoutComponent;
//# sourceMappingURL=logout.component.js.map
//# sourceMappingURL=logout.component.js.map