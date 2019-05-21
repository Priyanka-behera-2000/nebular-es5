"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbDatepickerContainerComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _cdk = require("../cdk");

/*
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

var NbDatepickerContainerComponent = /** @class */function (_super) {
    __extends(NbDatepickerContainerComponent, _super);
    function NbDatepickerContainerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbDatepickerContainerComponent.prototype.attach = function (portal) {
        return this.overlayContainer.attachComponentPortal(portal);
    };
    __decorate([(0, _core.ViewChild)(_cdk.NbOverlayContainerComponent), __metadata("design:type", _cdk.NbOverlayContainerComponent)], NbDatepickerContainerComponent.prototype, "overlayContainer", void 0);
    NbDatepickerContainerComponent = __decorate([(0, _core.Component)({
        selector: 'nb-datepicker-container',
        styles: [":host .arrow{position:absolute;width:0;height:0}:host /deep/ nb-overlay-container .primitive-overlay{padding:0.75rem 1rem} "],
        template: "\n    <span class=\"arrow\"></span>\n    <nb-overlay-container></nb-overlay-container>\n  "
    })], NbDatepickerContainerComponent);
    return NbDatepickerContainerComponent;
}(_cdk.NbPositionedContainer);
exports.NbDatepickerContainerComponent = NbDatepickerContainerComponent;
//# sourceMappingURL=datepicker-container.component.js.map
//# sourceMappingURL=datepicker-container.component.js.map