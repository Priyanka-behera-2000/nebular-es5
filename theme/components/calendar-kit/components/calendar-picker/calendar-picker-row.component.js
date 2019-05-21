"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCalendarPickerRowComponent = undefined;

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

var NbCalendarPickerRowComponent = /** @class */function () {
    function NbCalendarPickerRowComponent(cfr) {
        this.cfr = cfr;
        this.select = new _core.EventEmitter();
    }
    NbCalendarPickerRowComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var factory = this.cfr.resolveComponentFactory(this.component);
        this.containerRef.clear();
        this.row.forEach(function (date) {
            var component = _this.containerRef.createComponent(factory);
            _this.patchWithContext(component.instance, date);
            component.changeDetectorRef.detectChanges();
        });
    };
    NbCalendarPickerRowComponent.prototype.patchWithContext = function (component, date) {
        component.visibleDate = this.visibleDate;
        component.selectedValue = this.selectedValue;
        component.date = date;
        component.min = this.min;
        component.max = this.max;
        component.filter = this.filter;
        component.select.subscribe(this.select.emit.bind(this.select));
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", Array)], NbCalendarPickerRowComponent.prototype, "row", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarPickerRowComponent.prototype, "selectedValue", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarPickerRowComponent.prototype, "visibleDate", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", _core.Type)], NbCalendarPickerRowComponent.prototype, "component", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarPickerRowComponent.prototype, "min", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarPickerRowComponent.prototype, "max", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Function)], NbCalendarPickerRowComponent.prototype, "filter", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", _core.EventEmitter)], NbCalendarPickerRowComponent.prototype, "select", void 0);
    __decorate([(0, _core.ViewChild)(_core.TemplateRef, { read: _core.ViewContainerRef }), __metadata("design:type", _core.ViewContainerRef)], NbCalendarPickerRowComponent.prototype, "containerRef", void 0);
    NbCalendarPickerRowComponent = __decorate([(0, _core.Component)({
        selector: 'nb-calendar-picker-row',
        styles: ["\n    :host {\n      display: flex;\n      justify-content: space-between;\n    }\n  "],
        template: '<ng-template></ng-template>',
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    }), __metadata("design:paramtypes", [_core.ComponentFactoryResolver])], NbCalendarPickerRowComponent);
    return NbCalendarPickerRowComponent;
}();
exports.NbCalendarPickerRowComponent = NbCalendarPickerRowComponent;
//# sourceMappingURL=calendar-picker-row.component.js.map
//# sourceMappingURL=calendar-picker-row.component.js.map