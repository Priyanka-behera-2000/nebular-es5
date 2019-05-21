"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbPositionBuilderService = exports.NbGlobalPositionStrategy = exports.NbAdjustableConnectedPositionStrategy = exports.NbPosition = exports.NbAdjustment = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _operators = require("rxjs/operators");

var _theme = require("../../../theme.options");

var _mapping = require("./mapping");

var _overlayContainerAdapter = require("../adapter/overlay-container-adapter");

var _viewportRulerAdapter = require("../adapter/viewport-ruler-adapter");

var _positionHelper = require("./position-helper");

var _overlay = require("@angular/cdk/overlay");

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
var _a;
var NbAdjustment = exports.NbAdjustment = undefined;
(function (NbAdjustment) {
    NbAdjustment["NOOP"] = "noop";
    NbAdjustment["CLOCKWISE"] = "clockwise";
    NbAdjustment["COUNTERCLOCKWISE"] = "counterclockwise";
    NbAdjustment["VERTICAL"] = "vertical";
    NbAdjustment["HORIZONTAL"] = "horizontal";
})(NbAdjustment || (exports.NbAdjustment = NbAdjustment = {}));
var NbPosition = exports.NbPosition = undefined;
(function (NbPosition) {
    NbPosition["TOP"] = "top";
    NbPosition["BOTTOM"] = "bottom";
    NbPosition["LEFT"] = "left";
    NbPosition["RIGHT"] = "right";
    NbPosition["START"] = "start";
    NbPosition["END"] = "end";
})(NbPosition || (exports.NbPosition = NbPosition = {}));
var POSITIONS = (_a = {}, _a[NbPosition.RIGHT] = function (offset) {
    return { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center', offsetX: offset };
}, _a[NbPosition.BOTTOM] = function (offset) {
    return { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: offset };
}, _a[NbPosition.LEFT] = function (offset) {
    return { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center', offsetX: -offset };
}, _a[NbPosition.TOP] = function (offset) {
    return { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetY: -offset };
}, _a);
var COUNTER_CLOCKWISE_POSITIONS = [NbPosition.TOP, NbPosition.LEFT, NbPosition.BOTTOM, NbPosition.RIGHT];
var NOOP_POSITIONS = [NbPosition.TOP, NbPosition.BOTTOM, NbPosition.LEFT, NbPosition.RIGHT];
var CLOCKWISE_POSITIONS = [NbPosition.TOP, NbPosition.RIGHT, NbPosition.BOTTOM, NbPosition.LEFT];
var VERTICAL_POSITIONS = [NbPosition.BOTTOM, NbPosition.TOP];
var HORIZONTAL_POSITIONS = [NbPosition.START, NbPosition.END];
function comparePositions(p1, p2) {
    return p1.originX === p2.originX && p1.originY === p2.originY && p1.overlayX === p2.overlayX && p1.overlayY === p2.overlayY;
}
/**
 * The main idea of the adjustable connected strategy is to provide predefined set of positions for your overlay.
 * You have to provide adjustment and appropriate strategy will be chosen in runtime.
 * */
var NbAdjustableConnectedPositionStrategy = /** @class */function (_super) {
    __extends(NbAdjustableConnectedPositionStrategy, _super);
    function NbAdjustableConnectedPositionStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._offset = 15;
        _this.positionChange = _this.positionChanges.pipe((0, _operators.map)(function (positionChange) {
            return positionChange.connectionPair;
        }), (0, _operators.map)(function (connectionPair) {
            return _this.appliedPositions.find(function (_a) {
                var connectedPosition = _a.connectedPosition;
                return comparePositions(connectedPosition, connectionPair);
            }).key;
        }));
        return _this;
    }
    NbAdjustableConnectedPositionStrategy.prototype.attach = function (overlayRef) {
        /**
         * We have to apply positions before attach because super.attach() validates positions and crashes app
         * if no positions provided.
         * */
        this.applyPositions();
        _super.prototype.attach.call(this, overlayRef);
    };
    NbAdjustableConnectedPositionStrategy.prototype.apply = function () {
        this.applyPositions();
        _super.prototype.apply.call(this);
    };
    NbAdjustableConnectedPositionStrategy.prototype.position = function (position) {
        this._position = position;
        return this;
    };
    NbAdjustableConnectedPositionStrategy.prototype.adjustment = function (adjustment) {
        this._adjustment = adjustment;
        return this;
    };
    NbAdjustableConnectedPositionStrategy.prototype.offset = function (offset) {
        this._offset = offset;
        return this;
    };
    NbAdjustableConnectedPositionStrategy.prototype.applyPositions = function () {
        var positions = this.createPositions();
        this.persistChosenPositions(positions);
        this.withPositions(this.appliedPositions.map(function (_a) {
            var connectedPosition = _a.connectedPosition;
            return connectedPosition;
        }));
    };
    NbAdjustableConnectedPositionStrategy.prototype.createPositions = function () {
        var _this = this;
        switch (this._adjustment) {
            case NbAdjustment.NOOP:
                return NOOP_POSITIONS.filter(function (position) {
                    return _this._position === position;
                });
            case NbAdjustment.CLOCKWISE:
                return this.reorderPreferredPositions(CLOCKWISE_POSITIONS);
            case NbAdjustment.COUNTERCLOCKWISE:
                return this.reorderPreferredPositions(COUNTER_CLOCKWISE_POSITIONS);
            case NbAdjustment.HORIZONTAL:
                return this.reorderPreferredPositions(HORIZONTAL_POSITIONS);
            case NbAdjustment.VERTICAL:
                return this.reorderPreferredPositions(VERTICAL_POSITIONS);
        }
    };
    NbAdjustableConnectedPositionStrategy.prototype.persistChosenPositions = function (positions) {
        var _this = this;
        this.appliedPositions = positions.map(function (position) {
            return {
                key: position,
                connectedPosition: POSITIONS[position](_this._offset)
            };
        });
    };
    NbAdjustableConnectedPositionStrategy.prototype.reorderPreferredPositions = function (positions) {
        var cpy = positions.slice();
        var startIndex = positions.indexOf(this._position);
        var start = cpy.splice(startIndex);
        return start.concat.apply(start, cpy);
    };
    return NbAdjustableConnectedPositionStrategy;
}(_mapping.NbFlexibleConnectedPositionStrategy);
exports.NbAdjustableConnectedPositionStrategy = NbAdjustableConnectedPositionStrategy;

var NbGlobalPositionStrategy = /** @class */function (_super) {
    __extends(NbGlobalPositionStrategy, _super);
    function NbGlobalPositionStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbGlobalPositionStrategy.prototype.position = function (position) {
        switch (position) {
            case _positionHelper.NbGlobalLogicalPosition.TOP_START:
                return this.top().left();
            case _positionHelper.NbGlobalLogicalPosition.TOP_END:
                return this.top().right();
            case _positionHelper.NbGlobalLogicalPosition.BOTTOM_START:
                return this.bottom().left();
            case _positionHelper.NbGlobalLogicalPosition.BOTTOM_END:
                return this.bottom().right();
        }
    };
    return NbGlobalPositionStrategy;
}(_overlay.GlobalPositionStrategy);
exports.NbGlobalPositionStrategy = NbGlobalPositionStrategy;

var NbPositionBuilderService = /** @class */function () {
    function NbPositionBuilderService(document, viewportRuler, platform, positionBuilder, overlayContainer) {
        this.document = document;
        this.viewportRuler = viewportRuler;
        this.platform = platform;
        this.positionBuilder = positionBuilder;
        this.overlayContainer = overlayContainer;
    }
    NbPositionBuilderService.prototype.global = function () {
        return new NbGlobalPositionStrategy();
    };
    NbPositionBuilderService.prototype.connectedTo = function (elementRef) {
        return new NbAdjustableConnectedPositionStrategy(elementRef, this.viewportRuler, this.document, this.platform, this.overlayContainer).withFlexibleDimensions(false).withPush(false);
    };
    NbPositionBuilderService = __decorate([(0, _core.Injectable)(), __param(0, (0, _core.Inject)(_theme.NB_DOCUMENT)), __metadata("design:paramtypes", [Object, _viewportRulerAdapter.NbViewportRulerAdapter, _mapping.NbPlatform, _mapping.NbOverlayPositionBuilder, _overlayContainerAdapter.NbOverlayContainerAdapter])], NbPositionBuilderService);
    return NbPositionBuilderService;
}();
exports.NbPositionBuilderService = NbPositionBuilderService;
//# sourceMappingURL=overlay-position.js.map
//# sourceMappingURL=overlay-position.js.map