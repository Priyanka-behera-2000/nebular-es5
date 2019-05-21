"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbSearchService = undefined;

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
 * Search component service, connects your code to a page-level search component.
 */
var NbSearchService = /** @class */function () {
    function NbSearchService() {
        this.searchSubmittings$ = new _rxjs.Subject();
        this.searchActivations$ = new _rxjs.Subject();
        this.searchDeactivations$ = new _rxjs.Subject();
        this.searchInput$ = new _rxjs.Subject();
    }
    /***
     * Activate (open) search component
     * @param {string} searchType
     * @param {string} tag
     */
    NbSearchService.prototype.activateSearch = function (searchType, tag) {
        this.searchActivations$.next({ searchType: searchType, tag: tag });
    };
    /**
     * Deactibate (close) search component
     * @param {string} searchType
     * @param {string} tag
     */
    NbSearchService.prototype.deactivateSearch = function (searchType, tag) {
        this.searchDeactivations$.next({ searchType: searchType, tag: tag });
    };
    /**
     * Trigger search submit
     * @param {string} term
     * @param {string} tag
     */
    NbSearchService.prototype.submitSearch = function (term, tag) {
        this.searchSubmittings$.next({ term: term, tag: tag });
    };
    /**
     * Trigger search submit by input event
     * @param {string} term
     * @param {string} tag
     */
    NbSearchService.prototype.searchInput = function (term, tag) {
        this.searchInput$.next({ term: term, tag: tag });
    };
    /**
     * Subscribe to 'activate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    NbSearchService.prototype.onSearchActivate = function () {
        return this.searchActivations$.pipe((0, _operators.share)());
    };
    /**
     * Subscribe to 'deactivate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    NbSearchService.prototype.onSearchDeactivate = function () {
        return this.searchDeactivations$.pipe((0, _operators.share)());
    };
    /**
     * Subscribe to 'submit' event (when submit button clicked)
     * @returns Observable<{term: string; tag?: string}>
     */
    NbSearchService.prototype.onSearchSubmit = function () {
        return this.searchSubmittings$.pipe((0, _operators.share)());
    };
    /**
     * Subscribe to input event
     * @returns Observable<{term: string; tag?: string}>
     */
    NbSearchService.prototype.onSearchInput = function () {
        return this.searchInput$.pipe((0, _operators.share)());
    };
    NbSearchService = __decorate([(0, _core.Injectable)()], NbSearchService);
    return NbSearchService;
}();
exports.NbSearchService = NbSearchService;
//# sourceMappingURL=search.service.js.map
//# sourceMappingURL=search.service.js.map