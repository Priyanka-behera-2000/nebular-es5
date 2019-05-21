"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCheckboxComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _forms = require("@angular/forms");

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
 * Styled checkbox component
 *
 * @stacked-example(Showcase, checkbox/checkbox-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCheckboxComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCheckboxModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Can have one of the following statuses: danger, success or warning
 *
 * @stacked-example(Colored Checkboxes, checkbox/checkbox-status.component)
 *
 * @additional-example(Disabled Checkbox, checkbox/checkbox-disabled.component)
 * @additional-example(Indeterminate Checkbox, checkbox/checkbox-indeterminate.component)
 *
 * @styles
 *
 * checkbox-height:
 * checkbox-width:
 * checkbox-border-style:
 * checkbox-border-width:
 * checkbox-border-radius:
 * checkbox-outline-width:
 * checkbox-outline-color:
 * checkbox-text-color:
 * checkbox-text-font-family:
 * checkbox-text-font-size:
 * checkbox-text-font-weight:
 * checkbox-text-line-height:
 * checkbox-disabled-background-color:
 * checkbox-disabled-border-color:
 * checkbox-disabled-checkmark-color:
 * checkbox-disabled-text-color:
 * checkbox-primary-background-color:
 * checkbox-primary-border-color:
 * checkbox-primary-checked-background-color:
 * checkbox-primary-checked-border-color:
 * checkbox-primary-checked-checkmark-color:
 * checkbox-primary-indeterminate-background-color:
 * checkbox-primary-indeterminate-border-color:
 * checkbox-primary-indeterminate-checkmark-color:
 * checkbox-primary-focus-background-color:
 * checkbox-primary-hover-background-color:
 * checkbox-primary-hover-border-color:
 * checkbox-primary-active-background-color:
 * checkbox-primary-active-border-color:
 * checkbox-success-background-color:
 * checkbox-success-border-color:
 * checkbox-success-checked-background-color:
 * checkbox-success-checked-border-color:
 * checkbox-success-checked-checkmark-color:
 * checkbox-success-indeterminate-background-color:
 * checkbox-success-indeterminate-border-color:
 * checkbox-success-indeterminate-checkmark-color:
 * checkbox-success-focus-background-color:
 * checkbox-success-hover-background-color:
 * checkbox-success-hover-border-color:
 * checkbox-success-active-background-color:
 * checkbox-success-active-border-color:
 * checkbox-warning-background-color:
 * checkbox-warning-border-color:
 * checkbox-warning-checked-background-color:
 * checkbox-warning-checked-border-color:
 * checkbox-warning-checked-checkmark-color:
 * checkbox-warning-indeterminate-background-color:
 * checkbox-warning-indeterminate-border-color:
 * checkbox-warning-indeterminate-checkmark-color:
 * checkbox-warning-focus-background-color:
 * checkbox-warning-hover-background-color:
 * checkbox-warning-hover-border-color:
 * checkbox-warning-active-background-color:
 * checkbox-warning-active-border-color:
 * checkbox-danger-background-color:
 * checkbox-danger-border-color:
 * checkbox-danger-checked-background-color:
 * checkbox-danger-checked-border-color:
 * checkbox-danger-checked-checkmark-color:
 * checkbox-danger-indeterminate-background-color:
 * checkbox-danger-indeterminate-border-color:
 * checkbox-danger-indeterminate-checkmark-color:
 * checkbox-danger-focus-background-color:
 * checkbox-danger-hover-background-color:
 * checkbox-danger-hover-border-color:
 * checkbox-danger-active-background-color:
 * checkbox-danger-active-border-color:
 * checkbox-info-background-color:
 * checkbox-info-border-color:
 * checkbox-info-checked-background-color:
 * checkbox-info-checked-border-color:
 * checkbox-info-checked-checkmark-color:
 * checkbox-info-indeterminate-background-color:
 * checkbox-info-indeterminate-border-color:
 * checkbox-info-indeterminate-checkmark-color:
 * checkbox-info-focus-background-color:
 * checkbox-info-hover-background-color:
 * checkbox-info-hover-border-color:
 * checkbox-info-active-background-color:
 * checkbox-info-active-border-color:
 */
var NbCheckboxComponent = /** @class */function () {
    function NbCheckboxComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.onChange = function () {};
        this.onTouched = function () {};
        this._value = false;
        this._disabled = false;
        /**
         * Checkbox status.
         * Possible values are: `primary` (default), `success`, `warning`, `danger`, `info`
         */
        this.status = 'primary';
        this._indeterminate = false;
        this.change = new _core.EventEmitter();
    }
    NbCheckboxComponent_1 = NbCheckboxComponent;
    Object.defineProperty(NbCheckboxComponent.prototype, "value", {
        /**
         * Checkbox value
         */
        get: function get() {
            return this._value;
        },
        set: function set(value) {
            this._value = value;
            this.change.emit(value);
            this.onChange(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "disabled", {
        /**
         * Controls input disabled state
         */
        get: function get() {
            return this._disabled;
        },
        set: function set(value) {
            this._disabled = (0, _helpers.convertToBoolProperty)(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "indeterminate", {
        /**
         * Controls checkbox indeterminate state
         */
        get: function get() {
            return this._indeterminate;
        },
        set: function set(value) {
            this._indeterminate = (0, _helpers.convertToBoolProperty)(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "primary", {
        get: function get() {
            return this.status === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "success", {
        get: function get() {
            return this.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "warning", {
        get: function get() {
            return this.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "danger", {
        get: function get() {
            return this.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "info", {
        get: function get() {
            return this.status === 'info';
        },
        enumerable: true,
        configurable: true
    });
    NbCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbCheckboxComponent.prototype.writeValue = function (val) {
        this._value = val;
        this.changeDetector.detectChanges();
    };
    NbCheckboxComponent.prototype.setDisabledState = function (val) {
        this.disabled = (0, _helpers.convertToBoolProperty)(val);
    };
    NbCheckboxComponent.prototype.setTouched = function () {
        this.onTouched();
    };
    NbCheckboxComponent.prototype.updateValueAndIndeterminate = function (event) {
        var input = event.target;
        this.value = input.checked;
        this.indeterminate = input.indeterminate;
    };
    var NbCheckboxComponent_1;
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbCheckboxComponent.prototype, "value", null);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbCheckboxComponent.prototype, "disabled", null);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbCheckboxComponent.prototype, "status", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbCheckboxComponent.prototype, "indeterminate", null);
    __decorate([(0, _core.Output)(), __metadata("design:type", Object)], NbCheckboxComponent.prototype, "change", void 0);
    __decorate([(0, _core.HostBinding)('class.status-primary'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCheckboxComponent.prototype, "primary", null);
    __decorate([(0, _core.HostBinding)('class.status-success'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCheckboxComponent.prototype, "success", null);
    __decorate([(0, _core.HostBinding)('class.status-warning'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCheckboxComponent.prototype, "warning", null);
    __decorate([(0, _core.HostBinding)('class.status-danger'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCheckboxComponent.prototype, "danger", null);
    __decorate([(0, _core.HostBinding)('class.status-info'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCheckboxComponent.prototype, "info", null);
    NbCheckboxComponent = NbCheckboxComponent_1 = __decorate([(0, _core.Component)({
        selector: 'nb-checkbox',
        template: "\n    <label class=\"label\">\n      <input type=\"checkbox\" class=\"native-input visually-hidden\"\n             [disabled]=\"disabled\"\n             [checked]=\"value\"\n             (change)=\"updateValueAndIndeterminate($event)\"\n             (blur)=\"setTouched()\"\n             [indeterminate]=\"indeterminate\">\n      <span [class.indeterminate]=\"indeterminate\" [class.checked]=\"value\" class=\"custom-checkbox\">\n        <nb-icon *ngIf=\"indeterminate\" icon=\"minus-bold-outline\" pack=\"nebular-essentials\"></nb-icon>\n        <nb-icon *ngIf=\"value && !indeterminate\" icon=\"checkmark-bold-outline\" pack=\"nebular-essentials\"></nb-icon>\n      </span>\n      <span class=\"text\">\n        <ng-content></ng-content>\n      </span>\n    </label>\n  ",
        styles: [":host .label{position:relative;display:inline-flex;align-items:center;margin:0;min-height:inherit;padding:0.375rem 1.5rem 0.375rem 0}:host .custom-checkbox{flex-shrink:0;transition-duration:0.15s;transition-property:background-color,border,box-shadow;transition-timing-function:ease-in}:host .text{transition:color 0.15s ease-in}[dir=ltr] :host .text{padding-left:.6875rem}[dir=rtl] :host .text{padding-right:.6875rem} "],
        providers: [{
            provide: _forms.NG_VALUE_ACCESSOR,
            useExisting: (0, _core.forwardRef)(function () {
                return NbCheckboxComponent_1;
            }),
            multi: true
        }]
    }), __metadata("design:paramtypes", [_core.ChangeDetectorRef])], NbCheckboxComponent);
    return NbCheckboxComponent;
}();
exports.NbCheckboxComponent = NbCheckboxComponent;
//# sourceMappingURL=checkbox.component.js.map
//# sourceMappingURL=checkbox.component.js.map