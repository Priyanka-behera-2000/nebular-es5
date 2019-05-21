"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCardBackComponent = exports.NbCardFrontComponent = undefined;

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

/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the front card.
 */
var NbCardFrontComponent = /** @class */function () {
    function NbCardFrontComponent() {}
    NbCardFrontComponent = __decorate([(0, _core.Component)({
        selector: 'nb-card-front',
        template: '<ng-content select="nb-card"></ng-content>'
    })], NbCardFrontComponent);
    return NbCardFrontComponent;
}();
exports.NbCardFrontComponent = NbCardFrontComponent;
/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the back card.
 */

var NbCardBackComponent = /** @class */function () {
    function NbCardBackComponent() {}
    NbCardBackComponent = __decorate([(0, _core.Component)({
        selector: 'nb-card-back',
        template: '<ng-content select="nb-card"></ng-content>'
    })], NbCardBackComponent);
    return NbCardBackComponent;
}();
exports.NbCardBackComponent = NbCardBackComponent;
//# sourceMappingURL=shared.component.js.map
//# sourceMappingURL=shared.component.js.map