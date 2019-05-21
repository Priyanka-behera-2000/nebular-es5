"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbOptionComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _rxjs = require("rxjs");

var _helpers = require("../helpers");

var _select = require("./select.component");

/*
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
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};

var NbOptionComponent = /** @class */function () {
    function NbOptionComponent(parent, elementRef, cd) {
        this.parent = parent;
        this.elementRef = elementRef;
        this.cd = cd;
        this.disabledByGroup = false;
        this._disabled = false;
        /**
         * Fires value when option selection change.
         * */
        this.selectionChange = new _core.EventEmitter();
        /**
         * Fires when option clicked
         */
        this.click$ = new _rxjs.Subject();
        this.selected = false;
        this.alive = true;
    }
    Object.defineProperty(NbOptionComponent.prototype, "disabled", {
        get: function get() {
            return this._disabled || this.disabledByGroup;
        },
        set: function set(value) {
            this._disabled = (0, _helpers.convertToBoolProperty)(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionComponent.prototype, "click", {
        get: function get() {
            return this.click$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NbOptionComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    Object.defineProperty(NbOptionComponent.prototype, "withCheckbox", {
        /**
         * Determines should we render checkbox.
         * */
        get: function get() {
            return this.multiple && this.value != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionComponent.prototype, "content", {
        get: function get() {
            return this.elementRef.nativeElement.textContent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionComponent.prototype, "multiple", {
        get: function get() {
            return this.parent.multiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionComponent.prototype, "selectedClass", {
        get: function get() {
            return this.selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionComponent.prototype, "disabledAttribute", {
        get: function get() {
            return this.disabled ? '' : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbOptionComponent.prototype, "tabindex", {
        get: function get() {
            return '-1';
        },
        enumerable: true,
        configurable: true
    });
    NbOptionComponent.prototype.onClick = function (event) {
        this.click$.next(this);
        // Prevent scroll on space click, etc.
        event.preventDefault();
    };
    NbOptionComponent.prototype.select = function () {
        this.setSelection(true);
    };
    NbOptionComponent.prototype.deselect = function () {
        this.setSelection(false);
    };
    /**
     * Sets disabled by group state and marks component for check.
     */
    NbOptionComponent.prototype.setDisabledByGroupState = function (disabled) {
        if (this.disabledByGroup !== disabled) {
            this.disabledByGroup = disabled;
            this.cd.markForCheck();
        }
    };
    NbOptionComponent.prototype.setSelection = function (selected) {
        /**
         * In case of changing options in runtime the reference to the selected option will be kept in select component.
         * This may lead to exceptions with detecting changes in destroyed component.
         *
         * Also Angular can call writeValue on destroyed view (select implements ControlValueAccessor).
         * angular/angular#27803
         * */
        if (this.alive && this.selected !== selected) {
            this.selected = selected;
            this.selectionChange.emit(this);
            this.cd.markForCheck();
        }
    };
    NbOptionComponent.prototype.focus = function () {
        this.elementRef.nativeElement.focus();
    };
    NbOptionComponent.prototype.getLabel = function () {
        return this.content;
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbOptionComponent.prototype, "value", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbOptionComponent.prototype, "disabled", null);
    __decorate([(0, _core.Output)(), __metadata("design:type", _core.EventEmitter)], NbOptionComponent.prototype, "selectionChange", void 0);
    __decorate([(0, _core.HostBinding)('class.selected'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbOptionComponent.prototype, "selectedClass", null);
    __decorate([(0, _core.HostBinding)('attr.disabled'), __metadata("design:type", String), __metadata("design:paramtypes", [])], NbOptionComponent.prototype, "disabledAttribute", null);
    __decorate([(0, _core.HostBinding)('tabIndex'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbOptionComponent.prototype, "tabindex", null);
    __decorate([(0, _core.HostListener)('click', ['$event']), (0, _core.HostListener)('keydown.space', ['$event']), (0, _core.HostListener)('keydown.enter', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Event]), __metadata("design:returntype", void 0)], NbOptionComponent.prototype, "onClick", null);
    NbOptionComponent = __decorate([(0, _core.Component)({
        selector: 'nb-option',
        styles: ["/*! * @license * Copyright Akveo. All Rights Reserved. * Licensed under the MIT License. See License.txt in the project root for license information. */:host{display:flex;transition-duration:0.15s;transition-property:background-color,color;transition-timing-function:ease-in}:host:hover{cursor:pointer}:host nb-checkbox{display:flex;pointer-events:none}:host nb-checkbox ::ng-deep .label{padding:0}:host([disabled]){pointer-events:none} "],
        changeDetection: _core.ChangeDetectionStrategy.OnPush,
        template: "\n    <nb-checkbox *ngIf=\"withCheckbox\"\n                 [value]=\"selected\"\n                 [disabled]=\"disabled\"\n                 aria-hidden=\"true\">\n    </nb-checkbox>\n    <ng-content></ng-content>\n  "
    }), __param(0, (0, _core.Inject)((0, _core.forwardRef)(function () {
        return _select.NbSelectComponent;
    }))), __metadata("design:paramtypes", [Object, _core.ElementRef, _core.ChangeDetectorRef])], NbOptionComponent);
    return NbOptionComponent;
}();
exports.NbOptionComponent = NbOptionComponent;
//# sourceMappingURL=option.component.js.map
//# sourceMappingURL=option.component.js.map