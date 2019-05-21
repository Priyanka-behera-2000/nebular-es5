"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCardComponent = exports.NbCardFooterComponent = exports.NbCardBodyComponent = exports.NbCardHeaderComponent = undefined;

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
 * Component intended to be used within the `<nb-card>` component.
 * It adds styles for a preset header section.
 *
 * @styles
 *
 * card-header-text-color:
 * card-header-text-font-family:
 * card-header-text-font-size:
 * card-header-text-font-weight:
 * card-header-text-line-height:
 * card-header-disabled-background-color:
 * card-header-disabled-text-color:
 * card-header-primary-background-color:
 * card-header-primary-text-color:
 * card-header-info-background-color:
 * card-header-info-text-color:
 * card-header-success-background-color:
 * card-header-success-text-color:
 * card-header-warning-background-color:
 * card-header-warning-text-color:
 * card-header-danger-background-color:
 * card-header-danger-text-color:
 */
var NbCardHeaderComponent = /** @class */function () {
    function NbCardHeaderComponent() {}
    NbCardHeaderComponent = __decorate([(0, _core.Component)({
        selector: 'nb-card-header',
        template: "<ng-content></ng-content>"
    })], NbCardHeaderComponent);
    return NbCardHeaderComponent;
}();
exports.NbCardHeaderComponent = NbCardHeaderComponent;
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset body section.
 */

var NbCardBodyComponent = /** @class */function () {
    function NbCardBodyComponent() {}
    NbCardBodyComponent = __decorate([(0, _core.Component)({
        selector: 'nb-card-body',
        template: "<ng-content></ng-content>"
    })], NbCardBodyComponent);
    return NbCardBodyComponent;
}();
exports.NbCardBodyComponent = NbCardBodyComponent;
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset footer section.
 */

var NbCardFooterComponent = /** @class */function () {
    function NbCardFooterComponent() {}
    NbCardFooterComponent = __decorate([(0, _core.Component)({
        selector: 'nb-card-footer',
        template: "<ng-content></ng-content>"
    })], NbCardFooterComponent);
    return NbCardFooterComponent;
}();
exports.NbCardFooterComponent = NbCardFooterComponent;
/**
 * Basic content container component.
 *
 * Basic card example:
 * @stacked-example(Showcase, card/card-showcase.component)
 *
 * Basic card configuration:
 *
 * ```html
 * <nb-card>
 *   <nb-card-body>
 *     Card
 *   </nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Card with header and footer:
 * @stacked-example(With Header & Footer, card/card-full.component)
 *
 * Most of the time main card content goes to `nb-card-body`,
 * so it is styled and aligned in accordance with the header and footer.
 * In case you need a higher level of control, you can pass contend directly to `nb-card`,
 * so `nb-card-body` styling will not be applied.
 *
 * Consider an example with `nb-list` component:
 * @stacked-example(Card with list, card/card-without-body.component)
 *
 * Colored cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, card/card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, card/card-accents.component)
 *
 * @additional-example(Multiple Sizes, card/card-sizes.component)
 *
 * @styles
 *
 * card-background-color:
 * card-text-color:
 * card-text-font-family:
 * card-text-font-size:
 * card-text-font-weight:
 * card-text-line-height:
 * card-border-width:
 * card-border-style:
 * card-border-color:
 * card-border-radius:
 * card-padding:
 * card-divider-color:
 * card-divider-style:
 * card-divider-width:
 * card-height-tiny:
 * card-height-small:
 * card-height-medium:
 * card-height-large:
 * card-height-giant:
 * card-shadow:
 * card-margin-bottom:
 * card-scrollbar-color:
 * card-scrollbar-background-color:
 * card-scrollbar-width:
 */

