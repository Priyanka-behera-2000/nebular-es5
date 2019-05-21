"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbLayoutScrollService = undefined;

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

/**
 * Layout scroll service. Provides information about current scroll position,
 * as well as methods to update position of the scroll.
 *
 * The reason we added this service is that in Nebular there are two scroll modes:
 * - the default mode when scroll is on body
 * - and the `withScroll` mode, when scroll is removed from the body and moved to an element inside of the
 * `nb-layout` component
 */
var NbLayoutScrollService = /** @class */function () {
    function NbLayoutScrollService() {
        this.scrollPositionReq$ = new _rxjs.Subject();
        this.manualScroll$ = new _rxjs.Subject();
        this.scroll$ = new _rxjs.Subject();
        this.scrollable$ = new _rxjs.Subject();
    }
    /**
     * Returns scroll position
     *
     * @returns {Observable<NbScrollPosition>}
     */
    NbLayoutScrollService.prototype.getPosition = function () {
        var _this = this;
        return _rxjs.Observable.create(function (observer) {
            var listener = new _rxjs.Subject();
            listener.subscribe(observer);
            _this.scrollPositionReq$.next({ listener: listener });
            return function () {
                return listener.complete();
            };
        });
    };
    /**
     * Sets scroll position
     *
     * @param {number} x
     * @param {number} y
     */
    NbLayoutScrollService.prototype.scrollTo = function (x, y) {
        if (x === void 0) {
            x = null;
        }
        if (y === void 0) {
            y = null;
        }
        this.manualScroll$.next({ x: x, y: y });
    };
    /**
     * Returns a stream of scroll events
     *
     * @returns {Observable<any>}
     */
    NbLayoutScrollService.prototype.onScroll = function () {
        return this.scroll$.pipe((0, _operators.share)());
    };
    /**
     * @private
     * @returns Observable<NbScrollPosition>.
     */
    NbLayoutScrollService.prototype.onManualScroll = function () {
        return this.manualScroll$.pipe((0, _operators.share)());
    };
    /**
     * @private
     * @returns {Subject<any>}
     */
    NbLayoutScrollService.prototype.onGetPosition = function () {
        return this.scrollPositionReq$;
    };
    NbLayoutScrollService.prototype.onScrollableChange = function () {
        return this.scrollable$.pipe((0, _operators.share)());
    };
    /**
     * @private
     * @param {any} event
     */
    NbLayoutScrollService.prototype.fireScrollChange = function (event) {
        this.scroll$.next(event);
    };
    NbLayoutScrollService.prototype.scrollable = function (scrollable) {
        this.scrollable$.next(scrollable);
    };
    NbLayoutScrollService = __decorate([(0, _core.Injectable)()], NbLayoutScrollService);
    return NbLayoutScrollService;
}();
exports.NbLayoutScrollService = NbLayoutScrollService;
//# sourceMappingURL=scroll.service.js.map
//# sourceMappingURL=scroll.service.js.map