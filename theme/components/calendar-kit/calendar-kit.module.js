"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCalendarKitModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _common = require("@angular/common");

var _shared = require("../shared/shared.module");

var _button = require("../button/button.module");

var _icon = require("../icon/icon.module");

var _services = require("./services");

var _components = require("./components");

var _nativeDate = require("./services/native-date.service");

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

var SERVICES = [{ provide: _services.NbDateService, useClass: _nativeDate.NbNativeDateService }, _common.DatePipe, _services.NbCalendarMonthModelService];
var COMPONENTS = [_components.NbCalendarHeaderComponent, _components.NbCalendarNavigationComponent, _components.NbCalendarPageableNavigationComponent, _components.NbCalendarDaysNamesComponent, _components.NbCalendarYearPickerComponent, _components.NbCalendarMonthPickerComponent, _components.NbCalendarDayPickerComponent, _components.NbCalendarDayCellComponent, _components.NbCalendarMonthCellComponent, _components.NbCalendarYearCellComponent, _components.NbCalendarPickerRowComponent, _components.NbCalendarPickerComponent];
/**
 * `NbCalendarKitModule` is a module that contains multiple useful components for building custom calendars.
 * So if you think our calendars is not enough powerful for you just use calendar-kit and build your own calendar!
 *
 * Available components:
 * - `NbCalendarDayPicker`
 * - `NbCalendarDayCell`
 * - `NbCalendarMonthPicker`
 * - `NbCalendarMonthCell`
 * - `NbCalendarYearPicker`
 * - `NbCalendarYearCell`
 * - `NbCalendarHeader`
 * - `NbCalendarNavigation`
 * - `NbCalendarPageableNavigation`
 *
 * For example you can easily build full calendar:
 * @stacked-example(Full calendar, calendar-kit/calendar-kit-full-calendar.component)
 * */
var NbCalendarKitModule = /** @class */function () {
    function NbCalendarKitModule() {}
    NbCalendarKitModule = __decorate([(0, _core.NgModule)({
        imports: [_shared.NbSharedModule, _button.NbButtonModule, _icon.NbIconModule],
        exports: COMPONENTS.slice(),
        declarations: COMPONENTS.slice(),
        providers: SERVICES.slice(),
        entryComponents: [_components.NbCalendarDayCellComponent, _components.NbCalendarMonthCellComponent, _components.NbCalendarYearCellComponent]
    })], NbCalendarKitModule);
    return NbCalendarKitModule;
}();
exports.NbCalendarKitModule = NbCalendarKitModule;
//# sourceMappingURL=calendar-kit.module.js.map
//# sourceMappingURL=calendar-kit.module.js.map