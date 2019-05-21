"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbInputDirective = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _helpers = require("../helpers");

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
 * Basic input directive.
 *
 * ```html
 * <input nbInput></input>
 * ```
 *
 * ### Installation
 *
 * Import `NbInputModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbInputModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Default input size is `medium`:
 * @stacked-example(Showcase, input/input-showcase.component)
 *
 * Inputs are available in multiple colors using `status` property:
 * @stacked-example(Input Colors, input/input-colors.component)
 *
 * There are three input sizes:
 *
 * @stacked-example(Input Sizes, input/input-sizes.component)
 *
 * Inputs available in different shapes, which could be combined with the other properties:
 * @stacked-example(Input Shapes, input/input-shapes.component)
 *
 * `nbInput` could be applied to the following selectors - `input`, `textarea`:
 * @stacked-example(Input Elements, input/input-types.component)
 *
 * You can add `fullWidth` attribute to make element fill container:
 * @stacked-example(Full width inputs, input/input-full-width.component)
 *
 * Or you can bind control with form controls or ngModel:
 * @stacked-example(Input form binding, input/input-form.component)
 *
 * @styles
 *
 * input-background-color:
 * input-border-width:
 * input-border-style:
 * input-placeholder-text-color:
 * input-placeholder-text-font-family:
 * input-text-color:
 * input-text-font-family:
 * input-border-color:
 * input-focus-border-color:
 * input-hover-border-color:
 * input-disabled-border-color:
 * input-disabled-background-color:
 * input-disabled-text-color:
 * input-disabled-placeholder-text-color:
 * input-primary-border-color:
 * input-primary-focus-border-color:
 * input-primary-hover-border-color:
 * input-success-border-color:
 * input-success-focus-border-color:
 * input-success-hover-border-color:
 * input-info-border-color:
 * input-info-focus-border-color:
 * input-info-hover-border-color:
 * input-warning-border-color:
 * input-warning-focus-border-color:
 * input-warning-hover-border-color:
 * input-danger-border-color:
 * input-danger-focus-border-color:
 * input-danger-hover-border-color:
 * input-rectangle-border-radius:
 * input-semi-round-border-radius:
 * input-round-border-radius:
 * input-tiny-text-font-size:
 * input-tiny-text-font-weight:
 * input-tiny-text-line-height:
 * input-tiny-placeholder-text-font-size:
 * input-tiny-placeholder-text-font-weight:
 * input-tiny-placeholder-text-line-height:
 * input-tiny-padding:
 * input-small-text-font-size:
 * input-small-text-font-weight:
 * input-small-text-line-height:
 * input-small-placeholder-text-font-size:
 * input-small-placeholder-text-font-weight:
 * input-small-placeholder-text-line-height:
 * input-small-padding:
 * input-medium-text-font-size:
 * input-medium-text-font-weight:
 * input-medium-text-line-height:
 * input-medium-placeholder-text-font-size:
 * input-medium-placeholder-text-font-weight:
 * input-medium-placeholder-text-line-height:
 * input-medium-padding:
 * input-large-text-font-size:
 * input-large-text-font-weight:
 * input-large-text-line-height:
 * input-large-placeholder-text-font-size:
 * input-large-placeholder-text-font-weight:
 * input-large-placeholder-text-line-height:
 * input-large-padding:
 * input-giant-text-font-size:
 * input-giant-text-font-weight:
 * input-giant-text-line-height:
 * input-giant-placeholder-text-font-size:
 * input-giant-placeholder-text-font-weight:
 * input-giant-placeholder-text-line-height:
 * input-giant-padding:
 */
var NbInputDirective = /** @class */function () {
    function NbInputDirective() {
        /**
         * Field size modifications. Possible values: `small`, `medium` (default), `large`.
         */
        this.fieldSize = 'medium';
        /**
         * Field status (adds specific styles):
         * `primary`, `info`, `success`, `warning`, `danger`
         */
        this.status = '';
        /**
         * Field shapes modifications. Possible values: `rectangle` (default), `round`, `semi-round`.
         */
        this.shape = 'rectangle';
        this._fullWidth = false;
    }
    Object.defineProperty(NbInputDirective.prototype, "fullWidth", {
        /**
         * If set element will fill container. `false` by default.
         */
        get: function get() {
            return this._fullWidth;
        },
        set: function set(value) {
            this._fullWidth = (0, _helpers.convertToBoolProperty)(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "tiny", {
        get: function get() {
            return this.fieldSize === 'tiny';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "small", {
        get: function get() {
            return this.fieldSize === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "medium", {
        get: function get() {
            return this.fieldSize === 'medium';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "large", {
        get: function get() {
            return this.fieldSize === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "giant", {
        get: function get() {
            return this.fieldSize === 'giant';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "primary", {
        get: function get() {
            return this.status === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "info", {
        get: function get() {
            return this.status === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "success", {
        get: function get() {
            return this.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "warning", {
        get: function get() {
            return this.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "danger", {
        get: function get() {
            return this.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "rectangle", {
        get: function get() {
            return this.shape === 'rectangle';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "semiRound", {
        get: function get() {
            return this.shape === 'semi-round';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbInputDirective.prototype, "round", {
        get: function get() {
            return this.shape === 'round';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbInputDirective.prototype, "fieldSize", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbInputDirective.prototype, "status", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbInputDirective.prototype, "shape", void 0);
    __decorate([(0, _core.Input)(), (0, _core.HostBinding)('class.input-full-width'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbInputDirective.prototype, "fullWidth", null);
    __decorate([(0, _core.HostBinding)('class.size-tiny'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbInputDirective.prototype, "tiny", null);
    __decorate([(0, _core.HostBinding)('class.size-small'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbInputDirective.prototype, "small", null);
    __decorate([(0, _core.HostBinding)('class.size-medium'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbInputDirective.prototype, "medium", null);
    __decorate([(0, _core.HostBinding)('class.size-large'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbInputDirective.prototype, "large", null);
    __decorate([(0, _core.HostBinding)('class.size-giant'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbInputDirective.prototype, "giant", null);
    __decorate([(0, _core.HostBinding)('class.status-primary'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbInputDirective.prototype, "primary", null);
    __decorate([(0, _core.HostBinding)('class.status-info'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbInputDirective.prototype, "info", null);
    __decorate([(0, _core.HostBinding)('class.status-success'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbInputDirective.prototype, "success", null);
    __decorate([(0, _core.HostBinding)('class.status-warning'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbInputDirective.prototype, "warning", null);
    __decorate([(0, _core.HostBinding)('class.status-danger'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbInputDirective.prototype, "danger", null);
    __decorate([(0, _core.HostBinding)('class.shape-rectangle'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbInputDirective.prototype, "rectangle", null);
    __decorate([(0, _core.HostBinding)('class.shape-semi-round'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbInputDirective.prototype, "semiRound", null);
    __decorate([(0, _core.HostBinding)('class.shape-round'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbInputDirective.prototype, "round", null);
    NbInputDirective = __decorate([(0, _core.Directive)({
        selector: 'input[nbInput],textarea[nbInput]'
    })], NbInputDirective);
    return NbInputDirective;
}();
exports.NbInputDirective = NbInputDirective;
//# sourceMappingURL=input.directive.js.map
//# sourceMappingURL=input.directive.js.map