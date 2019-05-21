"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbRouteTabsetComponent = undefined;

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
 * Route tabset components.
 * Renders tabs inside of a router-outlet.
 *
 * ```ts
 *  tabs = [
 *  {
 *    title: 'Route tab #1',
 *    route: '/pages/description',
 *    icon: 'home',
 *    responsive: true, // hide title before `route-tabs-icon-only-max-width` value
 *  },
 *  {
 *    title: 'Route tab #2',
 *    route: '/pages/images',
 *    }
 *  ];
 *
 *  <nb-route-tabset [tabs]="tabs"></nb-route-tabset>
 * ```
 * ### Installation
 *
 * Import `NbRouteTabsetModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbRouteTabsetModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * @stacked-example(Route Tabset, tabset/route-tabset-showcase.component)
 *
 * @styles
 *
 * route-tabs-font-family:
 * route-tabs-font-size:
 * route-tabs-active-bg:
 * route-tabs-active-font-weight:
 * route-tabs-padding:
 * route-tabs-header-bg:
 * route-tabs-separator:
 * route-tabs-fg:
 * route-tabs-fg-heading:
 * route-tabs-bg:
 * route-tabs-selected:
 * route-tabs-icon-only-max-width:
 */
var NbRouteTabsetComponent = /** @class */function () {
    function NbRouteTabsetComponent() {
        this.fullWidthValue = false;
        /**
         * Options passed to `routerLinkActiveOptions` directive which set on tab links.
         * `{ exact: true }` by default.
         */
        this.activeLinkOptions = { exact: true };
        /**
         * Emits when tab is selected
         * @type {EventEmitter<any>}
         */
        this.changeTab = new _core.EventEmitter();
    }
    Object.defineProperty(NbRouteTabsetComponent.prototype, "fullWidth", {
        /**
         * Take full width of a parent
         * @param {boolean} val
         */
        set: function set(val) {
            this.fullWidthValue = (0, _helpers.convertToBoolProperty)(val);
        },
        enumerable: true,
        configurable: true
    });
    NbRouteTabsetComponent.prototype.selectTab = function (tab) {
        this.changeTab.emit(tab);
    };
    __decorate([(0, _core.HostBinding)('class.full-width'), __metadata("design:type", Boolean)], NbRouteTabsetComponent.prototype, "fullWidthValue", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Array)], NbRouteTabsetComponent.prototype, "tabs", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbRouteTabsetComponent.prototype, "activeLinkOptions", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbRouteTabsetComponent.prototype, "fullWidth", null);
    __decorate([(0, _core.Output)(), __metadata("design:type", Object)], NbRouteTabsetComponent.prototype, "changeTab", void 0);
    NbRouteTabsetComponent = __decorate([(0, _core.Component)({
        selector: 'nb-route-tabset',
        styles: [".route-tabset{display:flex;flex-direction:row;list-style-type:none;margin:0}.route-tabset .route-tab{margin-bottom:-1px;text-align:center;padding:0}.route-tabset .route-tab.active a::before{display:block}.route-tabset .route-tab a{position:relative;text-decoration:none;display:inline-block}.route-tabset .route-tab a::before{position:absolute;content:'';width:100%;border-radius:3px;bottom:-2px;left:0}.route-tabset .route-tab a nb-icon{vertical-align:middle}[dir=ltr] .route-tabset .route-tab a nb-icon+span{margin-left:.5rem}[dir=rtl] .route-tabset .route-tab a nb-icon+span{margin-right:.5rem}:host.full-width .route-tabset{justify-content:space-around} "],
        template: "\n    <ul class=\"route-tabset\">\n      <ng-container *ngFor=\"let tab of tabs\">\n        <li *ngIf=\"tab.disabled; else enabled\"\n            [class.responsive]=\"tab.responsive\"\n            class=\"route-tab disabled\"\n            tabindex=\"-1\">\n          <a tabindex=\"-1\" class=\"tab-link\">\n            <nb-icon *ngIf=\"tab.icon\" [icon]=\"tab.icon\"></nb-icon>\n            <span *ngIf=\"tab.title\" class=\"tab-text\">{{ tab.title }}</span>\n          </a>\n        </li>\n\n        <ng-template #enabled>\n          <li (click)=\"$event.preventDefault(); selectTab(tab)\"\n              [routerLink]=\"tab.route\"\n              routerLinkActive=\"active\"\n              [routerLinkActiveOptions]=\"activeLinkOptions\"\n              [class.responsive]=\"tab.responsive\"\n              tabindex=\"0\"\n              class=\"route-tab\">\n            <a tabindex=\"-1\" class=\"tab-link\">\n              <nb-icon *ngIf=\"tab.icon\" [icon]=\"tab.icon\"></nb-icon>\n              <span *ngIf=\"tab.title\" class=\"tab-text\">{{ tab.title }}</span>\n            </a>\n          </li>\n        </ng-template>\n      </ng-container>\n    </ul>\n    <router-outlet></router-outlet>\n  "
    })], NbRouteTabsetComponent);
    return NbRouteTabsetComponent;
}();
exports.NbRouteTabsetComponent = NbRouteTabsetComponent;
//# sourceMappingURL=route-tabset.component.js.map
//# sourceMappingURL=route-tabset.component.js.map