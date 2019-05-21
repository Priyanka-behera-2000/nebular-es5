"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbScrollStrategyOptions = exports.NbBlockScrollStrategyAdapter = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var i0 = _interopRequireWildcard(_core);

var _overlay = require("@angular/cdk/overlay");

var _scroll = require("../../../services/scroll.service");

var i1 = _interopRequireWildcard(_scroll);

var _theme = require("../../../theme.options");

var i4 = _interopRequireWildcard(_theme);

var _viewportRulerAdapter = require("./viewport-ruler-adapter");

var i3 = _interopRequireWildcard(_viewportRulerAdapter);

var _scrolling = require("@angular/cdk/scrolling");

var i2 = _interopRequireWildcard(_scrolling);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

/**
 * Overrides default block scroll strategy because default strategy blocks scrolling on the body only.
 * But Nebular has its own scrollable container - nb-layout. So, we need to block scrolling in it to.
 * */
var NbBlockScrollStrategyAdapter = /** @class */function (_super) {
    __extends(NbBlockScrollStrategyAdapter, _super);
    function NbBlockScrollStrategyAdapter(document, viewportRuler, scrollService) {
        var _this = _super.call(this, viewportRuler, document) || this;
        _this.scrollService = scrollService;
        return _this;
    }
    NbBlockScrollStrategyAdapter.prototype.enable = function () {
        _super.prototype.enable.call(this);
        this.scrollService.scrollable(false);
    };
    NbBlockScrollStrategyAdapter.prototype.disable = function () {
        _super.prototype.disable.call(this);
        this.scrollService.scrollable(true);
    };
    NbBlockScrollStrategyAdapter = __decorate([(0, _core.Injectable)(), __param(0, (0, _core.Inject)(_theme.NB_DOCUMENT)), __metadata("design:paramtypes", [Object, _viewportRulerAdapter.NbViewportRulerAdapter, _scroll.NbLayoutScrollService])], NbBlockScrollStrategyAdapter);
    return NbBlockScrollStrategyAdapter;
}(_overlay.BlockScrollStrategy);
exports.NbBlockScrollStrategyAdapter = NbBlockScrollStrategyAdapter;

var NbScrollStrategyOptions = /** @class */function (_super) {
    __extends(NbScrollStrategyOptions, _super);
    function NbScrollStrategyOptions(scrollService, scrollDispatcher, viewportRuler, ngZone, document) {
        var _this = _super.call(this, scrollDispatcher, viewportRuler, ngZone, document) || this;
        _this.scrollService = scrollService;
        _this.scrollDispatcher = scrollDispatcher;
        _this.viewportRuler = viewportRuler;
        _this.ngZone = ngZone;
        _this.document = document;
        _this.block = function () {
            return new NbBlockScrollStrategyAdapter(_this.document, _this.viewportRuler, _this.scrollService);
        };
        return _this;
    }
    NbScrollStrategyOptions.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NbScrollStrategyOptions_Factory() {
            return new NbScrollStrategyOptions(i0.ɵɵinject(i1.NbLayoutScrollService), i0.ɵɵinject(i2.ScrollDispatcher), i0.ɵɵinject(i3.NbViewportRulerAdapter), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i4.NB_DOCUMENT));
        }, token: NbScrollStrategyOptions, providedIn: "root" });
    NbScrollStrategyOptions = __decorate([__param(4, (0, _core.Inject)(_theme.NB_DOCUMENT)), __metadata("design:paramtypes", [_scroll.NbLayoutScrollService, _overlay.ScrollDispatcher, _viewportRulerAdapter.NbViewportRulerAdapter, _core.NgZone, Object])], NbScrollStrategyOptions);
    return NbScrollStrategyOptions;
}(_overlay.ScrollStrategyOptions);
exports.NbScrollStrategyOptions = NbScrollStrategyOptions;
//# sourceMappingURL=block-scroll-strategy-adapter.js.map
//# sourceMappingURL=block-scroll-strategy-adapter.js.map