"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbDatepickerModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _common = require("@angular/common");

var _datepicker = require("./datepicker.directive");

var _cdk = require("../cdk");

var _calendar = require("../calendar/calendar.module");

var _calendar2 = require("../calendar/calendar.component");

var _datepickerContainer = require("./datepicker-container.component");

var _datepicker2 = require("./datepicker.component");

var _calendarRange = require("../calendar/calendar-range.component");

var _calendarRange2 = require("../calendar/calendar-range.module");

var _datepickerAdapter = require("./datepicker-adapter");

/*
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

var NbDatepickerModule = /** @class */function () {
    function NbDatepickerModule() {}
    NbDatepickerModule_1 = NbDatepickerModule;
    NbDatepickerModule.forRoot = function () {
        return {
            ngModule: NbDatepickerModule_1,
            providers: [_common.DatePipe, {
                provide: _datepicker.NB_DATE_ADAPTER,
                multi: true,
                useClass: _datepickerAdapter.NbDateAdapterService
            }, {
                provide: _datepicker.NB_DATE_ADAPTER,
                multi: true,
                useClass: _datepickerAdapter.NbRangeAdapterService
            }]
        };
    };
    var NbDatepickerModule_1;
    NbDatepickerModule = NbDatepickerModule_1 = __decorate([(0, _core.NgModule)({
        imports: [_cdk.NbOverlayModule, _calendar.NbCalendarModule, _calendarRange2.NbCalendarRangeModule],
        exports: [_datepicker.NbDatepickerDirective, _datepicker2.NbDatepickerComponent, _datepicker2.NbRangepickerComponent],
        declarations: [_datepicker.NbDatepickerDirective, _datepickerContainer.NbDatepickerContainerComponent, _datepicker2.NbDatepickerComponent, _datepicker2.NbRangepickerComponent],
        entryComponents: [_calendar2.NbCalendarComponent, _calendarRange.NbCalendarRangeComponent, _datepickerContainer.NbDatepickerContainerComponent]
    })], NbDatepickerModule);
    return NbDatepickerModule;
}();
exports.NbDatepickerModule = NbDatepickerModule;
//# sourceMappingURL=datepicker.module.js.map
//# sourceMappingURL=datepicker.module.js.map