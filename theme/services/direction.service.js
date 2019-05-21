"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbLayoutDirectionService = exports.NB_LAYOUT_DIRECTION = exports.NbLayoutDirection = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

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
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};

/**
 * Layout direction.
 * */
var NbLayoutDirection = exports.NbLayoutDirection = undefined;
(function (NbLayoutDirection) {
    NbLayoutDirection["LTR"] = "ltr";
    NbLayoutDirection["RTL"] = "rtl";
})(NbLayoutDirection || (exports.NbLayoutDirection = NbLayoutDirection = {}));
;
/**
 * Layout direction setting injection token.
 * */
var NB_LAYOUT_DIRECTION = exports.NB_LAYOUT_DIRECTION = new _core.InjectionToken('Layout direction');
/**
 * Layout Direction Service.
 * Allows to set or get layout direction and listen to its changes
 */
var NbLayoutDirectionService = /** @class */function () {
    function NbLayoutDirectionService(direction) {
        if (direction === void 0) {
            direction = NbLayoutDirection.LTR;
        }
        this.direction = direction;
        this.$directionChange = new _rxjs.ReplaySubject(1);
        this.setDirection(direction);
    }
    /**
     * Returns true if layout direction set to left to right.
     * @returns boolean.
     * */
    NbLayoutDirectionService.prototype.isLtr = function () {
        return this.direction === NbLayoutDirection.LTR;
    };
    /**
     * Returns true if layout direction set to right to left.
     * @returns boolean.
     * */
    NbLayoutDirectionService.prototype.isRtl = function () {
        return this.direction === NbLayoutDirection.RTL;
    };
    /**
     * Returns current layout direction.
     * @returns NbLayoutDirection.
     * */
    NbLayoutDirectionService.prototype.getDirection = function () {
        return this.direction;
    };
    /**
     * Sets layout direction
     * @param {NbLayoutDirection} direction
     */
    NbLayoutDirectionService.prototype.setDirection = function (direction) {
        this.direction = direction;
        this.$directionChange.next(direction);
    };
    /**
     * Triggered when direction was changed.
     * @returns Observable<NbLayoutDirection>.
     */
    NbLayoutDirectionService.prototype.onDirectionChange = function () {
        return this.$directionChange.pipe((0, _operators.share)());
    };
    NbLayoutDirectionService = __decorate([(0, _core.Injectable)(), __param(0, (0, _core.Optional)()), __param(0, (0, _core.Inject)(NB_LAYOUT_DIRECTION)), __metadata("design:paramtypes", [Object])], NbLayoutDirectionService);
    return NbLayoutDirectionService;
}();
exports.NbLayoutDirectionService = NbLayoutDirectionService;
//# sourceMappingURL=direction.service.js.map
//# sourceMappingURL=direction.service.js.map