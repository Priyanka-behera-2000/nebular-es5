"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbOverlayContainerComponent = exports.NbPositionedContainer = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _overlayPosition = require("./overlay-position");

var _mapping = require("./mapping");

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

var NbPositionedContainer = /** @class */function () {
    function NbPositionedContainer() {}
    Object.defineProperty(NbPositionedContainer.prototype, "top", {
        get: function get() {
            return this.position === _overlayPosition.NbPosition.TOP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPositionedContainer.prototype, "right", {
        get: function get() {
            return this.position === _overlayPosition.NbPosition.RIGHT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPositionedContainer.prototype, "bottom", {
        get: function get() {
            return this.position === _overlayPosition.NbPosition.BOTTOM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbPositionedContainer.prototype, "left", {
        get: function get() {
            return this.position === _overlayPosition.NbPosition.LEFT;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbPositionedContainer.prototype, "position", void 0);
    __decorate([(0, _core.HostBinding)('class.nb-overlay-top'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbPositionedContainer.prototype, "top", null);
    __decorate([(0, _core.HostBinding)('class.nb-overlay-right'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbPositionedContainer.prototype, "right", null);
    __decorate([(0, _core.HostBinding)('class.nb-overlay-bottom'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbPositionedContainer.prototype, "bottom", null);
    __decorate([(0, _core.HostBinding)('class.nb-overlay-left'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbPositionedContainer.prototype, "left", null);
    return NbPositionedContainer;
}();
exports.NbPositionedContainer = NbPositionedContainer;

var NbOverlayContainerComponent = /** @class */function () {
    function NbOverlayContainerComponent(vcr, injector, changeDetectorRef) {
        this.vcr = vcr;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.isAttached = false;
    }
    Object.defineProperty(NbOverlayContainerComponent.prototype, "isStringContent", {
        get: function get() {
            return !!this.content;
        },
        enumerable: true,
        configurable: true
    });
    NbOverlayContainerComponent.prototype.attachComponentPortal = function (portal, context) {
        portal.injector = this.createChildInjector(portal.componentFactoryResolver);
        var componentRef = this.portalOutlet.attachComponentPortal(portal);
        if (context) {
            Object.assign(componentRef.instance, context);
        }
        componentRef.changeDetectorRef.markForCheck();
        componentRef.changeDetectorRef.detectChanges();
        this.isAttached = true;
        return componentRef;
    };
    NbOverlayContainerComponent.prototype.attachTemplatePortal = function (portal) {
        var templateRef = this.portalOutlet.attachTemplatePortal(portal);
        templateRef.detectChanges();
        this.isAttached = true;
        return templateRef;
    };
    NbOverlayContainerComponent.prototype.attachStringContent = function (content) {
        this.content = content;
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
        this.isAttached = true;
    };
    NbOverlayContainerComponent.prototype.detach = function () {
        if (this.portalOutlet.hasAttached()) {
            this.portalOutlet.detach();
        }
        this.attachStringContent(null);
        this.isAttached = false;
    };
    NbOverlayContainerComponent.prototype.createChildInjector = function (cfr) {
        return new _mapping.NbPortalInjector(this.injector, new WeakMap([[_core.ComponentFactoryResolver, cfr]]));
    };
    __decorate([(0, _core.ViewChild)(_mapping.NbPortalOutletDirective), __metadata("design:type", _mapping.NbPortalOutletDirective)], NbOverlayContainerComponent.prototype, "portalOutlet", void 0);
    NbOverlayContainerComponent = __decorate([(0, _core.Component)({
        selector: 'nb-overlay-container',
        template: "\n    <div *ngIf=\"isStringContent\" class=\"primitive-overlay\">{{ content }}</div>\n    <ng-template nbPortalOutlet></ng-template>\n  "
    }), __metadata("design:paramtypes", [_core.ViewContainerRef, _core.Injector, _core.ChangeDetectorRef])], NbOverlayContainerComponent);
    return NbOverlayContainerComponent;
}();
exports.NbOverlayContainerComponent = NbOverlayContainerComponent;
//# sourceMappingURL=overlay-container.js.map
//# sourceMappingURL=overlay-container.js.map