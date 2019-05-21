"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCalendarYearPickerComponent = exports.YEARS_IN_COLUMN = exports.YEARS_IN_VIEW = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _helpers = require("../../helpers");

var _model = require("../../model");

var _calendarYearCell = require("./calendar-year-cell.component");

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
var YEARS_IN_VIEW = exports.YEARS_IN_VIEW = 20;
var YEARS_IN_COLUMN = exports.YEARS_IN_COLUMN = 4;
var NbCalendarYearPickerComponent = /** @class */function () {
    function NbCalendarYearPickerComponent(dateService) {
        this.dateService = dateService;
        this.cellComponent = _calendarYearCell.NbCalendarYearCellComponent;
        this.size = _model.NbCalendarSize.MEDIUM;
        this.yearChange = new _core.EventEmitter();
    }
    Object.defineProperty(NbCalendarYearPickerComponent.prototype, "_cellComponent", {
        set: function set(cellComponent) {
            if (cellComponent) {
                this.cellComponent = cellComponent;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarYearPickerComponent.prototype, "medium", {
        get: function get() {
            return this.size === _model.NbCalendarSize.MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarYearPickerComponent.prototype, "large", {
        get: function get() {
            return this.size === _model.NbCalendarSize.LARGE;
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarYearPickerComponent.prototype.ngOnChanges = function () {
        this.initYears();
    };
    NbCalendarYearPickerComponent.prototype.initYears = function () {
        var _this = this;
        var selectedYear = this.dateService.getYear(this.year);
        var startYear = Math.ceil(selectedYear - YEARS_IN_VIEW / 2);
        var years = (0, _helpers.range)(YEARS_IN_VIEW).map(function (i) {
            return _this.createYearDateByIndex(i + startYear);
        });
        this.years = (0, _helpers.batch)(years, YEARS_IN_COLUMN);
    };
    NbCalendarYearPickerComponent.prototype.onSelect = function (year) {
        this.yearChange.emit(year);
    };
    NbCalendarYearPickerComponent.prototype.createYearDateByIndex = function (i) {
        return this.dateService.createDate(i, this.dateService.getMonth(this.year), this.dateService.getDate(this.year));
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarYearPickerComponent.prototype, "date", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarYearPickerComponent.prototype, "min", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarYearPickerComponent.prototype, "max", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Function)], NbCalendarYearPickerComponent.prototype, "filter", void 0);
    __decorate([(0, _core.Input)('cellComponent'), __metadata("design:type", _core.Type), __metadata("design:paramtypes", [_core.Type])], NbCalendarYearPickerComponent.prototype, "_cellComponent", null);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbCalendarYearPickerComponent.prototype, "size", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarYearPickerComponent.prototype, "year", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", Object)], NbCalendarYearPickerComponent.prototype, "yearChange", void 0);
    __decorate([(0, _core.HostBinding)('class.medium'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCalendarYearPickerComponent.prototype, "medium", null);
    __decorate([(0, _core.HostBinding)('class.large'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCalendarYearPickerComponent.prototype, "large", null);
    NbCalendarYearPickerComponent = __decorate([(0, _core.Component)({
        selector: 'nb-calendar-year-picker',
        template: "\n    <nb-calendar-picker\n      [data]=\"years\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [filter]=\"filter\"\n      [selectedValue]=\"date\"\n      [visibleDate]=\"year\"\n      [cellComponent]=\"cellComponent\"\n      (select)=\"onSelect($event)\">\n    </nb-calendar-picker>\n  ",
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    }), __metadata("design:paramtypes", [_services.NbDateService])], NbCalendarYearPickerComponent);
    return NbCalendarYearPickerComponent;
}();
exports.NbCalendarYearPickerComponent = NbCalendarYearPickerComponent;
//# sourceMappingURL=calendar-year-picker.component.js.map
//# sourceMappingURL=calendar-year-picker.component.js.map