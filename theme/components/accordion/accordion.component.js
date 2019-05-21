"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbAccordionComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _rxjs = require("rxjs");

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
 * An accordion allows to toggle the display of sections of content
 *
 * Basic example
 * @stacked-example(Showcase, accordion/accordion-showcase.component)
 *
 * ```ts
 * <nb-accordion>
 *  <nb-accordion-item>
 *   <nb-accordion-item-header>Product Details</nb-accordion-item-header>
 *   <nb-accordion-item-body>
 *     Item Content
 *   </nb-accordion-item-body>
 *  </nb-accordion-item>
 * </nb-accordion>
 * ```
 * ### Installation
 *
 * Import `NbAccordionModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbAccordionModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * With `multi` mode accordion can have multiple items expanded:
 * @stacked-example(Multiple expanded items, accordion/accordion-multi.component)
 *
 * `NbAccordionItemComponent` has several methods, for example it is possible to trigger item click/toggle:
 * @stacked-example(Expand API, accordion/accordion-toggle.component)
 *
 * @styles
 *
 * accordion-border-radius:
 * accordion-padding:
 * accordion-shadow:
 * accordion-header-text-color:
 * accordion-header-text-font-family:
 * accordion-header-text-font-size:
 * accordion-header-text-font-weight:
 * accordion-header-text-line-height:
 * accordion-header-disabled-text-color:
 * accordion-header-border-color:
 * accordion-header-border-style:
 * accordion-header-border-width:
 * accordion-item-background-color:
 * accordion-item-text-color:
 * accordion-item-text-font-family:
 * accordion-item-text-font-size:
 * accordion-item-text-font-weight:
 * accordion-item-text-line-height:
 */
var NbAccordionComponent = /** @class */function () {
    function NbAccordionComponent() {
        this.openCloseItems = new _rxjs.Subject();
        this.multiValue = false;
    }
    Object.defineProperty(NbAccordionComponent.prototype, "multi", {
        /**
         *  Allow multiple items to be expanded at the same time.
         * @type {boolean}
         */
        get: function get() {
            return this.multiValue;
        },
        set: function set(val) {
            this.multiValue = (0, _helpers.convertToBoolProperty)(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens all enabled accordion items.
     */
    NbAccordionComponent.prototype.openAll = function () {
        if (this.multi) {
            this.openCloseItems.next(false);
        }
    };
    /**
     * Closes all enabled accordion items.
     */
    NbAccordionComponent.prototype.closeAll = function () {
        this.openCloseItems.next(true);
    };
    __decorate([(0, _core.Input)('multi'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbAccordionComponent.prototype, "multi", null);
    NbAccordionComponent = __decorate([(0, _core.Component)({
        selector: 'nb-accordion',
        template: "\n    <ng-content select=\"nb-accordion-item\"></ng-content>\n  ",
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    })], NbAccordionComponent);
    return NbAccordionComponent;
}();
exports.NbAccordionComponent = NbAccordionComponent;
//# sourceMappingURL=accordion.component.js.map
//# sourceMappingURL=accordion.component.js.map