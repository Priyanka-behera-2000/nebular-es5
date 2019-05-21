"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCalendarMonthModelService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _date = require("./date.service");

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

var NbCalendarMonthModelService = /** @class */function () {
    function NbCalendarMonthModelService(dateService) {
        this.dateService = dateService;
    }
    NbCalendarMonthModelService.prototype.createDaysGrid = function (activeMonth, boundingMonth) {
        if (boundingMonth === void 0) {
            boundingMonth = true;
        }
        var weeks = this.createDates(activeMonth);
        return this.withBoundingMonths(weeks, activeMonth, boundingMonth);
    };
    NbCalendarMonthModelService.prototype.createDates = function (activeMonth) {
        var days = this.createDateRangeForMonth(activeMonth);
        var startOfWeekDayDiff = this.getStartOfWeekDayDiff(activeMonth);
        return (0, _helpers.batch)(days, this.dateService.DAYS_IN_WEEK, startOfWeekDayDiff);
    };
    NbCalendarMonthModelService.prototype.withBoundingMonths = function (weeks, activeMonth, boundingMonth) {
        var withBoundingMonths = weeks;
        if (this.isShouldAddPrevBoundingMonth(withBoundingMonths)) {
            withBoundingMonths = this.addPrevBoundingMonth(withBoundingMonths, activeMonth, boundingMonth);
        }
        if (this.isShouldAddNextBoundingMonth(withBoundingMonths)) {
            withBoundingMonths = this.addNextBoundingMonth(withBoundingMonths, activeMonth, boundingMonth);
        }
        return withBoundingMonths;
    };
    NbCalendarMonthModelService.prototype.addPrevBoundingMonth = function (weeks, activeMonth, boundingMonth) {
        var firstWeek = weeks.shift();
        var requiredItems = this.dateService.DAYS_IN_WEEK - firstWeek.length;
        firstWeek.unshift.apply(firstWeek, this.createPrevBoundingDays(activeMonth, boundingMonth, requiredItems));
        return [firstWeek].concat(weeks);
    };
    NbCalendarMonthModelService.prototype.addNextBoundingMonth = function (weeks, activeMonth, boundingMonth) {
        var lastWeek = weeks.pop();
        var requiredItems = this.dateService.DAYS_IN_WEEK - lastWeek.length;
        lastWeek.push.apply(lastWeek, this.createNextBoundingDays(activeMonth, boundingMonth, requiredItems));
        return weeks.concat([lastWeek]);
    };
    NbCalendarMonthModelService.prototype.createPrevBoundingDays = function (activeMonth, boundingMonth, requiredItems) {
        var month = this.dateService.addMonth(activeMonth, -1);
        var daysInMonth = this.dateService.getNumberOfDaysInMonth(month);
        return this.createDateRangeForMonth(month).slice(daysInMonth - requiredItems).map(function (date) {
            return boundingMonth ? date : null;
        });
    };
    NbCalendarMonthModelService.prototype.createNextBoundingDays = function (activeMonth, boundingMonth, requiredItems) {
        var month = this.dateService.addMonth(activeMonth, 1);
        return this.createDateRangeForMonth(month).slice(0, requiredItems).map(function (date) {
            return boundingMonth ? date : null;
        });
    };
    NbCalendarMonthModelService.prototype.getStartOfWeekDayDiff = function (date) {
        var startOfMonth = this.dateService.getMonthStart(date);
        return this.getWeekStartDiff(startOfMonth);
    };
    NbCalendarMonthModelService.prototype.getWeekStartDiff = function (date) {
        return (7 - this.dateService.getFirstDayOfWeek() + this.dateService.getDayOfWeek(date)) % 7;
    };
    NbCalendarMonthModelService.prototype.isShouldAddPrevBoundingMonth = function (weeks) {
        return weeks[0].length < this.dateService.DAYS_IN_WEEK;
    };
    NbCalendarMonthModelService.prototype.isShouldAddNextBoundingMonth = function (weeks) {
        return weeks[weeks.length - 1].length < this.dateService.DAYS_IN_WEEK;
    };
    NbCalendarMonthModelService.prototype.createDateRangeForMonth = function (date) {
        var _this = this;
        var daysInMonth = this.dateService.getNumberOfDaysInMonth(date);
        return (0, _helpers.range)(daysInMonth, function (i) {
            var year = _this.dateService.getYear(date);
            var month = _this.dateService.getMonth(date);
            return _this.dateService.createDate(year, month, i + 1);
        });
    };
    NbCalendarMonthModelService = __decorate([(0, _core.Injectable)(), __metadata("design:paramtypes", [_date.NbDateService])], NbCalendarMonthModelService);
    return NbCalendarMonthModelService;
}();
exports.NbCalendarMonthModelService = NbCalendarMonthModelService;
//# sourceMappingURL=calendar-month-model.service.js.map
//# sourceMappingURL=calendar-month-model.service.js.map