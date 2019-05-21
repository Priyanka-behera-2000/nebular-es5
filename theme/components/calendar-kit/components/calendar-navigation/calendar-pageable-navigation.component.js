"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCalendarPageableNavigationComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _direction = require("../../../../services/direction.service");

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

var NbCalendarPageableNavigationComponent = /** @class */function () {
    function NbCalendarPageableNavigationComponent(directionService) {
        this.directionService = directionService;
        this.changeMode = new _core.EventEmitter();
        this.next = new _core.EventEmitter();
        this.prev = new _core.EventEmitter();
    }
    Object.defineProperty(NbCalendarPageableNavigationComponent.prototype, "isRtl", {
        get: function get() {
            return this.directionService.isRtl();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCalendarPageableNavigationComponent.prototype, "isLtr", {
        get: function get() {
            return this.directionService.isLtr();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarPageableNavigationComponent.prototype, "date", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", Object)], NbCalendarPageableNavigationComponent.prototype, "changeMode", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", Object)], NbCalendarPageableNavigationComponent.prototype, "next", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", Object)], NbCalendarPageableNavigationComponent.prototype, "prev", void 0);
    NbCalendarPageableNavigationComponent = __decorate([(0, _core.Component)({
        selector: 'nb-calendar-pageable-navigation',
        styles: [":host{display:flex;align-items:center;justify-content:space-between}nb-calendar-navigation{margin:0 0.5rem} "],
        template: "\n    <button nbButton (click)=\"prev.emit()\" ghost>\n      <nb-icon [icon]=\"isLtr ? 'chevron-left-outline' : 'chevron-right-outline'\" pack=\"nebular-essentials\"></nb-icon>\n    </button>\n    <nb-calendar-navigation [date]=\"date\" (changeMode)=\"changeMode.emit()\"></nb-calendar-navigation>\n    <button nbButton (click)=\"next.emit()\" ghost>\n      <nb-icon [icon]=\"isLtr ? 'chevron-right-outline' : 'chevron-left-outline'\" pack=\"nebular-essentials\"></nb-icon>\n    </button>\n  "
    }), __metadata("design:paramtypes", [_direction.NbLayoutDirectionService])], NbCalendarPageableNavigationComponent);
    return NbCalendarPageableNavigationComponent;
}();
exports.NbCalendarPageableNavigationComponent = NbCalendarPageableNavigationComponent;
//# sourceMappingURL=calendar-pageable-navigation.component.js.map
//# sourceMappingURL=calendar-pageable-navigation.component.js.map