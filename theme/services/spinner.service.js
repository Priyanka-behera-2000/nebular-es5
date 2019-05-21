"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbSpinnerService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _theme = require("../theme.options");

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
 * Service to control the global page spinner.
 */
var NbSpinnerService = /** @class */function () {
    function NbSpinnerService(document) {
        this.document = document;
        this.loaders = [];
        this.selector = 'nb-global-spinner';
    }
    /**
     * Appends new loader to the list of loader to be completed before
     * spinner will be hidden
     * @param method Promise<any>
     */
    NbSpinnerService.prototype.registerLoader = function (method) {
        this.loaders.push(method);
    };
    /**
     * Clears the list of loader
     */
    NbSpinnerService.prototype.clear = function () {
        this.loaders = [];
    };
    /**
     * Start the loader process, show spinnder and execute loaders
     */
    NbSpinnerService.prototype.load = function () {
        this.showSpinner();
        this.executeAll();
    };
    NbSpinnerService.prototype.executeAll = function (done) {
        var _this = this;
        if (done === void 0) {
            done = function done() {};
        }
        Promise.all(this.loaders).then(function (values) {
            _this.hideSpinner();
            done.call(null, values);
        }).catch(function (error) {
            // TODO: Promise.reject
            console.error(error);
        });
    };
    // TODO is there any better way of doing this?
    NbSpinnerService.prototype.showSpinner = function () {
        var el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'block';
        }
    };
    NbSpinnerService.prototype.hideSpinner = function () {
        var el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'none';
        }
    };
    NbSpinnerService.prototype.getSpinnerElement = function () {
        return this.document.getElementById(this.selector);
    };
    NbSpinnerService = __decorate([(0, _core.Injectable)(), __param(0, (0, _core.Inject)(_theme.NB_DOCUMENT)), __metadata("design:paramtypes", [Object])], NbSpinnerService);
    return NbSpinnerService;
}();
exports.NbSpinnerService = NbSpinnerService;
//# sourceMappingURL=spinner.service.js.map
//# sourceMappingURL=spinner.service.js.map