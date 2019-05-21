"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbTooltipComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _animations = require("@angular/animations");

var _cdk = require("../cdk");

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
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
 * Tooltip container.
 * Renders provided tooltip inside.
 *
 * @styles
 *
 * tooltip-background-color:
 * tooltip-border-color:
 * tooltip-border-style:
 * tooltip-border-width:
 * tooltip-border-radius:
 * tooltip-padding:
 * tooltip-text-color:
 * tooltip-text-font-family:
 * tooltip-text-font-size:
 * tooltip-text-font-weight:
 * tooltip-text-line-height:
 * tooltip-max-width:
 * tooltip-primary-background-color:
 * tooltip-primary-text-color:
 * tooltip-info-background-color:
 * tooltip-info-text-color:
 * tooltip-success-background-color:
 * tooltip-success-text-color:
 * tooltip-warning-background-color:
 * tooltip-warning-text-color:
 * tooltip-danger-background-color:
 * tooltip-danger-text-color:
 * tooltip-shadow:
 */
var NbTooltipComponent = /** @class */function () {
    function NbTooltipComponent() {
        /**
         * Popover position relatively host element.
         * */
        this.position = _cdk.NbPosition.TOP;
        this.context = {};
    }
    Object.defineProperty(NbTooltipComponent.prototype, "binding", {
        get: function get() {
            return this.position + " " + this.statusClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbTooltipComponent.prototype, "show", {
        get: function get() {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbTooltipComponent.prototype, "statusClass", {
        get: function get() {
            return this.context.status ? "status-" + this.context.status : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    NbTooltipComponent.prototype.renderContent = function () {};
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbTooltipComponent.prototype, "content", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbTooltipComponent.prototype, "position", void 0);
    __decorate([(0, _core.HostBinding)('class'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbTooltipComponent.prototype, "binding", null);
    __decorate([(0, _core.HostBinding)('@showTooltip'), __metadata("design:type", Object), __metadata("design:paramtypes", [])], NbTooltipComponent.prototype, "show", null);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbTooltipComponent.prototype, "context", void 0);
    NbTooltipComponent = __decorate([(0, _core.Component)({
        selector: 'nb-tooltip',
        styles: [":host{z-index:10000}:host .content{display:flex;align-items:center}:host.right .content{flex-direction:row-reverse}:host .arrow{position:absolute;width:0;height:0}:host nb-icon{font-size:1.1em;min-width:1em}:host nb-icon+span{margin-left:0.5rem}:host.right nb-icon+span{margin-right:0.5rem}:host .arrow{border-left:6px solid transparent;border-right:6px solid transparent}:host.bottom .arrow{top:-6px;left:calc(50% - 6px)}:host.left .arrow{right:-8px;top:calc(50% - 2.4px);transform:rotate(90deg)}:host.top .arrow{bottom:-6px;left:calc(50% - 6px);transform:rotate(180deg)}:host.right .arrow{left:-8px;top:calc(50% - 2.4px);transform:rotate(270deg)} "],
        template: "\n    <span class=\"arrow\"></span>\n    <div class=\"content\">\n      <nb-icon *ngIf=\"context?.icon\" [icon]=\"context.icon\"></nb-icon>\n      <span *ngIf=\"content\">{{ content }}</span>\n    </div>\n  ",
        animations: [(0, _animations.trigger)('showTooltip', [(0, _animations.state)('in', (0, _animations.style)({ opacity: 1 })), (0, _animations.transition)('void => *', [(0, _animations.style)({ opacity: 0 }), (0, _animations.animate)(100)]), (0, _animations.transition)('* => void', [(0, _animations.animate)(100, (0, _animations.style)({ opacity: 0 }))])])]
    })], NbTooltipComponent);
    return NbTooltipComponent;
}();
exports.NbTooltipComponent = NbTooltipComponent;
//# sourceMappingURL=tooltip.component.js.map
//# sourceMappingURL=tooltip.component.js.map