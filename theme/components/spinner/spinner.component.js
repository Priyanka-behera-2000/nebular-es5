"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbSpinnerComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
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
 * Styled spinner component
 *
 * @styles
 *
 * spinner-background-color:
 * spinner-circle-filled-color:
 * spinner-circle-empty-color:
 * spinner-text-color:
 * spinner-text-font-family:
 * spinner-text-font-size:
 * spinner-text-font-weight:
 * spinner-text-line-height:
 * spinner-primary-circle-filled-color:
 * spinner-primary-circle-empty-color:
 * spinner-info-circle-filled-color:
 * spinner-info-circle-empty-color:
 * spinner-success-circle-filled-color:
 * spinner-success-circle-empty-color:
 * spinner-warning-circle-filled-color:
 * spinner-warning-circle-empty-color:
 * spinner-danger-circle-filled-color:
 * spinner-danger-circle-empty-color:
 * spinner-white-circle-filled-color:
 * spinner-white-circle-empty-color:
 * spinner-height-tiny:
 * spinner-height-small:
 * spinner-height-medium:
 * spinner-height-large:
 * spinner-height-giant:
 */
var NbSpinnerComponent = /** @class */function () {
    function NbSpinnerComponent() {
        /**
         * Loading text that is shown near the icon
         * @type string
         */
        this.message = 'Loading...';
        /**
         * Spinner size, available sizes:
         * tiny, small, medium, large, giant
         * @param {string} value
         */
        this.size = 'medium';
    }
    Object.defineProperty(NbSpinnerComponent.prototype, "tiny", {
        get: function get() {
            return this.size === 'tiny';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "small", {
        get: function get() {
            return this.size === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "medium", {
        get: function get() {
            return this.size === 'medium';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "large", {
        get: function get() {
            return this.size === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "giant", {
        get: function get() {
            return this.size === 'giant';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "primary", {
        get: function get() {
            return this.status === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "info", {
        get: function get() {
            return this.status === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "success", {
        get: function get() {
            return this.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "warning", {
        get: function get() {
            return this.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbSpinnerComponent.prototype, "danger", {
        get: function get() {
            return this.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbSpinnerComponent.prototype, "message", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbSpinnerComponent.prototype, "size", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbSpinnerComponent.prototype, "status", void 0);
    __decorate([(0, _core.HostBinding)('class.size-tiny'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbSpinnerComponent.prototype, "tiny", null);
    __decorate([(0, _core.HostBinding)('class.size-small'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbSpinnerComponent.prototype, "small", null);
    __decorate([(0, _core.HostBinding)('class.size-medium'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbSpinnerComponent.prototype, "medium", null);
    __decorate([(0, _core.HostBinding)('class.size-large'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbSpinnerComponent.prototype, "large", null);
    __decorate([(0, _core.HostBinding)('class.size-giant'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbSpinnerComponent.prototype, "giant", null);
    __decorate([(0, _core.HostBinding)('class.status-primary'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbSpinnerComponent.prototype, "primary", null);
    __decorate([(0, _core.HostBinding)('class.status-info'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbSpinnerComponent.prototype, "info", null);
    __decorate([(0, _core.HostBinding)('class.status-success'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbSpinnerComponent.prototype, "success", null);
    __decorate([(0, _core.HostBinding)('class.status-warning'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbSpinnerComponent.prototype, "warning", null);
    __decorate([(0, _core.HostBinding)('class.status-danger'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbSpinnerComponent.prototype, "danger", null);
    NbSpinnerComponent = __decorate([(0, _core.Component)({
        selector: 'nb-spinner',
        template: "\n    <span class=\"spin-circle\"></span>\n    <span class=\"message\" *ngIf=\"message\">{{ message }}</span>\n  ",
        styles: [":host{opacity:1;position:absolute;border-radius:inherit;top:0;right:0;left:0;bottom:0;overflow:hidden;z-index:9999;display:flex;justify-content:center;align-items:center;visibility:visible}:host .spin-circle{animation:spin 0.8s infinite linear;border-radius:50%;border-style:solid;border-width:0.125em;width:1em;height:1em}:host .message{margin-left:0.5rem} "]
    })], NbSpinnerComponent);
    return NbSpinnerComponent;
}();
exports.NbSpinnerComponent = NbSpinnerComponent;
//# sourceMappingURL=spinner.component.js.map
//# sourceMappingURL=spinner.component.js.map