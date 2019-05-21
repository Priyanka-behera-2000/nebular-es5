"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbTriggerStrategyBuilderService = exports.NbNoopTriggerStrategy = exports.NbFocusTriggerStrategy = exports.NbHintTriggerStrategy = exports.NbHoverTriggerStrategy = exports.NbClickTriggerStrategy = exports.NbTriggerStrategyBase = exports.NbTrigger = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _theme = require("../../../theme.options");

var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
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
var NbTrigger = exports.NbTrigger = undefined;
(function (NbTrigger) {
    NbTrigger["NOOP"] = "noop";
    NbTrigger["CLICK"] = "click";
    NbTrigger["HOVER"] = "hover";
    NbTrigger["HINT"] = "hint";
    NbTrigger["FOCUS"] = "focus";
})(NbTrigger || (exports.NbTrigger = NbTrigger = {}));
/**
 * TODO maybe we have to use renderer.listen instead of observableFromEvent?
 * Renderer provides capability use it in service worker, ssr and so on.
 * */
var NbTriggerStrategyBase = /** @class */function () {
    function NbTriggerStrategyBase(document, host, container) {
        this.document = document;
        this.host = host;
        this.container = container;
        this.destroyed$ = new _rxjs.Subject();
    }
    NbTriggerStrategyBase.prototype.destroy = function () {
        this.destroyed$.next();
    };
    NbTriggerStrategyBase.prototype.isNotOnHostOrContainer = function (event) {
        return !this.isOnHost(event) && !this.isOnContainer(event);
    };
    NbTriggerStrategyBase.prototype.isOnHostOrContainer = function (event) {
        return this.isOnHost(event) || this.isOnContainer(event);
    };
    NbTriggerStrategyBase.prototype.isOnHost = function (_a) {
        var target = _a.target;
        return this.host.contains(target);
    };
    NbTriggerStrategyBase.prototype.isOnContainer = function (_a) {
        var target = _a.target;
        return this.container() && this.container().location.nativeElement.contains(target);
    };
    return NbTriggerStrategyBase;
}();
exports.NbTriggerStrategyBase = NbTriggerStrategyBase;
/**
 * Creates show and hide event streams.
 * Fires toggle event when the click was performed on the host element.
 * Fires close event when the click was performed on the document but
 * not on the host or container.
 * */

var NbClickTriggerStrategy = /** @class */function (_super) {
    __extends(NbClickTriggerStrategy, _super);
    function NbClickTriggerStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // since we should track click for both SHOW and HIDE event we firstly need to track the click and the state
        // of the container and then later on decide should we hide it or show
        // if we track the click & state separately this will case a behavior when the container is getting shown
        // and then hidden right away
        _this.click$ = (0, _rxjs.fromEvent)(_this.document, 'click').pipe((0, _operators.map)(function (event) {
            return [!_this.container() && _this.isOnHost(event), event];
        }), (0, _operators.share)(), (0, _operators.takeUntil)(_this.destroyed$));
        _this.show$ = _this.click$.pipe((0, _operators.filter)(function (_a) {
            var shouldShow = _a[0];
            return shouldShow;
        }), (0, _operators.map)(function (_a) {
            var event = _a[1];
            return event;
        }), (0, _operators.takeUntil)(_this.destroyed$));
        _this.hide$ = _this.click$.pipe((0, _operators.filter)(function (_a) {
            var shouldShow = _a[0],
                event = _a[1];
            return !shouldShow && !_this.isOnContainer(event);
        }), (0, _operators.map)(function (_a) {
            var event = _a[1];
            return event;
        }), (0, _operators.takeUntil)(_this.destroyed$));
        return _this;
    }
    return NbClickTriggerStrategy;
}(NbTriggerStrategyBase);
exports.NbClickTriggerStrategy = NbClickTriggerStrategy;
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element and stops out of the host and popover container.
 * */

var NbHoverTriggerStrategy = /** @class */function (_super) {
    __extends(NbHoverTriggerStrategy, _super);
    function NbHoverTriggerStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.show$ = (0, _rxjs.fromEvent)(_this.host, 'mouseenter').pipe((0, _operators.filter)(function () {
            return !_this.container();
        }), (0, _operators.delay)(100), (0, _operators.takeUntil)((0, _rxjs.merge)((0, _rxjs.fromEvent)(_this.host, 'mouseleave'), _this.destroyed$)), (0, _operators.repeat)());
        _this.hide$ = (0, _rxjs.fromEvent)(_this.host, 'mouseleave').pipe((0, _operators.switchMap)(function () {
            return (0, _rxjs.fromEvent)(_this.document, 'mousemove').pipe((0, _operators.debounceTime)(100), (0, _operators.takeWhile)(function () {
                return !!_this.container();
            }), (0, _operators.filter)(function (event) {
                return _this.isNotOnHostOrContainer(event);
            }));
        }), (0, _operators.takeUntil)(_this.destroyed$));
        return _this;
    }
    return NbHoverTriggerStrategy;
}(NbTriggerStrategyBase);
exports.NbHoverTriggerStrategy = NbHoverTriggerStrategy;
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element.
 * */

