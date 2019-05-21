"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCalendarHeaderComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _direction = require("../../../../services/direction.service");

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

var NbCalendarHeaderComponent = /** @class */function () {
    function NbCalendarHeaderComponent(directionService, dateService) {
        this.directionService = directionService;
        this.dateService = dateService;
        this.navigateToday = new _core.EventEmitter();
        this.date = this.dateService.today();
    }
    Object.defineProperty(NbCalendarHeaderComponent.prototype, "isRtl", {
        get: function get() {
            return this.directionService.isRtl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarHeaderComponent.prototype, "isLtr", {
        get: function get() {
            return this.directionService.isLtr();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarHeaderComponent.prototype, "date", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", _core.EventEmitter)], NbCalendarHeaderComponent.prototype, "navigateToday", void 0);
    NbCalendarHeaderComponent = __decorate([(0, _core.Component)({
        selector: 'nb-calendar-header',
        template: "\n    <div class=\"header\">\n      <span class=\"title\" (click)=\"navigateToday.emit()\">\n        {{ date | date: 'mediumDate' }}\n        <i [ngClass]=\"{ 'nb-arrow-dropright': isLtr, 'nb-arrow-dropleft': isRtl }\"></i>\n      </span>\n      <span class=\"sub-title\">Today</span>\n    </div>\n  "
    }), __metadata("design:paramtypes", [_direction.NbLayoutDirectionService, _services.NbDateService])], NbCalendarHeaderComponent);
    return NbCalendarHeaderComponent;
}();
exports.NbCalendarHeaderComponent = NbCalendarHeaderComponent;
//# sourceMappingURL=calendar-header.component.js.map
//# sourceMappingURL=calendar-header.component.js.map