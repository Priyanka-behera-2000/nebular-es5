"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbContextMenuComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _cdk = require("../cdk");

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
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

/**
 * Context menu component used as content within NbContextMenuDirective.
 *
 * @styles
 *
 * context-menu-background-color
 * context-menu-border-color
 * context-menu-border-style
 * context-menu-border-width
 * context-menu-border-radius
 * context-menu-min-width
 * context-menu-max-width
 * context-menu-shadow
 * */
var NbContextMenuComponent = /** @class */function (_super) {
    __extends(NbContextMenuComponent, _super);
    function NbContextMenuComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.items = [];
        _this.context = { items: [] };
        return _this;
    }
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    NbContextMenuComponent.prototype.renderContent = function () {};
    __decorate([(0, _core.Input)(), __metadata("design:type", Array)], NbContextMenuComponent.prototype, "items", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbContextMenuComponent.prototype, "tag", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbContextMenuComponent.prototype, "context", void 0);
    NbContextMenuComponent = __decorate([(0, _core.Component)({
        selector: 'nb-context-menu',
        template: "\n    <nb-menu class=\"context-menu\" [items]=\"context.items\" [tag]=\"context.tag\"></nb-menu>\n  "
    })], NbContextMenuComponent);
    return NbContextMenuComponent;
}(_cdk.NbPositionedContainer);
exports.NbContextMenuComponent = NbContextMenuComponent;
//# sourceMappingURL=context-menu.component.js.map
//# sourceMappingURL=context-menu.component.js.map