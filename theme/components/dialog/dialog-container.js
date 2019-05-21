"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbDialogContainerComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _cdk = require("../cdk");

var _dialogConfig = require("./dialog-config");

/**
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
 * Container component for each dialog.
 * All the dialogs will be attached to it.
 * // TODO add animations
 * */
var NbDialogContainerComponent = /** @class */function () {
    function NbDialogContainerComponent(config, elementRef, focusTrapFactory) {
        this.config = config;
        this.elementRef = elementRef;
        this.focusTrapFactory = focusTrapFactory;
    }
    NbDialogContainerComponent.prototype.ngOnInit = function () {
        if (this.config.autoFocus) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
            this.focusTrap.blurPreviouslyFocusedElement();
            this.focusTrap.focusInitialElement();
        }
    };
    NbDialogContainerComponent.prototype.ngOnDestroy = function () {
        if (this.config.autoFocus && this.focusTrap) {
            this.focusTrap.restoreFocus();
        }
    };
    NbDialogContainerComponent.prototype.attachComponentPortal = function (portal) {
        return this.portalOutlet.attachComponentPortal(portal);
    };
    NbDialogContainerComponent.prototype.attachTemplatePortal = function (portal) {
        return this.portalOutlet.attachTemplatePortal(portal);
    };
    __decorate([(0, _core.ViewChild)(_cdk.NbPortalOutletDirective), __metadata("design:type", _cdk.NbPortalOutletDirective)], NbDialogContainerComponent.prototype, "portalOutlet", void 0);
    NbDialogContainerComponent = __decorate([(0, _core.Component)({
        selector: 'nb-dialog-container',
        template: '<ng-template nbPortalOutlet></ng-template>'
    }), __metadata("design:paramtypes", [_dialogConfig.NbDialogConfig, _core.ElementRef, _cdk.NbFocusTrapFactoryService])], NbDialogContainerComponent);
    return NbDialogContainerComponent;
}();
exports.NbDialogContainerComponent = NbDialogContainerComponent;
//# sourceMappingURL=dialog-container.js.map
//# sourceMappingURL=dialog-container.js.map