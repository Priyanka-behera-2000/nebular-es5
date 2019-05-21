"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbSidebarService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

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

/**
 * Sidebar service.
 *
 * Root module service to control the sidebar from any part of the app.
 *
 * Allows you to change sidebar state dynamically from any part of the app:
 * @stacked-example(Sidebar State, sidebar/sidebar-toggle.component)
 */
var NbSidebarService = /** @class */function () {
    function NbSidebarService() {
        this.toggle$ = new _rxjs.Subject();
        this.expand$ = new _rxjs.Subject();
        this.collapse$ = new _rxjs.Subject();
    }
    /**
     * Subscribe to toggle events
     *
     * @returns Observable<{ compact: boolean, tag: string }>
     */
    NbSidebarService.prototype.onToggle = function () {
        return this.toggle$.pipe((0, _operators.share)());
    };
    /**
     * Subscribe to expand events
     * @returns Observable<{ tag: string }>
     */
    NbSidebarService.prototype.onExpand = function () {
        return this.expand$.pipe((0, _operators.share)());
    };
    /**
     * Subscribe to collapse evens
     * @returns Observable<{ tag: string }>
     */
    NbSidebarService.prototype.onCollapse = function () {
        return this.collapse$.pipe((0, _operators.share)());
    };
    /**
     * Toggle a sidebar
     * @param {boolean} compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    NbSidebarService.prototype.toggle = function (compact, tag) {
        if (compact === void 0) {
            compact = false;
        }
        this.toggle$.next({ compact: compact, tag: tag });
    };
    /**
     * Expands a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    NbSidebarService.prototype.expand = function (tag) {
        this.expand$.next({ tag: tag });
    };
    /**
     * Collapses a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    NbSidebarService.prototype.collapse = function (tag) {
        this.collapse$.next({ tag: tag });
    };
    NbSidebarService = __decorate([(0, _core.Injectable)()], NbSidebarService);
    return NbSidebarService;
}();
exports.NbSidebarService = NbSidebarService;
//# sourceMappingURL=sidebar.service.js.map
//# sourceMappingURL=sidebar.service.js.map