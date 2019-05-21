"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCalendarPickerComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

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

var NbCalendarPickerComponent = /** @class */function () {
    function NbCalendarPickerComponent() {
        this.select = new _core.EventEmitter();
    }
    __decorate([(0, _core.Input)(), __metadata("design:type", Array)], NbCalendarPickerComponent.prototype, "data", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarPickerComponent.prototype, "visibleDate", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarPickerComponent.prototype, "selectedValue", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", _core.Type)], NbCalendarPickerComponent.prototype, "cellComponent", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarPickerComponent.prototype, "min", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarPickerComponent.prototype, "max", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Function)], NbCalendarPickerComponent.prototype, "filter", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", _core.EventEmitter)], NbCalendarPickerComponent.prototype, "select", void 0);
    NbCalendarPickerComponent = __decorate([(0, _core.Component)({
        selector: 'nb-calendar-picker',
        template: "\n    <nb-calendar-picker-row\n      *ngFor=\"let row of data\"\n      [row]=\"row\"\n      [visibleDate]=\"visibleDate\"\n      [selectedValue]=\"selectedValue\"\n      [component]=\"cellComponent\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [filter]=\"filter\"\n      (select)=\"select.emit($event)\">\n    </nb-calendar-picker-row>\n  ",
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    })], NbCalendarPickerComponent);
    return NbCalendarPickerComponent;
}();
exports.NbCalendarPickerComponent = NbCalendarPickerComponent;
//# sourceMappingURL=calendar-picker.component.js.map
//# sourceMappingURL=calendar-picker.component.js.map