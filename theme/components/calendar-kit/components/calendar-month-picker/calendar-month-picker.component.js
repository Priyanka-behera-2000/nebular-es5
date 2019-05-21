"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCalendarMonthPickerComponent = exports.MONTHS_IN_COLUMN = exports.MONTHS_IN_VIEW = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _helpers = require("../../helpers");

var _model = require("../../model");

var _calendarMonthCell = require("./calendar-month-cell.component");

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
var MONTHS_IN_VIEW = exports.MONTHS_IN_VIEW = 12;
var MONTHS_IN_COLUMN = exports.MONTHS_IN_COLUMN = 4;
var NbCalendarMonthPickerComponent = /** @class */function () {
    function NbCalendarMonthPickerComponent(dateService) {
        this.dateService = dateService;
        this.size = _model.NbCalendarSize.MEDIUM;
        this.monthChange = new _core.EventEmitter();
        this.cellComponent = _calendarMonthCell.NbCalendarMonthCellComponent;
    }
    Object.defineProperty(NbCalendarMonthPickerComponent.prototype, "_cellComponent", {
        set: function set(cellComponent) {
            if (cellComponent) {
                this.cellComponent = cellComponent;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarMonthPickerComponent.prototype, "medium", {
        get: function get() {
            return this.size === _model.NbCalendarSize.MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarMonthPickerComponent.prototype, "large", {
        get: function get() {
            return this.size === _model.NbCalendarSize.LARGE;
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarMonthPickerComponent.prototype.ngOnInit = function () {
        this.initMonths();
    };
    NbCalendarMonthPickerComponent.prototype.initMonths = function () {
        var date = this.dateService.getDate(this.month);
        var year = this.dateService.getYear(this.month);
        var firstMonth = this.dateService.createDate(year, 0, date);
        var months = [firstMonth];
        for (var monthIndex = 1; monthIndex < MONTHS_IN_VIEW; monthIndex++) {
            months.push(this.dateService.addMonth(firstMonth, monthIndex));
        }
        this.months = (0, _helpers.batch)(months, MONTHS_IN_COLUMN);
    };
    NbCalendarMonthPickerComponent.prototype.onSelect = function (month) {
        this.monthChange.emit(month);
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarMonthPickerComponent.prototype, "min", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarMonthPickerComponent.prototype, "max", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Function)], NbCalendarMonthPickerComponent.prototype, "filter", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbCalendarMonthPickerComponent.prototype, "size", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarMonthPickerComponent.prototype, "month", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", _core.EventEmitter)], NbCalendarMonthPickerComponent.prototype, "monthChange", void 0);
    __decorate([(0, _core.Input)('cellComponent'), __metadata("design:type", _core.Type), __metadata("design:paramtypes", [_core.Type])], NbCalendarMonthPickerComponent.prototype, "_cellComponent", null);
    __decorate([(0, _core.HostBinding)('class.medium'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCalendarMonthPickerComponent.prototype, "medium", null);
    __decorate([(0, _core.HostBinding)('class.large'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCalendarMonthPickerComponent.prototype, "large", null);
    NbCalendarMonthPickerComponent = __decorate([(0, _core.Component)({
        selector: 'nb-calendar-month-picker',
        template: "\n    <nb-calendar-picker\n      [data]=\"months\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [filter]=\"filter\"\n      [selectedValue]=\"month\"\n      [cellComponent]=\"cellComponent\"\n      (select)=\"onSelect($event)\">\n    </nb-calendar-picker>\n  ",
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    }), __metadata("design:paramtypes", [_services.NbDateService])], NbCalendarMonthPickerComponent);
    return NbCalendarMonthPickerComponent;
}();
exports.NbCalendarMonthPickerComponent = NbCalendarMonthPickerComponent;
//# sourceMappingURL=calendar-month-picker.component.js.map
//# sourceMappingURL=calendar-month-picker.component.js.map