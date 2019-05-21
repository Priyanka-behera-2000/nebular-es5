"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbWindowsContainerComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

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

var NbWindowsContainerComponent = /** @class */function () {
    function NbWindowsContainerComponent() {}
    __decorate([(0, _core.ViewChild)('viewContainerRef', { read: _core.ViewContainerRef }), __metadata("design:type", _core.ViewContainerRef)], NbWindowsContainerComponent.prototype, "viewContainerRef", void 0);
    NbWindowsContainerComponent = __decorate([(0, _core.Component)({
        selector: 'nb-windows-container',
        template: "<ng-container #viewContainerRef></ng-container>",
        styles: [":host{display:flex;align-items:flex-end;overflow-x:auto}:host /deep/ nb-window:not(.full-screen){margin:0 2rem} "]
    })], NbWindowsContainerComponent);
    return NbWindowsContainerComponent;
}();
exports.NbWindowsContainerComponent = NbWindowsContainerComponent;
//# sourceMappingURL=windows-container.component.js.map
//# sourceMappingURL=windows-container.component.js.map