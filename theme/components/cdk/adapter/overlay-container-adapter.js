"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbOverlayContainerAdapter = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _mapping = require("../overlay/mapping");

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

/**
 * Provides nb-layout as overlay container.
 * Container has to be cleared when layout destroys.
 * Another way previous version of the container will be used
 * but it isn't inserted in DOM and exists in memory only.
 * This case important only if you switch between multiple layouts.
 * */
var NbOverlayContainerAdapter = /** @class */function (_super) {
    __extends(NbOverlayContainerAdapter, _super);
    function NbOverlayContainerAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbOverlayContainerAdapter.prototype.setContainer = function (container) {
        this.container = container;
    };
    NbOverlayContainerAdapter.prototype.clearContainer = function () {
        this.container = null;
        this._containerElement = null;
    };
    NbOverlayContainerAdapter.prototype._createContainer = function () {
        var container = this._document.createElement('div');
        container.classList.add('cdk-overlay-container');
        this.container.appendChild(container);
        this._containerElement = container;
    };
    NbOverlayContainerAdapter = __decorate([(0, _core.Injectable)()], NbOverlayContainerAdapter);
    return NbOverlayContainerAdapter;
}(_mapping.NbOverlayContainer);
exports.NbOverlayContainerAdapter = NbOverlayContainerAdapter;
//# sourceMappingURL=overlay-container-adapter.js.map
//# sourceMappingURL=overlay-container-adapter.js.map