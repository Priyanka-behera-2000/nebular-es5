"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCalendarDayCellComponent = undefined;

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

var NbCalendarDayCellComponent = /** @class */function () {
    function NbCalendarDayCellComponent(dateService) {
        this.dateService = dateService;
        this.select = new _core.EventEmitter(true);
    }
    Object.defineProperty(NbCalendarDayCellComponent.prototype, "today", {
        get: function get() {
            return this.dateService.isSameDaySafe(this.date, this.dateService.today());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayCellComponent.prototype, "boundingMonth", {
        get: function get() {
            return !this.dateService.isSameMonthSafe(this.date, this.visibleDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayCellComponent.prototype, "selected", {
        get: function get() {
            return this.dateService.isSameDaySafe(this.date, this.selectedValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayCellComponent.prototype, "empty", {
        get: function get() {
            return !this.date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayCellComponent.prototype, "disabled", {
        get: function get() {
            return this.smallerThanMin() || this.greaterThanMax() || this.dontFitFilter();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarDayCellComponent.prototype, "day", {
        get: function get() {
            return this.date && this.dateService.getDate(this.date);
        },
        enumerable: true,
        configurable: true
    });
    NbCalendarDayCellComponent.prototype.onClick = function () {
        if (this.disabled || this.empty) {
            return;
        }
        this.select.emit(this.date);
    };
    NbCalendarDayCellComponent.prototype.smallerThanMin = function () {
        return this.date && this.min && this.dateService.compareDates(this.date, this.min) < 0;
    };
    NbCalendarDayCellComponent.prototype.greaterThanMax = function () {
        return this.date && this.max && this.dateService.compareDates(this.date, this.max) > 0;
    };
    NbCalendarDayCellComponent.prototype.dontFitFilter = function () {
        return this.date && this.filter && !this.filter(this.date);
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarDayCellComponent.prototype, "date", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarDayCellComponent.prototype, "selectedValue", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarDayCellComponent.prototype, "visibleDate", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarDayCellComponent.prototype, "min", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarDayCellComponent.prototype, "max", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Function)], NbCalendarDayCellComponent.prototype, "filter", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", _core.EventEmitter)], NbCalendarDayCellComponent.prototype, "select", void 0);
    __decorate([(0, _core.HostBinding)('class.today'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbCalendarDayCellComponent.prototype, "today", null);
    __decorate([(0, _core.HostBinding)('class.bounding-month'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbCalendarDayCellComponent.prototype, "boundingMonth", null);
    __decorate([(0, _core.HostBinding)('class.selected'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbCalendarDayCellComponent.prototype, "selected", null);
    __decorate([(0, _core.HostBinding)('class.empty'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbCalendarDayCellComponent.prototype, "empty", null);
    __decorate([(0, _core.HostBinding)('class.disabled'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbCalendarDayCellComponent.prototype, "disabled", null);
    __decorate([(0, _core.HostListener)('click'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], NbCalendarDayCellComponent.prototype, "onClick", null);
    NbCalendarDayCellComponent = __decorate([(0, _core.Component)({
        selector: 'nb-calendar-day-cell',
        template: '{{ day }}',
        changeDetection: _core.ChangeDetectionStrategy.OnPush,
        host: { 'class': 'day-cell' }
    }), __metadata("design:paramtypes", [_services.NbDateService])], NbCalendarDayCellComponent);
    return NbCalendarDayCellComponent;
}();
exports.NbCalendarDayCellComponent = NbCalendarDayCellComponent;
//# sourceMappingURL=calendar-day-cell.component.js.map
//# sourceMappingURL=calendar-day-cell.component.js.map