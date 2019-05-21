"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbLayoutRulerService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _rxjs = require("rxjs");

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Simple helper service to return Layout dimensions
 * Depending of current Layout scroll mode (default or `withScroll` when scroll is moved to an element
 * inside of the layout) corresponding dimensions will be returns  - of `documentElement` in first case and
 * `.scrollable-container` in the second.
 */
var NbLayoutRulerService = /** @class */function () {
    function NbLayoutRulerService() {
        this.contentDimensionsReq$ = new _rxjs.Subject();
    }
    /**
     * Content dimensions
     * @returns {Observable<NbLayoutDimensions>}
     */
    NbLayoutRulerService.prototype.getDimensions = function () {
        var _this = this;
        return _rxjs.Observable.create(function (observer) {
            var listener = new _rxjs.Subject();
            listener.subscribe(observer);
            _this.contentDimensionsReq$.next({ listener: listener });
            return function () {
                return listener.complete();
            };
        });
    };
    /**
     * @private
     * @returns {Subject<any>}
     */
    NbLayoutRulerService.prototype.onGetDimensions = function () {
        return this.contentDimensionsReq$;
    };
    NbLayoutRulerService = __decorate([(0, _core.Injectable)()], NbLayoutRulerService);
    return NbLayoutRulerService;
}();
exports.NbLayoutRulerService = NbLayoutRulerService;
//# sourceMappingURL=ruler.service.js.map
//# sourceMappingURL=ruler.service.js.map