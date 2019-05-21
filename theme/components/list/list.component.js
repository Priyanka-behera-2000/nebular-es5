"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbListItemComponent = exports.NbListComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

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
 * List is a container component that wraps `nb-list-item` component.
 *
 * Basic example:
 * @stacked-example(Simple list, list/simple-list-showcase.component)
 *
 * `nb-list-item` accepts arbitrary content, so you can create a list of any components.
 *
 * ### Installation
 *
 * Import `NbListModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbListModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * List of users:
 * @stacked-example(Users list, list/users-list-showcase.component)
 *
 * @styles
 *
 * list-item-border-color:
 * list-item-padding:
 */
var NbListComponent = /** @class */function () {
    function NbListComponent() {
        /**
         * Role attribute value
         *
         * @type {string}
         */
        this.role = 'list';
    }
    __decorate([(0, _core.Input)(), (0, _core.HostBinding)('attr.role'), __metadata("design:type", Object)], NbListComponent.prototype, "role", void 0);
    NbListComponent = __decorate([(0, _core.Component)({
        selector: 'nb-list',
        template: "<ng-content select=\"nb-list-item\"></ng-content>",
        styles: [":host{display:flex;flex-direction:column;flex:1 1 auto;overflow:auto} "]
    })], NbListComponent);
    return NbListComponent;
}();
exports.NbListComponent = NbListComponent;
/**
 * List item component is a grouping component that accepts arbitrary content.
 * It should be direct child of `nb-list` componet.
 */

var NbListItemComponent = /** @class */function () {
    function NbListItemComponent() {
        /**
         * Role attribute value
         *
         * @type {string}
         */
        this.role = 'listitem';
    }
    __decorate([(0, _core.Input)(), (0, _core.HostBinding)('attr.role'), __metadata("design:type", Object)], NbListItemComponent.prototype, "role", void 0);
    NbListItemComponent = __decorate([(0, _core.Component)({
        selector: 'nb-list-item',
        template: "<ng-content></ng-content>",
        styles: [":host{flex-shrink:0} "]
    })], NbListItemComponent);
    return NbListItemComponent;
}();
exports.NbListItemComponent = NbListItemComponent;
//# sourceMappingURL=list.component.js.map
//# sourceMappingURL=list.component.js.map