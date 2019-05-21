"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCalendarDaysNamesComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _services = require("../../services");

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

var NbCalendarDaysNamesComponent = /** @class */function () {
    function NbCalendarDaysNamesComponent(dateService) {
        this.dateService = dateService;
    }
    NbCalendarDaysNamesComponent.prototype.ngOnInit = function () {
        var days = this.createDaysNames();
        this.days = this.shiftStartOfWeek(days);
    };
    NbCalendarDaysNamesComponent.prototype.createDaysNames = function () {
        return this.dateService.getDayOfWeekNames().map(this.markIfHoliday);
    };
    NbCalendarDaysNamesComponent.prototype.shiftStartOfWeek = function (days) {
        for (var i = 0; i < this.dateService.getFirstDayOfWeek(); i++) {
            days.push(days.shift());
        }
        return days;
    };
    NbCalendarDaysNamesComponent.prototype.markIfHoliday = function (name, i) {
        return { name: name, isHoliday: i % 6 === 0 };
    };
    NbCalendarDaysNamesComponent = __decorate([(0, _core.Component)({
        selector: 'nb-calendar-days-names',
        styles: [":host{display:flex;justify-content:space-between}:host .day{display:flex;align-items:center;justify-content:center;margin:1px} "],
        template: "\n    <div class=\"day\" *ngFor=\"let day of days\" [class.holiday]=\"day.isHoliday\">{{ day.name }}</div>\n  ",
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    }), __metadata("design:paramtypes", [_services.NbDateService])], NbCalendarDaysNamesComponent);
    return NbCalendarDaysNamesComponent;
}();
exports.NbCalendarDaysNamesComponent = NbCalendarDaysNamesComponent;
//# sourceMappingURL=calendar-days-names.component.js.map
//# sourceMappingURL=calendar-days-names.component.js.map