"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbSpinnerDirective = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _spinner = require("./spinner.component");

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
 * Styled spinner directive
 *
 * @stacked-example(Spinner Showcase, spinner/spinner-card.component)
 *
 *
 * ```ts
 * <nb-card [nbSpinner]="loading" nbSpinnerStatus="danger">
 *   <nb-card-body>Card Content</nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbSpinnerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSpinnerModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Could be colored using `status` property
 *
 * @stacked-example(Spinner Colors, spinner/spinner-colors.component)
 *
 * Available in different sizes with `size` property:
 *
 * @stacked-example(Spinner Sizes, spinner/spinner-sizes.component)
 *
 * It is also possible to place it into the button:
 * @stacked-example(Buttons with spinner, spinner/spinner-button.component)
 *
 * Or tabs:
 * @stacked-example(Spinner in tabs, spinner/spinner-tabs.component)
 */
var NbSpinnerDirective = /** @class */function () {
    function NbSpinnerDirective(directiveView, componentFactoryResolver, renderer, directiveElement) {
        this.directiveView = directiveView;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
        this.directiveElement = directiveElement;
        this.shouldShow = false;
        /**
         * Spinner size. Possible values: `tiny`, `small`, `medium` (default), `large`, `giant`
         */
        this.spinnerSize = 'medium';
        this.isSpinnerExist = false;
    }
    Object.defineProperty(NbSpinnerDirective.prototype, "nbSpinner", {
        /**
         * Directive value - show or hide spinner
         * @param {boolean} val
         */
        set: function set(val) {
            if (this.componentFactory) {
                if (val) {
                    this.show();
                } else {
                    this.hide();
                }
            } else {
                this.shouldShow = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    NbSpinnerDirective.prototype.ngOnInit = function () {
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(_spinner.NbSpinnerComponent);
        if (this.shouldShow) {
            this.show();
        }
    };
    NbSpinnerDirective.prototype.hide = function () {
        if (this.isSpinnerExist) {
            this.directiveView.remove();
            this.isSpinnerExist = false;
        }
    };
    NbSpinnerDirective.prototype.show = function () {
        if (!this.isSpinnerExist) {
            this.spinner = this.directiveView.createComponent(this.componentFactory);
            this.setInstanceInputs(this.spinner.instance);
            this.spinner.changeDetectorRef.detectChanges();
            this.renderer.appendChild(this.directiveElement.nativeElement, this.spinner.location.nativeElement);
            this.isSpinnerExist = true;
        }
    };
    NbSpinnerDirective.prototype.setInstanceInputs = function (instance) {
        typeof this.spinnerMessage !== 'undefined' && (instance.message = this.spinnerMessage);
        typeof this.spinnerStatus !== 'undefined' && (instance.status = this.spinnerStatus);
        typeof this.spinnerSize !== 'undefined' && (instance.size = this.spinnerSize);
    };
    __decorate([(0, _core.Input)('nbSpinnerMessage'), __metadata("design:type", String)], NbSpinnerDirective.prototype, "spinnerMessage", void 0);
    __decorate([(0, _core.Input)('nbSpinnerStatus'), __metadata("design:type", String)], NbSpinnerDirective.prototype, "spinnerStatus", void 0);
    __decorate([(0, _core.Input)('nbSpinnerSize'), __metadata("design:type", String)], NbSpinnerDirective.prototype, "spinnerSize", void 0);
    __decorate([(0, _core.Input)('nbSpinner'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbSpinnerDirective.prototype, "nbSpinner", null);
    __decorate([(0, _core.HostBinding)('class.nb-spinner-container'), __metadata("design:type", Object)], NbSpinnerDirective.prototype, "isSpinnerExist", void 0);
    NbSpinnerDirective = __decorate([(0, _core.Directive)({ selector: '[nbSpinner]' }), __metadata("design:paramtypes", [_core.ViewContainerRef, _core.ComponentFactoryResolver, _core.Renderer2, _core.ElementRef])], NbSpinnerDirective);
    return NbSpinnerDirective;
}();
exports.NbSpinnerDirective = NbSpinnerDirective;
//# sourceMappingURL=spinner.directive.js.map
//# sourceMappingURL=spinner.directive.js.map