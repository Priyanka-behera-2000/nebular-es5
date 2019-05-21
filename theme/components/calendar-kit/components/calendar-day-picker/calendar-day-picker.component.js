"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCalendarDayPickerComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _services = require("../../services");

var _calendarDayCell = require("./calendar-day-cell.component");

var _model = require("../../model");

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

/**
 * Provides capability pick days.
 * */
var NbCalendarDayPickerComponent = /** @class */function () {
    function NbCalendarDayPickerComponent(monthModel) {
        this.monthModel = monthModel;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonths = true;
        this.cellComponent = _calendarDayCell.NbCalendarDayCellComponent;
        /**
         * Size of the component.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = _model.NbCalendarSize.MEDIUM;
        /**
         * Fires newly selected date.
         * */
        this.dateChange = new _core.EventEmitter();
    }
    Object.defineProperty(NbCalendarDayPickerComponent.prototype, "setCellComponent", {
        /**
         * Custom day cell component. Have to implement `NbCalendarCell` interface.
         * */
        set: function set(cellComponent) {
            if (cellComponent) {
                this.cellComponent = cellComponent;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayPickerComponent.prototype, "medium", {
        get: function get() {
            return this.size === _model.NbCalendarSize.MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayPickerComponent.prototype, "large", {
        get: function get() {
            return this.size === _model.NbCalendarSize.LARGE;
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarDayPickerComponent.prototype.ngOnChanges = function (_a) {
        var visibleDate = _a.visibleDate;
        if (visibleDate) {
            this.weeks = this.monthModel.createDaysGrid(this.visibleDate, this.boundingMonths);
        }
    };
    NbCalendarDayPickerComponent.prototype.onSelect = function (day) {
        this.dateChange.emit(day);
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarDayPickerComponent.prototype, "visibleDate", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean)], NbCalendarDayPickerComponent.prototype, "boundingMonths", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarDayPickerComponent.prototype, "min", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarDayPickerComponent.prototype, "max", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Function)], NbCalendarDayPickerComponent.prototype, "filter", void 0);
    __decorate([(0, _core.Input)('cellComponent'), __metadata("design:type", _core.Type), __metadata("design:paramtypes", [_core.Type])], NbCalendarDayPickerComponent.prototype, "setCellComponent", null);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbCalendarDayPickerComponent.prototype, "size", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarDayPickerComponent.prototype, "date", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", Object)], NbCalendarDayPickerComponent.prototype, "dateChange", void 0);
    __decorate([(0, _core.HostBinding)('class.medium'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCalendarDayPickerComponent.prototype, "medium", null);
    __decorate([(0, _core.HostBinding)('class.large'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbCalendarDayPickerComponent.prototype, "large", null);
    NbCalendarDayPickerComponent = __decorate([(0, _core.Component)({
        selector: 'nb-calendar-day-picker',
        styles: [" :host { display: block; } "],
        template: "\n    <nb-calendar-days-names></nb-calendar-days-names>\n    <nb-calendar-picker\n      [data]=\"weeks\"\n      [visibleDate]=\"visibleDate\"\n      [selectedValue]=\"date\"\n      [cellComponent]=\"cellComponent\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [filter]=\"filter\"\n      (select)=\"onSelect($event)\">\n    </nb-calendar-picker>\n  ",
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    }), __metadata("design:paramtypes", [_services.NbCalendarMonthModelService])], NbCalendarDayPickerComponent);
    return NbCalendarDayPickerComponent;
}();
exports.NbCalendarDayPickerComponent = NbCalendarDayPickerComponent;
//# sourceMappingURL=calendar-day-picker.component.js.map
//# sourceMappingURL=calendar-day-picker.component.js.map