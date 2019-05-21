"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbViewportRulerAdapter = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _overlay = require("@angular/cdk/overlay");

var _operators = require("rxjs/operators");

var _mapping = require("../overlay/mapping");

var _ruler = require("../../../services/ruler.service");

var _scroll = require("../../../services/scroll.service");

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

var NbViewportRulerAdapter = /** @class */function (_super) {
    __extends(NbViewportRulerAdapter, _super);
    function NbViewportRulerAdapter(platform, ngZone, ruler, scroll) {
        var _this = _super.call(this, platform, ngZone) || this;
        _this.ruler = ruler;
        _this.scroll = scroll;
        return _this;
    }
    NbViewportRulerAdapter.prototype.getViewportSize = function () {
        var res;
        /*
        * getDimensions call is really synchronous operation.
        * And we have to conform with the interface of the original service.
        * */
        this.ruler.getDimensions().pipe((0, _operators.map)(function (dimensions) {
            return { width: dimensions.clientWidth, height: dimensions.clientHeight };
        })).subscribe(function (rect) {
            return res = rect;
        });
        return res;
    };
    NbViewportRulerAdapter.prototype.getViewportScrollPosition = function () {
        var res;
        /*
        * getPosition call is really synchronous operation.
        * And we have to conform with the interface of the original service.
        * */
        this.scroll.getPosition().pipe((0, _operators.map)(function (position) {
            return { top: position.y, left: position.x };
        })).subscribe(function (position) {
            return res = position;
        });
        return res;
    };
    NbViewportRulerAdapter = __decorate([(0, _core.Injectable)(), __metadata("design:paramtypes", [_mapping.NbPlatform, _core.NgZone, _ruler.NbLayoutRulerService, _scroll.NbLayoutScrollService])], NbViewportRulerAdapter);
    return NbViewportRulerAdapter;
}(_overlay.ViewportRuler);
exports.NbViewportRulerAdapter = NbViewportRulerAdapter;
//# sourceMappingURL=viewport-ruler-adapter.js.map
//# sourceMappingURL=viewport-ruler-adapter.js.map