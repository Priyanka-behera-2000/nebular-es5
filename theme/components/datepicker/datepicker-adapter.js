"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbRangeAdapterService = exports.NbDateAdapterService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _datepicker = require("./datepicker.component");

var _datepicker2 = require("./datepicker.directive");

var _calendarKit = require("../calendar-kit");

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
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

var NbDateAdapterService = /** @class */function (_super) {
    __extends(NbDateAdapterService, _super);
    function NbDateAdapterService(dateService) {
        var _this = _super.call(this) || this;
        _this.dateService = dateService;
        _this.picker = _datepicker.NbDatepickerComponent;
        return _this;
    }
    NbDateAdapterService.prototype.parse = function (date, format) {
        return this.dateService.parse(date, format);
    };
    NbDateAdapterService.prototype.format = function (date, format) {
        return this.dateService.format(date, format);
    };
    NbDateAdapterService.prototype.isValid = function (date, format) {
        return this.dateService.isValidDateString(date, format);
    };
    NbDateAdapterService = __decorate([(0, _core.Injectable)(), __metadata("design:paramtypes", [_calendarKit.NbDateService])], NbDateAdapterService);
    return NbDateAdapterService;
}(_datepicker2.NbDatepickerAdapter);
exports.NbDateAdapterService = NbDateAdapterService;

var NbRangeAdapterService = /** @class */function (_super) {
    __extends(NbRangeAdapterService, _super);
    function NbRangeAdapterService(dateService) {
        var _this = _super.call(this) || this;
        _this.dateService = dateService;
        _this.picker = _datepicker.NbRangepickerComponent;
        return _this;
    }
    NbRangeAdapterService.prototype.parse = function (range, format) {
        var _a = range.split('-').map(function (subDate) {
            return subDate.trim();
        }),
            start = _a[0],
            end = _a[1];
        return {
            start: this.dateService.parse(start, format),
            end: this.dateService.parse(end, format)
        };
    };
    NbRangeAdapterService.prototype.format = function (range, format) {
        if (!range) {
            return '';
        }
        var start = this.dateService.format(range.start, format);
        var isStartValid = this.dateService.isValidDateString(start, format);
        if (!isStartValid) {
            return '';
        }
        var end = this.dateService.format(range.end, format);
        var isEndValid = this.dateService.isValidDateString(end, format);
        if (isEndValid) {
            return start + " - " + end;
        } else {
            return start;
        }
    };
    NbRangeAdapterService.prototype.isValid = function (range, format) {
        var _a = range.split('-').map(function (subDate) {
            return subDate.trim();
        }),
            start = _a[0],
            end = _a[1];
        return this.dateService.isValidDateString(start, format) && this.dateService.isValidDateString(end, format);
    };
    NbRangeAdapterService = __decorate([(0, _core.Injectable)(), __metadata("design:paramtypes", [_calendarKit.NbDateService])], NbRangeAdapterService);
    return NbRangeAdapterService;
}(_datepicker2.NbDatepickerAdapter);
exports.NbRangeAdapterService = NbRangeAdapterService;
//# sourceMappingURL=datepicker-adapter.js.map
//# sourceMappingURL=datepicker-adapter.js.map