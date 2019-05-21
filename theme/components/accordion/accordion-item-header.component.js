"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbAccordionItemHeaderComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _animations = require("@angular/animations");

var _operators = require("rxjs/operators");

var _accordionItem = require("./accordion-item.component");

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
 * Component intended to be used within `<nb-accordion-item>` component
 */
var NbAccordionItemHeaderComponent = /** @class */function () {
    function NbAccordionItemHeaderComponent(accordionItem, cd) {
        this.accordionItem = accordionItem;
        this.cd = cd;
        this.alive = true;
    }
    Object.defineProperty(NbAccordionItemHeaderComponent.prototype, "isCollapsed", {
        get: function get() {
            return this.accordionItem.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAccordionItemHeaderComponent.prototype, "expanded", {
        get: function get() {
            return !this.accordionItem.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAccordionItemHeaderComponent.prototype, "tabbable", {
        // issue #794
        get: function get() {
            return this.accordionItem.disabled ? '-1' : '0';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbAccordionItemHeaderComponent.prototype, "disabled", {
        get: function get() {
            return this.accordionItem.disabled;
        },
        enumerable: true,
        configurable: true
    });
    NbAccordionItemHeaderComponent.prototype.toggle = function () {
        this.accordionItem.toggle();
    };
    Object.defineProperty(NbAccordionItemHeaderComponent.prototype, "state", {
        get: function get() {
            if (this.isCollapsed) {
                return 'collapsed';
            }
            if (this.expanded) {
                return 'expanded';
            }
        },
        enumerable: true,
        configurable: true
    });
    NbAccordionItemHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accordionItem.accordionItemInvalidate.pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        })).subscribe(function () {
            return _this.cd.markForCheck();
        });
    };
    NbAccordionItemHeaderComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    __decorate([(0, _core.HostBinding)('class.accordion-item-header-collapsed'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbAccordionItemHeaderComponent.prototype, "isCollapsed", null);
    __decorate([(0, _core.HostBinding)('class.accordion-item-header-expanded'), (0, _core.HostBinding)('attr.aria-expanded'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbAccordionItemHeaderComponent.prototype, "expanded", null);
    __decorate([(0, _core.HostBinding)('attr.tabindex'), __metadata("design:type", String), __metadata("design:paramtypes", [])], NbAccordionItemHeaderComponent.prototype, "tabbable", null);
    __decorate([(0, _core.HostBinding)('attr.aria-disabled'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbAccordionItemHeaderComponent.prototype, "disabled", null);
    __decorate([(0, _core.HostListener)('click'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], NbAccordionItemHeaderComponent.prototype, "toggle", null);
    NbAccordionItemHeaderComponent = __decorate([(0, _core.Component)({
        selector: 'nb-accordion-item-header',
        styles: [":host{display:flex;align-items:center;cursor:pointer}:host:focus{outline:0} "],
        template: "\n    <ng-content select=\"nb-accordion-item-title\"></ng-content>\n    <ng-content select=\"nb-accordion-item-description\"></ng-content>\n    <ng-content></ng-content>\n    <nb-icon icon=\"chevron-down-outline\" pack=\"nebular-essentials\" [@expansionIndicator]=\"state\" *ngIf=\"!disabled\" >\n    </nb-icon>\n  ",
        animations: [(0, _animations.trigger)('expansionIndicator', [(0, _animations.state)('expanded', (0, _animations.style)({
            transform: 'rotate(180deg)'
        })), (0, _animations.transition)('collapsed => expanded', (0, _animations.animate)('100ms ease-in')), (0, _animations.transition)('expanded => collapsed', (0, _animations.animate)('100ms ease-out'))])],
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    }), __param(0, (0, _core.Host)()), __metadata("design:paramtypes", [_accordionItem.NbAccordionItemComponent, _core.ChangeDetectorRef])], NbAccordionItemHeaderComponent);
    return NbAccordionItemHeaderComponent;
}();
exports.NbAccordionItemHeaderComponent = NbAccordionItemHeaderComponent;
//# sourceMappingURL=accordion-item-header.component.js.map
//# sourceMappingURL=accordion-item-header.component.js.map