var NbHintTriggerStrategy = /** @class */function (_super) {
    __extends(NbHintTriggerStrategy, _super);
    function NbHintTriggerStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.show$ = (0, _rxjs.fromEvent)(_this.host, 'mouseenter').pipe((0, _operators.delay)(100), (0, _operators.takeUntil)((0, _rxjs.merge)((0, _rxjs.fromEvent)(_this.host, 'mouseleave'), _this.destroyed$)),
        // this `delay & takeUntil & repeat` operators combination is a synonym for `conditional debounce`
        // meaning that if one event occurs in some time after the initial one we won't react to it
        (0, _operators.repeat)());
        _this.hide$ = (0, _rxjs.fromEvent)(_this.host, 'mouseleave').pipe((0, _operators.takeUntil)(_this.destroyed$));
        return _this;
    }
    return NbHintTriggerStrategy;
}(NbTriggerStrategyBase);
exports.NbHintTriggerStrategy = NbHintTriggerStrategy;
/**
 * Creates show and hide event streams.
 * Fires open event when a focus is on the host element and stay over at least 100 milliseconds.
 * Fires close event when the focus leaves the host element.
 * */

var NbFocusTriggerStrategy = /** @class */function (_super) {
    __extends(NbFocusTriggerStrategy, _super);
    function NbFocusTriggerStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.focusOut$ = (0, _rxjs.fromEvent)(_this.host, 'focusout').pipe((0, _operators.switchMap)(function () {
            return (0, _rxjs.fromEvent)(_this.document, 'focusin').pipe((0, _operators.takeWhile)(function () {
                return !!_this.container();
            }), (0, _operators.filter)(function (event) {
                return _this.isNotOnHostOrContainer(event);
            }));
        }), (0, _operators.takeUntil)(_this.destroyed$));
        _this.clickIn$ = (0, _rxjs.fromEvent)(_this.host, 'click').pipe((0, _operators.filter)(function () {
            return !_this.container();
        }), (0, _operators.takeUntil)(_this.destroyed$));
        _this.clickOut$ = (0, _rxjs.fromEvent)(_this.document, 'click').pipe((0, _operators.filter)(function () {
            return !!_this.container();
        }), (0, _operators.filter)(function (event) {
            return _this.isNotOnHostOrContainer(event);
        }), (0, _operators.takeUntil)(_this.destroyed$));
        _this.tabKeyPress$ = (0, _rxjs.fromEvent)(_this.document, 'keydown').pipe((0, _operators.filter)(function (event) {
            return event.keyCode === 9;
        }), (0, _operators.filter)(function () {
            return !!_this.container();
        }), (0, _operators.takeUntil)(_this.destroyed$));
        _this.show$ = (0, _rxjs.merge)((0, _rxjs.fromEvent)(_this.host, 'focusin'), _this.clickIn$).pipe((0, _operators.filter)(function () {
            return !_this.container();
        }), (0, _operators.debounceTime)(100), (0, _operators.takeUntil)((0, _rxjs.merge)((0, _rxjs.fromEvent)(_this.host, 'focusout'), _this.destroyed$)), (0, _operators.repeat)());
        _this.hide$ = (0, _rxjs.merge)(_this.focusOut$, _this.tabKeyPress$, _this.clickOut$).pipe((0, _operators.takeUntil)(_this.destroyed$));
        return _this;
    }
    return NbFocusTriggerStrategy;
}(NbTriggerStrategyBase);
exports.NbFocusTriggerStrategy = NbFocusTriggerStrategy;
/**
 * Creates empty show and hide event streams.
 * */

var NbNoopTriggerStrategy = /** @class */function (_super) {
    __extends(NbNoopTriggerStrategy, _super);
    function NbNoopTriggerStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.show$ = _rxjs.EMPTY;
        _this.hide$ = _rxjs.EMPTY;
        return _this;
    }
    return NbNoopTriggerStrategy;
}(NbTriggerStrategyBase);
exports.NbNoopTriggerStrategy = NbNoopTriggerStrategy;

var NbTriggerStrategyBuilderService = /** @class */function () {
    function NbTriggerStrategyBuilderService(_document) {
        this._document = _document;
    }
    NbTriggerStrategyBuilderService.prototype.trigger = function (trigger) {
        this._trigger = trigger;
        return this;
    };
    NbTriggerStrategyBuilderService.prototype.host = function (host) {
        this._host = host;
        return this;
    };
    NbTriggerStrategyBuilderService.prototype.container = function (container) {
        this._container = container;
        return this;
    };
    NbTriggerStrategyBuilderService.prototype.build = function () {
        switch (this._trigger) {
            case NbTrigger.CLICK:
                return new NbClickTriggerStrategy(this._document, this._host, this._container);
            case NbTrigger.HINT:
                return new NbHintTriggerStrategy(this._document, this._host, this._container);
            case NbTrigger.HOVER:
                return new NbHoverTriggerStrategy(this._document, this._host, this._container);
            case NbTrigger.FOCUS:
                return new NbFocusTriggerStrategy(this._document, this._host, this._container);
            case NbTrigger.NOOP:
                return new NbNoopTriggerStrategy(this._document, this._host, this._container);
            default:
                throw new Error('Trigger have to be provided');
        }
    };
    NbTriggerStrategyBuilderService = __decorate([(0, _core.Injectable)(), __param(0, (0, _core.Inject)(_theme.NB_DOCUMENT)), __metadata("design:paramtypes", [Object])], NbTriggerStrategyBuilderService);
    return NbTriggerStrategyBuilderService;
}();
exports.NbTriggerStrategyBuilderService = NbTriggerStrategyBuilderService;
//# sourceMappingURL=overlay-trigger.js.map
//# sourceMappingURL=overlay-trigger.js.map