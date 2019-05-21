"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbThemeService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _theme = require("../theme.options");

var _jsThemesRegistry = require("./js-themes-registry.service");

var _breakpoints = require("./breakpoints.service");

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
 * Main Nebular service. Includes various helper methods.
 */
var NbThemeService = /** @class */function () {
    function NbThemeService(options, breakpointService, jsThemesRegistry) {
        this.options = options;
        this.breakpointService = breakpointService;
        this.jsThemesRegistry = jsThemesRegistry;
        this.themeChanges$ = new _rxjs.ReplaySubject(1);
        this.appendLayoutClass$ = new _rxjs.Subject();
        this.removeLayoutClass$ = new _rxjs.Subject();
        this.changeWindowWidth$ = new _rxjs.ReplaySubject(2);
        if (options && options.name) {
            this.changeTheme(options.name);
        }
    }
    /**
     * Change current application theme
     * @param {string} name
     */
    NbThemeService.prototype.changeTheme = function (name) {
        this.themeChanges$.next({ name: name, previous: this.currentTheme });
        this.currentTheme = name;
    };
    NbThemeService.prototype.changeWindowWidth = function (width) {
        this.changeWindowWidth$.next(width);
    };
    /**
     * Returns a theme object with variables (color/paddings/etc) on a theme change.
     * Once subscribed - returns current theme.
     *
     * @returns {Observable<NbJSThemeOptions>}
     */
    NbThemeService.prototype.getJsTheme = function () {
        var _this = this;
        return this.onThemeChange().pipe((0, _operators.map)(function (theme) {
            return _this.jsThemesRegistry.get(theme.name);
        }));
    };
    /**
     * Triggers media query breakpoint change
     * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
     * ```ts
     *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
     * ```
     * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
     */
    NbThemeService.prototype.onMediaQueryChange = function () {
        var _this = this;
        return this.changeWindowWidth$.pipe((0, _operators.startWith)(undefined), (0, _operators.pairwise)(), (0, _operators.map)(function (_a) {
            var prevWidth = _a[0],
                width = _a[1];
            return [_this.breakpointService.getByWidth(prevWidth), _this.breakpointService.getByWidth(width)];
        }), (0, _operators.filter)(function (_a) {
            var prevPoint = _a[0],
                point = _a[1];
            return prevPoint.name !== point.name;
        }), (0, _operators.distinctUntilChanged)(null, function (params) {
            return params[0].name + params[1].name;
        }), (0, _operators.share)());
    };
    /**
     * Triggered when current theme is changed
     * @returns {Observable<any>}
     */
    NbThemeService.prototype.onThemeChange = function () {
        return this.themeChanges$.pipe((0, _operators.share)());
    };
    /**
     * Append a class to nb-layout
     * @param {string} className
     */
    NbThemeService.prototype.appendLayoutClass = function (className) {
        this.appendLayoutClass$.next(className);
    };
    /**
     * Triggered when a new class is added to nb-layout through `appendLayoutClass` method
     * @returns {Observable<any>}
     */
    NbThemeService.prototype.onAppendLayoutClass = function () {
        return this.appendLayoutClass$.pipe((0, _operators.share)());
    };
    /**
     * Removes a class from nb-layout
     * @param {string} className
     */
    NbThemeService.prototype.removeLayoutClass = function (className) {
        this.removeLayoutClass$.next(className);
    };
    /**
     * Triggered when a class is removed from nb-layout through `removeLayoutClass` method
     * @returns {Observable<any>}
     */
    NbThemeService.prototype.onRemoveLayoutClass = function () {
        return this.removeLayoutClass$.pipe((0, _operators.share)());
    };
    NbThemeService = __decorate([(0, _core.Injectable)(), __param(0, (0, _core.Inject)(_theme.NB_THEME_OPTIONS)), __metadata("design:paramtypes", [Object, _breakpoints.NbMediaBreakpointsService, _jsThemesRegistry.NbJSThemesRegistry])], NbThemeService);
    return NbThemeService;
}();
exports.NbThemeService = NbThemeService;
//# sourceMappingURL=theme.service.js.map
//# sourceMappingURL=theme.service.js.map