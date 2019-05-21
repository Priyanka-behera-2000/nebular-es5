"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbPopoverComponent = undefined;

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
 * Overlay container.
 * Renders provided content inside.
 *
 * @styles
 *
 * popover-text-color:
 * popover-text-font-family:
 * popover-text-font-size:
 * popover-text-font-weight:
 * popover-text-line-height:
 * popover-background-color:
 * popover-border-width:
 * popover-border-color:
 * popover-border-radius:
 * popover-shadow:
 * popover-arrow-size:
 * popover-padding:
 * */
var NbPopoverComponent = /** @class */function (_super) {
    __extends(NbPopoverComponent, _super);
    function NbPopoverComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPopoverComponent.prototype.renderContent = function () {
        this.detachContent();
        this.attachContent();
    };
    NbPopoverComponent.prototype.detachContent = function () {
        this.overlayContainer.detach();
    };
    NbPopoverComponent.prototype.attachContent = function () {
        if (this.content instanceof _core.TemplateRef) {
            this.attachTemplate();
        } else if (this.content instanceof _core.Type) {
            this.attachComponent();
        } else {
            this.attachString();
        }
    };
    NbPopoverComponent.prototype.attachTemplate = function () {
        this.overlayContainer.attachTemplatePortal(new _cdk.NbTemplatePortal(this.content, null, { $implicit: this.context }));
    };
    NbPopoverComponent.prototype.attachComponent = function () {
        var portal = new _cdk.NbComponentPortal(this.content, null, null, this.cfr);
        var ref = this.overlayContainer.attachComponentPortal(portal, this.context);
        ref.changeDetectorRef.detectChanges();
    };
    NbPopoverComponent.prototype.attachString = function () {
        this.overlayContainer.attachStringContent(this.content);
    };
    __decorate([(0, _core.ViewChild)(_cdk.NbOverlayContainerComponent), __metadata("design:type", _cdk.NbOverlayContainerComponent)], NbPopoverComponent.prototype, "overlayContainer", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbPopoverComponent.prototype, "content", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbPopoverComponent.prototype, "context", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", _core.ComponentFactoryResolver)], NbPopoverComponent.prototype, "cfr", void 0);
    NbPopoverComponent = __decorate([(0, _core.Component)({
        selector: 'nb-popover',
        styles: [":host .arrow{position:absolute;width:0;height:0} "],
        template: "\n    <span class=\"arrow\"></span>\n    <nb-overlay-container></nb-overlay-container>\n  "
    })], NbPopoverComponent);
    return NbPopoverComponent;
}(_cdk.NbPositionedContainer);
exports.NbPopoverComponent = NbPopoverComponent;
//# sourceMappingURL=popover.component.js.map
//# sourceMappingURL=popover.component.js.map