var NbCardComponent = /** @class */function () {
    function NbCardComponent() {
        this._size = '';
        this._status = '';
        this._disabled = null;
    }
    Object.defineProperty(NbCardComponent.prototype, "size", {
        /**
         * Card size, available sizes:
         * tiny, small, medium, large, giant
         */
        get: function get() {
            return this._size;
        },
        set: function set(value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "status", {
        /**
         * Card status:
         * primary, info, success, warning, danger
         */
        get: function get() {
            return this._status;
        },
        set: function set(value) {
            this._status = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "accent", {
        /**
         * Card accent (color of the top border):
         * primary, info, success, warning, danger
         */
        get: function get() {
            return this._accent;
        },
        set: function set(value) {
            this._accent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "disabled", {
        get: function get() {
            return this._disabled;
        },
        set: function set(value) {
            this._disabled = (0, _helpers.convertToBoolProperty)(value) ? '' : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "tiny", {
        get: function get() {
            return this.size === 'tiny';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "small", {
        get: function get() {
            return this.size === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "medium", {
        get: function get() {
            return this.size === 'medium';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "large", {
        get: function get() {
            return this.size === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "giant", {
        get: function get() {
            return this.size === 'giant';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "primary", {
        get: function get() {
            return this.status === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "info", {
        get: function get() {
            return this.status === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "success", {
        get: function get() {
            return this.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "warning", {
        get: function get() {
            return this.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "danger", {
        get: function get() {
            return this.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "hasAccent", {
        get: function get() {
            return this.accent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "primaryAccent", {
        get: function get() {
            return this.accent === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "infoAccent", {
        get: function get() {
            return this.accent === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "successAccent", {
        get: function get() {
            return this.accent === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "warningAccent", {
        get: function get() {
            return this.accent === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "dangerAccent", {
        get: function get() {
            return this.accent === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([(0, _core.Input)(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], NbCardComponent.prototype, "size", null);
    __decorate([(0, _core.Input)(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], NbCardComponent.prototype, "status", null);
    __decorate([(0, _core.Input)(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], NbCardComponent.prototype, "accent", null);
    __decorate([(0, _core.Input)(), (0, _core.HostBinding)('attr.disabled'), __metadata("design:type", String), __metadata("design:paramtypes", [String])], NbCardComponent.prototype, "disabled", null);
    __decorate([(0, _core.HostBinding)('class.size-tiny'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "tiny", null);
    __decorate([(0, _core.HostBinding)('class.size-small'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "small", null);
    __decorate([(0, _core.HostBinding)('class.size-medium'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "medium", null);
    __decorate([(0, _core.HostBinding)('class.size-large'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "large", null);
    __decorate([(0, _core.HostBinding)('class.size-giant'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "giant", null);
    __decorate([(0, _core.HostBinding)('class.status-primary'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "primary", null);
    __decorate([(0, _core.HostBinding)('class.status-info'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "info", null);
    __decorate([(0, _core.HostBinding)('class.status-success'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "success", null);
    __decorate([(0, _core.HostBinding)('class.status-warning'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "warning", null);
    __decorate([(0, _core.HostBinding)('class.status-danger'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "danger", null);
    __decorate([(0, _core.HostBinding)('class.accent'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "hasAccent", null);
    __decorate([(0, _core.HostBinding)('class.accent-primary'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "primaryAccent", null);
    __decorate([(0, _core.HostBinding)('class.accent-info'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "infoAccent", null);
    __decorate([(0, _core.HostBinding)('class.accent-success'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "successAccent", null);
    __decorate([(0, _core.HostBinding)('class.accent-warning'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "warningAccent", null);
    __decorate([(0, _core.HostBinding)('class.accent-danger'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCardComponent.prototype, "dangerAccent", null);
    NbCardComponent = __decorate([(0, _core.Component)({
        selector: 'nb-card',
        styles: [":host{display:flex;flex-direction:column} "],
        template: "\n    <ng-content select=\"nb-card-header\"></ng-content>\n    <ng-content select=\"nb-card-body\"></ng-content>\n    <ng-content></ng-content>\n    <ng-content select=\"nb-card-footer\"></ng-content>\n  "
    })], NbCardComponent);
    return NbCardComponent;
}();
exports.NbCardComponent = NbCardComponent;
//# sourceMappingURL=card.component.js.map
//# sourceMappingURL=card.component.js.map