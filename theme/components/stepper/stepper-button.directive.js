"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbStepperPreviousDirective = exports.NbStepperNextDirective = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _stepper = require("./stepper.component");

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

var NbStepperNextDirective = /** @class */function () {
    function NbStepperNextDirective(stepper) {
        this.stepper = stepper;
        this.type = 'submit';
    }
    NbStepperNextDirective.prototype.onClick = function () {
        this.stepper.next();
    };
    __decorate([(0, _core.Input)(), (0, _core.HostBinding)('attr.type'), __metadata("design:type", String)], NbStepperNextDirective.prototype, "type", void 0);
    __decorate([(0, _core.HostListener)('click'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], NbStepperNextDirective.prototype, "onClick", null);
    NbStepperNextDirective = __decorate([(0, _core.Directive)({
        selector: 'button[nbStepperNext]'
    }), __metadata("design:paramtypes", [_stepper.NbStepperComponent])], NbStepperNextDirective);
    return NbStepperNextDirective;
}();
exports.NbStepperNextDirective = NbStepperNextDirective;

var NbStepperPreviousDirective = /** @class */function () {
    function NbStepperPreviousDirective(stepper) {
        this.stepper = stepper;
        this.type = 'button';
    }
    NbStepperPreviousDirective.prototype.onClick = function () {
        this.stepper.previous();
    };
    __decorate([(0, _core.Input)(), (0, _core.HostBinding)('attr.type'), __metadata("design:type", String)], NbStepperPreviousDirective.prototype, "type", void 0);
    __decorate([(0, _core.HostListener)('click'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], NbStepperPreviousDirective.prototype, "onClick", null);
    NbStepperPreviousDirective = __decorate([(0, _core.Directive)({
        selector: 'button[nbStepperPrevious]'
    }), __metadata("design:paramtypes", [_stepper.NbStepperComponent])], NbStepperPreviousDirective);
    return NbStepperPreviousDirective;
}();
exports.NbStepperPreviousDirective = NbStepperPreviousDirective;
//# sourceMappingURL=stepper-button.directive.js.map
//# sourceMappingURL=stepper-button.directive.js.map