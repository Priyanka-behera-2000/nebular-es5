"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbAccordionItemBodyComponent = undefined;

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

var accordionItemBodyTrigger = (0, _animations.trigger)('accordionItemBody', [(0, _animations.state)('collapsed', (0, _animations.style)({
    overflow: 'hidden',
    visibility: 'hidden',
    height: 0
})), (0, _animations.state)('expanded', (0, _animations.style)({
    overflow: 'hidden',
    visibility: 'visible'
})), (0, _animations.transition)('collapsed => expanded', (0, _animations.animate)('100ms ease-in')), (0, _animations.transition)('expanded => collapsed', (0, _animations.animate)('100ms ease-out'))]);
/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
var NbAccordionItemBodyComponent = /** @class */function () {
    function NbAccordionItemBodyComponent(accordionItem, cd) {
        this.accordionItem = accordionItem;
        this.cd = cd;
        this.alive = true;
    }
    Object.defineProperty(NbAccordionItemBodyComponent.prototype, "state", {
        get: function get() {
            return this.accordionItem.collapsed ? 'collapsed' : 'expanded';
        },
        enumerable: true,
        configurable: true
    });
    NbAccordionItemBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accordionItem.accordionItemInvalidate.pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        })).subscribe(function () {
            return _this.cd.markForCheck();
        });
    };
    NbAccordionItemBodyComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbAccordionItemBodyComponent = __decorate([(0, _core.Component)({
        selector: 'nb-accordion-item-body',
        template: "\n    <div [@accordionItemBody]=\"{ value: state }\">\n      <div class=\"item-body\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
        animations: [accordionItemBodyTrigger],
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    }), __param(0, (0, _core.Host)()), __metadata("design:paramtypes", [_accordionItem.NbAccordionItemComponent, _core.ChangeDetectorRef])], NbAccordionItemBodyComponent);
    return NbAccordionItemBodyComponent;
}();
exports.NbAccordionItemBodyComponent = NbAccordionItemBodyComponent;
//# sourceMappingURL=accordion-item-body.component.js.map
//# sourceMappingURL=accordion-item-body.component.js.map