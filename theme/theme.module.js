"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbThemeModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.nbWindowFactory = nbWindowFactory;

var _core = require("@angular/core");

var _common = require("@angular/common");

var _theme = require("./theme.options");

var _theme2 = require("./services/theme.service");

var _spinner = require("./services/spinner.service");

var _jsThemesRegistry = require("./services/js-themes-registry.service");

var _breakpoints = require("./services/breakpoints.service");

var _direction = require("./services/direction.service");

var _scroll = require("./services/scroll.service");

var _ruler = require("./services/ruler.service");

var _cdk = require("./components/cdk");

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
function nbWindowFactory() {
    return window;
}
var NbThemeModule = /** @class */function () {
    function NbThemeModule() {}
    NbThemeModule_1 = NbThemeModule;
    // TODO: check the options (throw exception?)
    /**
     * Main Theme Module
     *
     * @param nbThemeOptions {NbThemeOptions} Main theme options
     * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
     * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
     * @param layoutDirection {NbLayoutDirection} Layout direction
     *
     * @returns {ModuleWithProviders}
     */
    NbThemeModule.forRoot = function (nbThemeOptions, nbJSThemes, nbMediaBreakpoints, layoutDirection) {
        if (nbThemeOptions === void 0) {
            nbThemeOptions = { name: 'default' };
        }
        return {
            ngModule: NbThemeModule_1,
            providers: [{ provide: _theme.NB_THEME_OPTIONS, useValue: nbThemeOptions || {} }, { provide: _theme.NB_BUILT_IN_JS_THEMES, useValue: _jsThemesRegistry.BUILT_IN_THEMES }, { provide: _theme.NB_JS_THEMES, useValue: nbJSThemes || [] }, { provide: _theme.NB_MEDIA_BREAKPOINTS, useValue: nbMediaBreakpoints || _breakpoints.DEFAULT_MEDIA_BREAKPOINTS }, { provide: _theme.NB_WINDOW, useFactory: nbWindowFactory }, { provide: _theme.NB_DOCUMENT, useExisting: _common.DOCUMENT }, _jsThemesRegistry.NbJSThemesRegistry, _theme2.NbThemeService, _breakpoints.NbMediaBreakpointsService, _spinner.NbSpinnerService, { provide: _direction.NB_LAYOUT_DIRECTION, useValue: layoutDirection || _direction.NbLayoutDirection.LTR }, _direction.NbLayoutDirectionService, _scroll.NbLayoutScrollService, _ruler.NbLayoutRulerService].concat(_cdk.NbOverlayModule.forRoot().providers)
        };
    };
    var NbThemeModule_1;
    NbThemeModule = NbThemeModule_1 = __decorate([(0, _core.NgModule)({
        imports: [_common.CommonModule],
        exports: []
    })], NbThemeModule);
    return NbThemeModule;
}();
exports.NbThemeModule = NbThemeModule;
//# sourceMappingURL=theme.module.js.map
//# sourceMappingURL=theme.module.js.map