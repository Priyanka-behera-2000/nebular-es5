"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbListPageTrackerDirective = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _operators = require("rxjs/operators");

require("intersection-observer");

var _list = require("./list.component");

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
 * List pager directive
 *
 * Directive allows you to determine page of currently viewing items.
 *
 */
var NbListPageTrackerDirective = /** @class */function () {
    function NbListPageTrackerDirective() {
        var _this = this;
        this.alive = true;
        /**
         * Page to start counting with.
         */
        this.startPage = 1;
        /**
         * Emits when another page become visible.
         */
        this.pageChange = new _core.EventEmitter();
        this.observer = new IntersectionObserver(function (entries) {
            return _this.checkForPageChange(entries);
        }, { threshold: 0.5 });
    }
    NbListPageTrackerDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.listItems && this.listItems.length) {
            this.observeItems();
        }
        this.listItems.changes.pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        })).subscribe(function () {
            return _this.observeItems();
        });
    };
    NbListPageTrackerDirective.prototype.ngOnDestroy = function () {
        this.observer.disconnect && this.observer.disconnect();
    };
    NbListPageTrackerDirective.prototype.observeItems = function () {
        var _this = this;
        this.listItems.forEach(function (i) {
            return _this.observer.observe(i.nativeElement);
        });
    };
    NbListPageTrackerDirective.prototype.checkForPageChange = function (entries) {
        var mostVisiblePage = this.findMostVisiblePage(entries);
        if (mostVisiblePage && this.currentPage !== mostVisiblePage) {
            this.currentPage = mostVisiblePage;
            this.pageChange.emit(this.currentPage);
        }
    };
    NbListPageTrackerDirective.prototype.findMostVisiblePage = function (entries) {
        var intersectionRatioByPage = new Map();
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            if (entry.intersectionRatio < 0.5) {
                continue;
            }
            var elementIndex = this.elementIndex(entry.target);
            if (elementIndex === -1) {
                continue;
            }
            var page = this.startPage + Math.floor(elementIndex / this.pageSize);
            var ratio = entry.intersectionRatio;
            if (intersectionRatioByPage.has(page)) {
                ratio += intersectionRatioByPage.get(page);
            }
            intersectionRatioByPage.set(page, ratio);
        }
        var maxRatio = 0;
        var mostVisiblePage;
        intersectionRatioByPage.forEach(function (ratio, page) {
            if (ratio > maxRatio) {
                maxRatio = ratio;
                mostVisiblePage = page;
            }
        });
        return mostVisiblePage;
    };
    NbListPageTrackerDirective.prototype.elementIndex = function (element) {
        return element.parentElement && element.parentElement.children ? Array.from(element.parentElement.children).indexOf(element) : -1;
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", Number)], NbListPageTrackerDirective.prototype, "pageSize", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Number)], NbListPageTrackerDirective.prototype, "startPage", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", Object)], NbListPageTrackerDirective.prototype, "pageChange", void 0);
    __decorate([(0, _core.ContentChildren)(_list.NbListItemComponent, { read: _core.ElementRef }), __metadata("design:type", _core.QueryList)], NbListPageTrackerDirective.prototype, "listItems", void 0);
    NbListPageTrackerDirective = __decorate([(0, _core.Directive)({
        selector: '[nbListPageTracker]'
    }), __metadata("design:paramtypes", [])], NbListPageTrackerDirective);
    return NbListPageTrackerDirective;
}();
exports.NbListPageTrackerDirective = NbListPageTrackerDirective;
//# sourceMappingURL=list-page-tracker.directive.js.map
//# sourceMappingURL=list-page-tracker.directive.js.map