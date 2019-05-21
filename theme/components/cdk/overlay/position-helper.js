"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbPositionHelper = exports.NbGlobalPhysicalPosition = exports.NbGlobalLogicalPosition = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _direction = require("../../../services/direction.service");

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
var NbGlobalLogicalPosition = exports.NbGlobalLogicalPosition = undefined;
(function (NbGlobalLogicalPosition) {
    NbGlobalLogicalPosition["TOP_START"] = "top-start";
    NbGlobalLogicalPosition["TOP_END"] = "top-end";
    NbGlobalLogicalPosition["BOTTOM_START"] = "bottom-start";
    NbGlobalLogicalPosition["BOTTOM_END"] = "bottom-end";
})(NbGlobalLogicalPosition || (exports.NbGlobalLogicalPosition = NbGlobalLogicalPosition = {}));
var NbGlobalPhysicalPosition = exports.NbGlobalPhysicalPosition = undefined;
(function (NbGlobalPhysicalPosition) {
    NbGlobalPhysicalPosition["TOP_RIGHT"] = "top-right";
    NbGlobalPhysicalPosition["TOP_LEFT"] = "top-left";
    NbGlobalPhysicalPosition["BOTTOM_RIGHT"] = "bottom-right";
    NbGlobalPhysicalPosition["BOTTOM_LEFT"] = "bottom-left";
})(NbGlobalPhysicalPosition || (exports.NbGlobalPhysicalPosition = NbGlobalPhysicalPosition = {}));
var NbPositionHelper = /** @class */function () {
    function NbPositionHelper(layoutDirection) {
        this.layoutDirection = layoutDirection;
    }
    NbPositionHelper.prototype.toLogicalPosition = function (position) {
        if (Object.values(NbGlobalLogicalPosition).includes(position)) {
            return position;
        }
        if (this.layoutDirection.isLtr()) {
            return this.toLogicalPositionWhenLtr(position);
        } else {
            return this.toLogicalPositionWhenRtl(position);
        }
    };
    NbPositionHelper.prototype.toPhysicalPosition = function (position) {
        if (Object.values(NbGlobalPhysicalPosition).includes(position)) {
            return position;
        }
        if (this.layoutDirection.isLtr()) {
            return this.toPhysicalPositionWhenLtr(position);
        } else {
            return this.toPhysicalPositionWhenRtl(position);
        }
    };
    NbPositionHelper.prototype.isTopPosition = function (position) {
        var logicalPosition = this.toLogicalPosition(position);
        return logicalPosition === NbGlobalLogicalPosition.TOP_END || logicalPosition === NbGlobalLogicalPosition.TOP_START;
    };
    NbPositionHelper.prototype.isRightPosition = function (position) {
        var physicalPosition = this.toPhysicalPosition(position);
        return physicalPosition === NbGlobalPhysicalPosition.TOP_RIGHT || physicalPosition === NbGlobalPhysicalPosition.BOTTOM_RIGHT;
    };
    NbPositionHelper.prototype.toLogicalPositionWhenLtr = function (position) {
        switch (position) {
            case NbGlobalPhysicalPosition.TOP_RIGHT:
                return NbGlobalLogicalPosition.TOP_END;
            case NbGlobalPhysicalPosition.TOP_LEFT:
                return NbGlobalLogicalPosition.TOP_START;
            case NbGlobalPhysicalPosition.BOTTOM_RIGHT:
                return NbGlobalLogicalPosition.BOTTOM_END;
            case NbGlobalPhysicalPosition.BOTTOM_LEFT:
                return NbGlobalLogicalPosition.BOTTOM_START;
        }
    };
    NbPositionHelper.prototype.toLogicalPositionWhenRtl = function (position) {
        switch (position) {
            case NbGlobalPhysicalPosition.TOP_RIGHT:
                return NbGlobalLogicalPosition.TOP_START;
            case NbGlobalPhysicalPosition.TOP_LEFT:
                return NbGlobalLogicalPosition.TOP_END;
            case NbGlobalPhysicalPosition.BOTTOM_RIGHT:
                return NbGlobalLogicalPosition.BOTTOM_START;
            case NbGlobalPhysicalPosition.BOTTOM_LEFT:
                return NbGlobalLogicalPosition.BOTTOM_END;
        }
    };
    NbPositionHelper.prototype.toPhysicalPositionWhenLtr = function (position) {
        switch (position) {
            case NbGlobalLogicalPosition.TOP_START:
                return NbGlobalPhysicalPosition.TOP_LEFT;
            case NbGlobalLogicalPosition.TOP_END:
                return NbGlobalPhysicalPosition.TOP_RIGHT;
            case NbGlobalLogicalPosition.BOTTOM_START:
                return NbGlobalPhysicalPosition.BOTTOM_LEFT;
            case NbGlobalLogicalPosition.BOTTOM_END:
                return NbGlobalPhysicalPosition.BOTTOM_RIGHT;
        }
    };
    NbPositionHelper.prototype.toPhysicalPositionWhenRtl = function (position) {
        switch (position) {
            case NbGlobalLogicalPosition.TOP_START:
                return NbGlobalPhysicalPosition.TOP_RIGHT;
            case NbGlobalLogicalPosition.TOP_END:
                return NbGlobalPhysicalPosition.TOP_LEFT;
            case NbGlobalLogicalPosition.BOTTOM_START:
                return NbGlobalPhysicalPosition.BOTTOM_RIGHT;
            case NbGlobalLogicalPosition.BOTTOM_END:
                return NbGlobalPhysicalPosition.BOTTOM_LEFT;
        }
    };
    NbPositionHelper = __decorate([(0, _core.Injectable)(), __metadata("design:paramtypes", [_direction.NbLayoutDirectionService])], NbPositionHelper);
    return NbPositionHelper;
}();
exports.NbPositionHelper = NbPositionHelper;
//# sourceMappingURL=position-helper.js.map
//# sourceMappingURL=position-helper.js.map