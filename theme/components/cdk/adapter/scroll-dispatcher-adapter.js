"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbScrollDispatcherAdapter = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _overlay = require("@angular/cdk/overlay");

var _mapping = require("../overlay/mapping");

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

var NbScrollDispatcherAdapter = /** @class */function (_super) {
    __extends(NbScrollDispatcherAdapter, _super);
    function NbScrollDispatcherAdapter(ngZone, platform, scrollService) {
        var _this = _super.call(this, ngZone, platform) || this;
        _this.scrollService = scrollService;
        return _this;
    }
    NbScrollDispatcherAdapter.prototype.scrolled = function (auditTimeInMs) {
        return this.scrollService.onScroll();
    };
    NbScrollDispatcherAdapter = __decorate([(0, _core.Injectable)(), __metadata("design:paramtypes", [_core.NgZone, _mapping.NbPlatform, _scroll.NbLayoutScrollService])], NbScrollDispatcherAdapter);
    return NbScrollDispatcherAdapter;
}(_overlay.ScrollDispatcher);
exports.NbScrollDispatcherAdapter = NbScrollDispatcherAdapter;
//# sourceMappingURL=scroll-dispatcher-adapter.js.map
//# sourceMappingURL=scroll-dispatcher-adapter.js.map