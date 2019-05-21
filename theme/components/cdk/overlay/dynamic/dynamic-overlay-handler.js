"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbDynamicOverlayHandler = exports.NbDynamicOverlayChange = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _overlayTrigger = require("../overlay-trigger");

var _overlayPosition = require("../overlay-position");

var _dynamicOverlay = require("./dynamic-overlay");

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

var NbDynamicOverlayChange = /** @class */function (_super) {
    __extends(NbDynamicOverlayChange, _super);
    function NbDynamicOverlayChange(previousValue, currentValue, firstChange) {
        if (firstChange === void 0) {
            firstChange = false;
        }
        return _super.call(this, previousValue, currentValue, firstChange) || this;
    }
    NbDynamicOverlayChange.prototype.isChanged = function () {
        return this.currentValue !== this.previousValue;
    };
    return NbDynamicOverlayChange;
}(_core.SimpleChange);
exports.NbDynamicOverlayChange = NbDynamicOverlayChange;

var NbDynamicOverlayHandler = /** @class */function () {
    function NbDynamicOverlayHandler(positionBuilder, triggerStrategyBuilder, dynamicOverlayService) {
        this.positionBuilder = positionBuilder;
        this.triggerStrategyBuilder = triggerStrategyBuilder;
        this.dynamicOverlayService = dynamicOverlayService;
        this._context = {};
        this._trigger = _overlayTrigger.NbTrigger.NOOP;
        this._position = _overlayPosition.NbPosition.TOP;
        this._adjustment = _overlayPosition.NbAdjustment.NOOP;
        this._offset = 15;
        this.changes = {};
    }
    NbDynamicOverlayHandler.prototype.host = function (host) {
        this.changes.host = new NbDynamicOverlayChange(this._host, host);
        this._host = host;
        return this;
    };
    NbDynamicOverlayHandler.prototype.trigger = function (trigger) {
        this.changes.trigger = new NbDynamicOverlayChange(this._trigger, trigger);
        this._trigger = trigger;
        return this;
    };
    NbDynamicOverlayHandler.prototype.position = function (position) {
        this.changes.position = new NbDynamicOverlayChange(this._position, position);
        this._position = position;
        return this;
    };
    NbDynamicOverlayHandler.prototype.adjustment = function (adjustment) {
        this.changes.adjustment = new NbDynamicOverlayChange(this._adjustment, adjustment);
        this._adjustment = adjustment;
        return this;
    };
    NbDynamicOverlayHandler.prototype.componentType = function (componentType) {
        this.changes.componentType = new NbDynamicOverlayChange(this._componentType, componentType);
        this._componentType = componentType;
        return this;
    };
    NbDynamicOverlayHandler.prototype.content = function (content) {
        this.changes.content = new NbDynamicOverlayChange(this._content, content);
        this._content = content;
        return this;
    };
    NbDynamicOverlayHandler.prototype.context = function (context) {
        this.changes.context = new NbDynamicOverlayChange(this._context, context);
        this._context = context;
        return this;
    };
    NbDynamicOverlayHandler.prototype.offset = function (offset) {
        this.changes.offset = new NbDynamicOverlayChange(this._offset, offset);
        this._offset = offset;
        return this;
    };
    NbDynamicOverlayHandler.prototype.build = function () {
        if (!this._componentType || !this._host) {
            throw Error("NbDynamicOverlayHandler: at least 'componentType' and 'host' should be\n      passed before building a dynamic overlay.");
        }
        this.dynamicOverlay = this.dynamicOverlayService.create(this._componentType, this._content, this._context, this.createPositionStrategy());
        this.connect();
        this.clearChanges();
        return this.dynamicOverlay;
    };
    NbDynamicOverlayHandler.prototype.rebuild = function () {
        /**
         * we should not throw here
         * as we use rebuilt in lifecycle hooks
         * which it could be called before the build
         * so we just ignore this call
         */
        if (!this.dynamicOverlay) {
            return;
        }
        if (this.isPositionStrategyUpdateRequired()) {
            this.dynamicOverlay.setPositionStrategy(this.createPositionStrategy());
        }
        if (this.isTriggerStrategyUpdateRequired()) {
            this.connect();
        }
        if (this.isContainerRerenderRequired()) {
            this.dynamicOverlay.setContentAndContext(this._content, this._context);
        }
        if (this.isComponentTypeUpdateRequired()) {
            this.dynamicOverlay.setComponent(this._componentType);
        }
        this.clearChanges();
        return this.dynamicOverlay;
    };
    NbDynamicOverlayHandler.prototype.connect = function () {
        if (!this.dynamicOverlay) {
            throw new Error("NbDynamicOverlayHandler: cannot connect to DynamicOverlay\n      as it is not created yet. Call build() first");
        }
        this.disconnect();
        this.subscribeOnTriggers(this.dynamicOverlay);
    };
    NbDynamicOverlayHandler.prototype.disconnect = function () {
        if (this.triggerStrategy) {
            this.triggerStrategy.destroy();
        }
    };
    NbDynamicOverlayHandler.prototype.destroy = function () {
        this.disconnect();
        this.clearChanges();
        if (this.dynamicOverlay) {
            this.dynamicOverlay.dispose();
        }
    };
    NbDynamicOverlayHandler.prototype.createPositionStrategy = function () {
        return this.positionBuilder.connectedTo(this._host).position(this._position).adjustment(this._adjustment).offset(this._offset);
    };
    NbDynamicOverlayHandler.prototype.subscribeOnTriggers = function (dynamicOverlay) {
        this.triggerStrategy = this.triggerStrategyBuilder.trigger(this._trigger).host(this._host.nativeElement).container(function () {
            return dynamicOverlay.getContainer();
        }).build();
        this.triggerStrategy.show$.subscribe(function () {
            return dynamicOverlay.show();
        });
        this.triggerStrategy.hide$.subscribe(function () {
            return dynamicOverlay.hide();
        });
    };
    NbDynamicOverlayHandler.prototype.isContainerRerenderRequired = function () {
        return this.isContentUpdated() || this.isContextUpdated() || this.isPositionStrategyUpdateRequired();
    };
    NbDynamicOverlayHandler.prototype.isPositionStrategyUpdateRequired = function () {
        return this.isAdjustmentUpdated() || this.isPositionUpdated() || this.isOffsetUpdated() || this.isHostUpdated();
    };
    NbDynamicOverlayHandler.prototype.isTriggerStrategyUpdateRequired = function () {
        return this.isTriggerUpdated() || this.isHostUpdated();
    };
    NbDynamicOverlayHandler.prototype.isComponentTypeUpdateRequired = function () {
        return this.isComponentTypeUpdated();
    };
    NbDynamicOverlayHandler.prototype.isComponentTypeUpdated = function () {
        return this.changes.componentType && this.changes.componentType.isChanged();
    };
    NbDynamicOverlayHandler.prototype.isContentUpdated = function () {
        return this.changes.content && this.changes.content.isChanged();
    };
    NbDynamicOverlayHandler.prototype.isContextUpdated = function () {
        return this.changes.context && this.changes.context.isChanged();
    };
    NbDynamicOverlayHandler.prototype.isAdjustmentUpdated = function () {
        return this.changes.adjustment && this.changes.adjustment.isChanged();
    };
    NbDynamicOverlayHandler.prototype.isPositionUpdated = function () {
        return this.changes.position && this.changes.position.isChanged();
    };
    NbDynamicOverlayHandler.prototype.isHostUpdated = function () {
        return this.changes.host && this.changes.host.isChanged();
    };
    NbDynamicOverlayHandler.prototype.isTriggerUpdated = function () {
        return this.changes.trigger && this.changes.trigger.isChanged();
    };
    NbDynamicOverlayHandler.prototype.isOffsetUpdated = function () {
        return this.changes.offset && this.changes.offset.isChanged();
    };
    NbDynamicOverlayHandler.prototype.clearChanges = function () {
        this.changes = {};
    };
    NbDynamicOverlayHandler = __decorate([(0, _core.Injectable)(), __metadata("design:paramtypes", [_overlayPosition.NbPositionBuilderService, _overlayTrigger.NbTriggerStrategyBuilderService, _dynamicOverlay.NbDynamicOverlay])], NbDynamicOverlayHandler);
    return NbDynamicOverlayHandler;
}();
exports.NbDynamicOverlayHandler = NbDynamicOverlayHandler;
//# sourceMappingURL=dynamic-overlay-handler.js.map
//# sourceMappingURL=dynamic-overlay-handler.js.map