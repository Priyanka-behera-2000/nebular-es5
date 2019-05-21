"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbRestoreScrollTopHelper = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _router = require("@angular/router");

var _operators = require("rxjs/operators");

var _urlMatchingHelpers = require("../menu/url-matching-helpers");

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

/**
 * This service determines whether we should scroll the layout back to top.
 * This occurs when the page is changed, so when current url PATH is not equal to the previous one.
 *
 *  TODO: this is most likely a temporary solutions as recently Angular introduces ViewportScroll
 *  and scroll restoration process
 */
var NbRestoreScrollTopHelper = /** @class */function () {
    function NbRestoreScrollTopHelper(router) {
        this.router = router;
    }
    NbRestoreScrollTopHelper.prototype.shouldRestore = function () {
        var _this = this;
        return this.router.events.pipe((0, _operators.startWith)(null), (0, _operators.filter)(function (event) {
            return event === null || event instanceof _router.NavigationEnd;
        }), (0, _operators.pairwise)(), (0, _operators.map)(function (_a) {
            var prev = _a[0],
                current = _a[1];
            return _this.pageChanged(prev, current);
        }), (0, _operators.filter)(function (res) {
            return !!res;
        }));
    };
    NbRestoreScrollTopHelper.prototype.pageChanged = function (prev, current) {
        return !prev || (0, _urlMatchingHelpers.getPathPartOfUrl)(prev.url) !== (0, _urlMatchingHelpers.getPathPartOfUrl)(current.url);
    };
    NbRestoreScrollTopHelper = __decorate([(0, _core.Injectable)(), __metadata("design:paramtypes", [_router.Router])], NbRestoreScrollTopHelper);
    return NbRestoreScrollTopHelper;
}();
exports.NbRestoreScrollTopHelper = NbRestoreScrollTopHelper;
//# sourceMappingURL=restore-scroll-top.service.js.map
//# sourceMappingURL=restore-scroll-top.service.js.map