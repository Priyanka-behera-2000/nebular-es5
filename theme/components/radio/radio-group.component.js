"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbRadioGroupComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _common = require("@angular/common");

var _forms = require("@angular/forms");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _helpers = require("../helpers");

var _theme = require("../../theme.options");

var _radio = require("./radio.component");

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

/**
 * The `NbRadioGroupComponent` is the wrapper for `nb-radio` button.
 * It provides form bindings:
 *
 * ```html
 * <nb-radio-group [(ngModel)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Also, you can use `value` and `valueChange` for binding without forms.
 *
 * ```html
 * <nb-radio-group [(value)]="selectedOption">
 *   <nb-radio value="1">Option 1</nb-radio>
 *   <nb-radio value="2">Option 2</nb-radio>
 *   <nb-radio value="3">Option 3</nb-radio>
 * </nb-radio-group>
 * ```
 *
 * Radio items name has to be provided through `name` input property of the radio group.
 *
 * ```html
 * <nb-radio-group name="my-radio-group">
 *   ...
 * </nb-radio-group>
 * ```
 *
 * You can change radio group status by setting `status` input.
 * @stacked-example(Statuses, radio/radio-statuses.component)
 *
 * Also, you can disable the whole group using `disabled` attribute.
 * @stacked-example(Disabled group, radio/radio-disabled-group.component)
 *
 * */
