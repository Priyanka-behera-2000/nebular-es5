"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCalendarMonthCellComponent = undefined;

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

var NbCalendarMonthCellComponent = /** @class */function () {
    function NbCalendarMonthCellComponent(dateService) {
        this.dateService = dateService;
        this.select = new _core.EventEmitter(true);
    }
    Object.defineProperty(NbCalendarMonthCellComponent.prototype, "selected", {
        get: function get() {
            return this.dateService.isSameMonthSafe(this.date, this.selectedValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarMonthCellComponent.prototype, "today", {
        get: function get() {
            return this.dateService.isSameMonthSafe(this.date, this.dateService.today());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarMonthCellComponent.prototype, "disabled", {
        get: function get() {
            return this.smallerThanMin() || this.greaterThanMax();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarMonthCellComponent.prototype, "month", {
        get: function get() {
            return this.dateService.getMonthName(this.date);
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarMonthCellComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    };
    NbCalendarMonthCellComponent.prototype.smallerThanMin = function () {
        return this.date && this.min && this.dateService.compareDates(this.monthEnd(), this.min) < 0;
    };
    NbCalendarMonthCellComponent.prototype.greaterThanMax = function () {
        return this.date && this.max && this.dateService.compareDates(this.monthStart(), this.max) > 0;
    };
    NbCalendarMonthCellComponent.prototype.monthStart = function () {
        return this.dateService.getMonthStart(this.date);
    };
    NbCalendarMonthCellComponent.prototype.monthEnd = function () {
        return this.dateService.getMonthEnd(this.date);
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarMonthCellComponent.prototype, "date", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarMonthCellComponent.prototype, "selectedValue", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarMonthCellComponent.prototype, "min", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarMonthCellComponent.prototype, "max", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", _core.EventEmitter)], NbCalendarMonthCellComponent.prototype, "select", void 0);
    __decorate([(0, _core.HostBinding)('class.selected'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbCalendarMonthCellComponent.prototype, "selected", null);
    __decorate([(0, _core.HostBinding)('class.today'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbCalendarMonthCellComponent.prototype, "today", null);
    __decorate([(0, _core.HostBinding)('class.disabled'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbCalendarMonthCellComponent.prototype, "disabled", null);
    __decorate([(0, _core.HostListener)('click'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], NbCalendarMonthCellComponent.prototype, "onClick", null);
    NbCalendarMonthCellComponent = __decorate([(0, _core.Component)({
        selector: 'nb-calendar-month-cell',
        template: "{{ month }}",
        changeDetection: _core.ChangeDetectionStrategy.OnPush,
        host: { 'class': 'month-cell' }
    }), __metadata("design:paramtypes", [_services.NbDateService])], NbCalendarMonthCellComponent);
    return NbCalendarMonthCellComponent;
}();
exports.NbCalendarMonthCellComponent = NbCalendarMonthCellComponent;
//# sourceMappingURL=calendar-month-cell.component.js.map
//# sourceMappingURL=calendar-month-cell.component.js.map