"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbAccordionItemComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _accordion = require("./accordion.component");

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
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};

/**
 * Component intended to be used within `<nb-accordion>` component
 */
var NbAccordionItemComponent = /** @class */function () {
    function NbAccordionItemComponent(accordion, cd) {
        this.accordion = accordion;
        this.cd = cd;
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         */
        this.collapsedChange = new _core.EventEmitter();
        this.accordionItemInvalidate = new _rxjs.Subject();
        this.collapsedValue = true;
        this.disabledValue = false;
        this.alive = true;
    }
    Object.defineProperty(NbAccordionItemComponent.prototype, "collapsed", {
        /**
         * Item is collapse (`true` by default)
         * @type {boolean}
         */
        get: function get() {
            return this.collapsedValue;
        },
        set: function set(val) {
            this.collapsedValue = (0, _helpers.convertToBoolProperty)(val);
            this.collapsedChange.emit(this.collapsedValue);
            this.invalidate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAccordionItemComponent.prototype, "expanded", {
        /**
         * Item is expanded (`false` by default)
         * @type {boolean}
         */
        get: function get() {
            return !this.collapsed;
        },
        set: function set(val) {
            this.collapsedValue = !(0, _helpers.convertToBoolProperty)(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAccordionItemComponent.prototype, "disabled", {
        /**
         * Item is disabled and cannot be opened.
         * @type {boolean}
         */
        get: function get() {
            return this.disabledValue;
        },
        set: function set(val) {
            this.disabledValue = (0, _helpers.convertToBoolProperty)(val);
            this.invalidate();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Open/close the item
     */
    NbAccordionItemComponent.prototype.toggle = function () {
        if (!this.disabled) {
            // we need this temporary variable as `openCloseItems.next` will change current value we need to save
            var willSet = !this.collapsed;
            if (!this.accordion.multi) {
                this.accordion.openCloseItems.next(true);
            }
            this.collapsed = willSet;
        }
    };
    /**
     * Open the item.
     */
    NbAccordionItemComponent.prototype.open = function () {
        !this.disabled && (this.collapsed = false);
    };
    /**
     * Collapse the item.
     */
    NbAccordionItemComponent.prototype.close = function () {
        !this.disabled && (this.collapsed = true);
    };
    NbAccordionItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accordion.openCloseItems.pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        })).subscribe(function (collapsed) {
            !_this.disabled && (_this.collapsed = collapsed);
        });
    };
    NbAccordionItemComponent.prototype.ngOnChanges = function (changes) {
        this.accordionItemInvalidate.next(true);
    };
    NbAccordionItemComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
        this.accordionItemInvalidate.complete();
    };
    NbAccordionItemComponent.prototype.invalidate = function () {
        this.accordionItemInvalidate.next(true);
        this.cd.markForCheck();
    };
    __decorate([(0, _core.Input)('collapsed'), (0, _core.HostBinding)('class.collapsed'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbAccordionItemComponent.prototype, "collapsed", null);
    __decorate([(0, _core.Input)('expanded'), (0, _core.HostBinding)('class.expanded'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbAccordionItemComponent.prototype, "expanded", null);
    __decorate([(0, _core.Input)('disabled'), (0, _core.HostBinding)('class.disabled'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbAccordionItemComponent.prototype, "disabled", null);
    __decorate([(0, _core.Output)(), __metadata("design:type", Object)], NbAccordionItemComponent.prototype, "collapsedChange", void 0);
    NbAccordionItemComponent = __decorate([(0, _core.Component)({
        selector: 'nb-accordion-item',
        styles: [":host{display:flex;flex-direction:column} "],
        template: "\n    <ng-content select=\"nb-accordion-item-header\"></ng-content>\n    <ng-content select=\"nb-accordion-item-body\"></ng-content>\n  ",
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    }), __param(0, (0, _core.Host)()), __metadata("design:paramtypes", [_accordion.NbAccordionComponent, _core.ChangeDetectorRef])], NbAccordionItemComponent);
    return NbAccordionItemComponent;
}();
exports.NbAccordionItemComponent = NbAccordionItemComponent;
//# sourceMappingURL=accordion-item.component.js.map
//# sourceMappingURL=accordion-item.component.js.map