var NbRadioGroupComponent = /** @class */function () {
    function NbRadioGroupComponent(hostElement, platformId, document) {
        this.hostElement = hostElement;
        this.platformId = platformId;
        this.document = document;
        this.alive = true;
        this.isTouched = false;
        this.onChange = function (value) {};
        this.onTouched = function () {};
        this._status = 'primary';
        this.valueChange = new _core.EventEmitter();
    }
    NbRadioGroupComponent_1 = NbRadioGroupComponent;
    Object.defineProperty(NbRadioGroupComponent.prototype, "value", {
        get: function get() {
            return this._value;
        },
        set: function set(value) {
            this._value = value;
            this.updateValues();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRadioGroupComponent.prototype, "name", {
        get: function get() {
            return this._name;
        },
        set: function set(name) {
            this._name = name;
            this.updateNames();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRadioGroupComponent.prototype, "disabled", {
        get: function get() {
            return this._disabled;
        },
        set: function set(disabled) {
            this._disabled = (0, _helpers.convertToBoolProperty)(disabled);
            this.updateDisabled();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbRadioGroupComponent.prototype, "status", {
        /**
         * Radio buttons status.
         * Possible values are `primary` (default), `success`, `warning`, `danger`, `info`.
         */
        get: function get() {
            return this._status;
        },
        set: function set(value) {
            if (this._status !== value) {
                this._status = value;
                this.updateStatus();
            }
        },
        enumerable: true,
        configurable: true
    });
    NbRadioGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // In case option 'name' isn't set on nb-radio component,
        // we need to set it's name right away, so it won't overlap with options
        // without names from other radio groups. Otherwise they all would have
        // same name and will be considered as options from one group so only the
        // last option will stay selected.
        this.updateNames();
        Promise.resolve().then(function () {
            return _this.updateAndSubscribeToRadios();
        });
        this.radios.changes.pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        })).subscribe(function () {
            // 'changes' emit during change detection run and we can't update
            // option properties right of since they already was initialized.
            // Instead we schedule microtask to update radios after change detection
            // run is finished.
            Promise.resolve().then(function () {
                return _this.updateAndSubscribeToRadios();
            });
        });
    };
    NbRadioGroupComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbRadioGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbRadioGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbRadioGroupComponent.prototype.writeValue = function (value) {
        this.value = value;
        if (typeof value !== 'undefined') {
            this.updateValues();
        }
    };
    NbRadioGroupComponent.prototype.updateAndSubscribeToRadios = function () {
        this.updateNames();
        this.updateValues();
        this.updateDisabled();
        this.updateStatus();
        this.subscribeOnRadiosValueChange();
        this.subscribeOnRadiosBlur();
    };
    NbRadioGroupComponent.prototype.updateNames = function () {
        var _this = this;
        if (this.radios) {
            this.radios.forEach(function (radio) {
                return radio.name = _this.name;
            });
        }
    };
    NbRadioGroupComponent.prototype.updateValues = function () {
        var _this = this;
        if (this.radios && typeof this.value !== 'undefined') {
            this.radios.forEach(function (radio) {
                return radio.checked = radio.value === _this.value;
            });
        }
    };
    NbRadioGroupComponent.prototype.updateDisabled = function () {
        var _this = this;
        if (this.radios && typeof this.disabled !== 'undefined') {
            this.radios.forEach(function (radio) {
                return radio.disabled = _this.disabled;
            });
        }
    };
    NbRadioGroupComponent.prototype.subscribeOnRadiosValueChange = function () {
        var _this = this;
        if (!this.radios || !this.radios.length) {
            return;
        }
        _rxjs.merge.apply(void 0, this.radios.map(function (radio) {
            return radio.valueChange;
        })).pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        }), (0, _operators.takeUntil)(this.radios.changes)).subscribe(function (value) {
            _this.writeValue(value);
            _this.propagateValue(value);
        });
    };
    NbRadioGroupComponent.prototype.propagateValue = function (value) {
        this.valueChange.emit(value);
        this.onChange(value);
    };
    NbRadioGroupComponent.prototype.subscribeOnRadiosBlur = function () {
        var _this = this;
        var hasNoRadios = !this.radios || !this.radios.length;
        if (!(0, _common.isPlatformBrowser)(this.platformId) || this.isTouched || hasNoRadios) {
            return;
        }
        var hostElement = this.hostElement.nativeElement;
        (0, _rxjs.fromEvent)(hostElement, 'focusin').pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        }), (0, _operators.filter)(function (event) {
            return hostElement.contains(event.target);
        }), (0, _operators.switchMap)(function () {
            return (0, _rxjs.merge)((0, _rxjs.fromEvent)(_this.document, 'focusin'), (0, _rxjs.fromEvent)(_this.document, 'click'));
        }), (0, _operators.filter)(function (event) {
            return !hostElement.contains(event.target);
        }), (0, _operators.take)(1), (0, _operators.takeUntil)(this.radios.changes)).subscribe(function () {
            return _this.markTouched();
        });
    };
    NbRadioGroupComponent.prototype.markTouched = function () {
        this.isTouched = true;
        this.onTouched();
    };
    NbRadioGroupComponent.prototype.updateStatus = function () {
        var _this = this;
        if (this.radios) {
            this.radios.forEach(function (radio) {
                return radio.status = _this.status;
            });
        }
    };
    var NbRadioGroupComponent_1;
    __decorate([(0, _core.Input)(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], NbRadioGroupComponent.prototype, "value", null);
    __decorate([(0, _core.Input)(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], NbRadioGroupComponent.prototype, "name", null);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbRadioGroupComponent.prototype, "disabled", null);
    __decorate([(0, _core.Input)(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], NbRadioGroupComponent.prototype, "status", null);
    __decorate([(0, _core.ContentChildren)(_radio.NbRadioComponent, { descendants: true }), __metadata("design:type", _core.QueryList)], NbRadioGroupComponent.prototype, "radios", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", _core.EventEmitter)], NbRadioGroupComponent.prototype, "valueChange", void 0);
    NbRadioGroupComponent = NbRadioGroupComponent_1 = __decorate([(0, _core.Component)({
        selector: 'nb-radio-group',
        template: "\n    <ng-content select=\"nb-radio\"></ng-content>",
        providers: [{
            provide: _forms.NG_VALUE_ACCESSOR,
            useExisting: (0, _core.forwardRef)(function () {
                return NbRadioGroupComponent_1;
            }),
            multi: true
        }],
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    }), __param(1, (0, _core.Inject)(_core.PLATFORM_ID)), __param(2, (0, _core.Inject)(_theme.NB_DOCUMENT)), __metadata("design:paramtypes", [_core.ElementRef, Object, Object])], NbRadioGroupComponent);
    return NbRadioGroupComponent;
}();
exports.NbRadioGroupComponent = NbRadioGroupComponent;
//# sourceMappingURL=radio-group.component.js.map
//# sourceMappingURL=radio-group.component.js.map