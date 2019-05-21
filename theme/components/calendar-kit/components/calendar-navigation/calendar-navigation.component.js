"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCalendarNavigationComponent = undefined;

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

var NbCalendarNavigationComponent = /** @class */function () {
    function NbCalendarNavigationComponent() {
        this.changeMode = new _core.EventEmitter(true);
    }
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbCalendarNavigationComponent.prototype, "date", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", Object)], NbCalendarNavigationComponent.prototype, "changeMode", void 0);
    NbCalendarNavigationComponent = __decorate([(0, _core.Component)({
        selector: 'nb-calendar-navigation',
        styles: ["\n    :host {\n      display: flex;\n      justify-content: center;\n    }\n\n    :host button {\n      height: 3.125rem;\n    }\n  "],
        template: "\n    <button nbButton (click)=\"changeMode.emit()\">\n      {{ date | date: 'MMM yyyy' }}\n    </button>\n  ",
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    })], NbCalendarNavigationComponent);
    return NbCalendarNavigationComponent;
}();
exports.NbCalendarNavigationComponent = NbCalendarNavigationComponent;
//# sourceMappingURL=calendar-navigation.component.js.map
//# sourceMappingURL=calendar-navigation.component.js.map