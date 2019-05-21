"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCdkMappingModule = exports.NbPortalInjector = exports.NbFlexibleConnectedPositionStrategy = exports.NbOverlayContainer = exports.NbTemplatePortal = exports.NbOverlayPositionBuilder = exports.NbPlatform = exports.NbOverlay = exports.NbComponentPortal = exports.NbPortalOutletDirective = exports.NbPortalDirective = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var i0 = _interopRequireWildcard(_core);

var _portal = require("@angular/cdk/portal");

var _overlay = require("@angular/cdk/overlay");

var _platform = require("@angular/cdk/platform");

var _common = require("@angular/common");

var i1 = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

var NbPortalDirective = /** @class */function (_super) {
    __extends(NbPortalDirective, _super);
    function NbPortalDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPortalDirective = __decorate([(0, _core.Directive)({ selector: '[nbPortal]' })], NbPortalDirective);
    return NbPortalDirective;
}(_portal.CdkPortal);
exports.NbPortalDirective = NbPortalDirective;

var NbPortalOutletDirective = /** @class */function (_super) {
    __extends(NbPortalOutletDirective, _super);
    function NbPortalOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPortalOutletDirective = __decorate([(0, _core.Directive)({ selector: '[nbPortalOutlet]' })], NbPortalOutletDirective);
    return NbPortalOutletDirective;
}(_portal.CdkPortalOutlet);
exports.NbPortalOutletDirective = NbPortalOutletDirective;

var NbComponentPortal = /** @class */function (_super) {
    __extends(NbComponentPortal, _super);
    function NbComponentPortal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NbComponentPortal;
}(_portal.ComponentPortal);
exports.NbComponentPortal = NbComponentPortal;

var NbOverlay = /** @class */function (_super) {
    __extends(NbOverlay, _super);
    function NbOverlay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbOverlay = __decorate([(0, _core.Injectable)()], NbOverlay);
    return NbOverlay;
}(_overlay.Overlay);
exports.NbOverlay = NbOverlay;

var NbPlatform = /** @class */function (_super) {
    __extends(NbPlatform, _super);
    function NbPlatform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbPlatform = __decorate([(0, _core.Injectable)()], NbPlatform);
    return NbPlatform;
}(_platform.Platform);
exports.NbPlatform = NbPlatform;

var NbOverlayPositionBuilder = /** @class */function (_super) {
    __extends(NbOverlayPositionBuilder, _super);
    function NbOverlayPositionBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbOverlayPositionBuilder = __decorate([(0, _core.Injectable)()], NbOverlayPositionBuilder);
    return NbOverlayPositionBuilder;
}(_overlay.OverlayPositionBuilder);
exports.NbOverlayPositionBuilder = NbOverlayPositionBuilder;

var NbTemplatePortal = /** @class */function (_super) {
    __extends(NbTemplatePortal, _super);
    function NbTemplatePortal(template, viewContainerRef, context) {
        return _super.call(this, template, viewContainerRef, context) || this;
    }
    return NbTemplatePortal;
}(_portal.TemplatePortal);
exports.NbTemplatePortal = NbTemplatePortal;

var NbOverlayContainer = /** @class */function (_super) {
    __extends(NbOverlayContainer, _super);
    function NbOverlayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbOverlayContainer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NbOverlayContainer_Factory() {
            return new NbOverlayContainer(i0.ɵɵinject(i1.DOCUMENT));
        }, token: NbOverlayContainer, providedIn: "root" });
    return NbOverlayContainer;
}(_overlay.OverlayContainer);
exports.NbOverlayContainer = NbOverlayContainer;

var NbFlexibleConnectedPositionStrategy = /** @class */function (_super) {
    __extends(NbFlexibleConnectedPositionStrategy, _super);
    function NbFlexibleConnectedPositionStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NbFlexibleConnectedPositionStrategy;
}(_overlay.FlexibleConnectedPositionStrategy);
exports.NbFlexibleConnectedPositionStrategy = NbFlexibleConnectedPositionStrategy;

var NbPortalInjector = /** @class */function (_super) {
    __extends(NbPortalInjector, _super);
    function NbPortalInjector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NbPortalInjector;
}(_portal.PortalInjector);
exports.NbPortalInjector = NbPortalInjector;

var CDK_MODULES = [_overlay.OverlayModule, _portal.PortalModule];
/**
 * This module helps us to keep all angular/cdk deps inside our cdk module via providing aliases.
 * Approach will help us move cdk in separate npm package and refactor nebular/theme code.
 * */
var NbCdkMappingModule = /** @class */function () {
    function NbCdkMappingModule() {}
    NbCdkMappingModule_1 = NbCdkMappingModule;
    NbCdkMappingModule.forRoot = function () {
        return {
            ngModule: NbCdkMappingModule_1,
            providers: [NbOverlay, NbPlatform, NbOverlayPositionBuilder]
        };
    };
    var NbCdkMappingModule_1;
    NbCdkMappingModule = NbCdkMappingModule_1 = __decorate([(0, _core.NgModule)({
        imports: CDK_MODULES.slice(),
        exports: CDK_MODULES.concat([NbPortalDirective, NbPortalOutletDirective]),
        declarations: [NbPortalDirective, NbPortalOutletDirective]
    })], NbCdkMappingModule);
    return NbCdkMappingModule;
}();
exports.NbCdkMappingModule = NbCdkMappingModule;
//# sourceMappingURL=mapping.js.map
//# sourceMappingURL=mapping.js.map