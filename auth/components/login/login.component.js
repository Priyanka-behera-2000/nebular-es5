"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbLoginComponent = undefined;

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

var NbLoginComponent = /** @class */function () {
    function NbLoginComponent(service, options, cd, router) {
        if (options === void 0) {
            options = {};
        }
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.submitted = false;
        this.socialLinks = [];
        this.rememberMe = false;
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.strategy = this.getConfigValue('forms.login.strategy');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
        this.rememberMe = this.getConfigValue('forms.login.rememberMe');
    }
    NbLoginComponent.prototype.login = function () {
        var _this = this;
        this.errors = [];
        this.messages = [];
        this.submitted = true;
        this.service.authenticate(this.strategy, this.user).subscribe(function (result) {
            _this.submitted = false;
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
            } else {
                _this.errors = result.getErrors();
            }
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
            _this.cd.detectChanges();
        });
    };
    NbLoginComponent.prototype.getConfigValue = function (key) {
        return (0, _helpers.getDeepFromObject)(this.options, key, null);
    };
    NbLoginComponent = __decorate([(0, _core.Component)({
        selector: 'nb-login',
        template: "<h1 id=\"title\" class=\"title\">Login</h1> <p class=\"sub-title\">Hello! Log in with your email.</p> <nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\"> <p class=\"alert-title\"><b>Oh snap!</b></p> <ul class=\"alert-message-list\"> <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li> </ul> </nb-alert> <nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\"> <p class=\"alert-title\"><b>Hooray!</b></p> <ul class=\"alert-message-list\"> <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li> </ul> </nb-alert> <form (ngSubmit)=\"login()\" #form=\"ngForm\" aria-labelledby=\"title\"> <div class=\"form-control-group\"> <label class=\"label\" for=\"input-email\">Email address:</label> <input nbInput fullWidth [(ngModel)]=\"user.email\" #email=\"ngModel\" name=\"email\" id=\"input-email\" pattern=\".+@.+\..+\" placeholder=\"Email address\" autofocus [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : ''\" [required]=\"getConfigValue('forms.validation.email.required')\" [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\"> <ng-container *ngIf=\"email.invalid && email.touched\"> <p class=\"error-message\" *ngIf=\"email.errors?.required\"> Email is required! </p> <p class=\"error-message\" *ngIf=\"email.errors?.pattern\"> Email should be the real one! </p> </ng-container> </div> <div class=\"form-control-group\"> <label class=\"label\" for=\"input-password\">Password:</label> <input nbInput fullWidth [(ngModel)]=\"user.password\" #password=\"ngModel\" name=\"password\" type=\"password\" id=\"input-password\" placeholder=\"Password\" [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : ''\" [required]=\"getConfigValue('forms.validation.password.required')\" [minlength]=\"getConfigValue('forms.validation.password.minLength')\" [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\" [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\"> <ng-container *ngIf=\"password.invalid && password.touched \"> <p class=\"error-message\" *ngIf=\"password.errors?.required\"> Password is required! </p> <p class=\"error-message\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\"> Password should contains from {{ getConfigValue('forms.validation.password.minLength') }} to {{ getConfigValue('forms.validation.password.maxLength') }} characters </p> </ng-container> </div> <div class=\"form-control-group accept-group\"> <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\" *ngIf=\"rememberMe\">Remember me</nb-checkbox> <a class=\"forgot-password\" routerLink=\"../request-password\">Forgot Password?</a> </div> <button nbButton fullWidth status=\"success\" [disabled]=\"submitted || !form.valid\" [class.btn-pulse]=\"submitted\"> Log In </button> </form> <section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\"> or enter with: <div class=\"socials\"> <ng-container *ngFor=\"let socialLink of socialLinks\"> <a *ngIf=\"socialLink.link\" [routerLink]=\"socialLink.link\" [attr.target]=\"socialLink.target\" [attr.class]=\"socialLink.icon\" [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a> <a *ngIf=\"socialLink.url\" [attr.href]=\"socialLink.url\" [attr.target]=\"socialLink.target\" [attr.class]=\"socialLink.icon\" [class.with-icon]=\"socialLink.icon\">{{ socialLink.title }}</a> </ng-container> </div> </section> <section class=\"another-action\" aria-label=\"Register\"> Don't have an account? <a class=\"text-link\" routerLink=\"../register\">Register</a> </section> ",
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    }), __param(1, (0, _core.Inject)(_auth.NB_AUTH_OPTIONS)), __metadata("design:paramtypes", [_auth2.NbAuthService, Object, _core.ChangeDetectorRef, _router.Router])], NbLoginComponent);
    return NbLoginComponent;
}();
exports.NbLoginComponent = NbLoginComponent;
//# sourceMappingURL=login.component.js.map
//# sourceMappingURL=login.component.js.map