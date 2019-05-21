"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbToastrService = exports.NbToastrContainerRegistry = exports.NbToastContainer = exports.NbToastRef = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _cdk = require("../cdk");

var _toastrContainer = require("./toastr-container.component");

var _toastrConfig = require("./toastr-config");

var _theme = require("../../theme.options");

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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

var NbToastRef = /** @class */function () {
    function NbToastRef(toastContainer, toast) {
        this.toastContainer = toastContainer;
        this.toast = toast;
    }
    NbToastRef.prototype.close = function () {
        this.toastContainer.destroy(this.toast);
    };
    return NbToastRef;
}();
exports.NbToastRef = NbToastRef;

var NbToastContainer = /** @class */function () {
    function NbToastContainer(position, containerRef, positionHelper) {
        this.position = position;
        this.containerRef = containerRef;
        this.positionHelper = positionHelper;
        this.toasts = [];
    }
    Object.defineProperty(NbToastContainer.prototype, "nativeElement", {
        get: function get() {
            return this.containerRef.location.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    NbToastContainer.prototype.attach = function (toast) {
        if (toast.config.preventDuplicates && this.isDuplicate(toast)) {
            return;
        }
        var toastComponent = this.attachToast(toast);
        if (toast.config.destroyByClick) {
            this.subscribeOnClick(toastComponent, toast);
        }
        if (toast.config.duration) {
            this.setDestroyTimeout(toast);
        }
        this.prevToast = toast;
        return new NbToastRef(this, toast);
    };
    NbToastContainer.prototype.destroy = function (toast) {
        this.toasts = this.toasts.filter(function (t) {
            return t !== toast;
        });
        this.updateContainer();
    };
    NbToastContainer.prototype.isDuplicate = function (toast) {
        return this.prevToast && this.prevToast.message === toast.message && this.prevToast.title === toast.title;
    };
    NbToastContainer.prototype.attachToast = function (toast) {
        if (this.positionHelper.isTopPosition(toast.config.position)) {
            return this.attachToTop(toast);
        } else {
            return this.attachToBottom(toast);
        }
    };
    NbToastContainer.prototype.attachToTop = function (toast) {
        this.toasts.unshift(toast);
        this.updateContainer();
        return this.containerRef.instance.toasts.first;
    };
    NbToastContainer.prototype.attachToBottom = function (toast) {
        this.toasts.push(toast);
        this.updateContainer();
        return this.containerRef.instance.toasts.last;
    };
    NbToastContainer.prototype.setDestroyTimeout = function (toast) {
        var _this = this;
        setTimeout(function () {
            return _this.destroy(toast);
        }, toast.config.duration);
    };
    NbToastContainer.prototype.subscribeOnClick = function (toastComponent, toast) {
        var _this = this;
        toastComponent.destroy.subscribe(function () {
            return _this.destroy(toast);
        });
    };
    NbToastContainer.prototype.updateContainer = function () {
        (0, _cdk.patch)(this.containerRef, { content: this.toasts, position: this.position });
    };
    return NbToastContainer;
}();
exports.NbToastContainer = NbToastContainer;

var NbToastrContainerRegistry = /** @class */function () {
    function NbToastrContainerRegistry(overlay, positionBuilder, positionHelper, cfr, document) {
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.positionHelper = positionHelper;
        this.cfr = cfr;
        this.document = document;
        this.overlays = new Map();
    }
    NbToastrContainerRegistry.prototype.get = function (position) {
        var logicalPosition = this.positionHelper.toLogicalPosition(position);
        var container = this.overlays.get(logicalPosition);
        if (!container || !this.existsInDom(container)) {
            this.instantiateContainer(logicalPosition);
        }
        return this.overlays.get(logicalPosition);
    };
    NbToastrContainerRegistry.prototype.instantiateContainer = function (position) {
        var container = this.createContainer(position);
        this.overlays.set(position, container);
    };
    NbToastrContainerRegistry.prototype.createContainer = function (position) {
        var positionStrategy = this.positionBuilder.global().position(position);
        var ref = this.overlay.create({ positionStrategy: positionStrategy });
        var containerRef = ref.attach(new _cdk.NbComponentPortal(_toastrContainer.NbToastrContainerComponent, null, null, this.cfr));
        return new NbToastContainer(position, containerRef, this.positionHelper);
    };
    NbToastrContainerRegistry.prototype.existsInDom = function (toastContainer) {
        return this.document.contains(toastContainer.nativeElement);
    };
    NbToastrContainerRegistry = __decorate([(0, _core.Injectable)(), __param(4, (0, _core.Inject)(_theme.NB_DOCUMENT)), __metadata("design:paramtypes", [_cdk.NbOverlayService, _cdk.NbPositionBuilderService, _cdk.NbPositionHelper, _core.ComponentFactoryResolver, Object])], NbToastrContainerRegistry);
    return NbToastrContainerRegistry;
}();
exports.NbToastrContainerRegistry = NbToastrContainerRegistry;
/**
 * The `NbToastrService` provides a capability to build toast notifications.
 *
 * @stacked-example(Showcase, toastr/toastr-showcase.component)
 *
 * `NbToastrService.show(message, title, config)` accepts three params, title and config are optional.
 *
 * ### Installation
 *
 * Import `NbToastrModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbToastrModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * Calling `NbToastrService.show(...)` will render new toast and return `NbToastrRef` with
 * help of which you may close newly created toast by calling `close` method.
 *
 * ```ts
 * const toastRef: NbToastRef = this.toastrService.show(...);
 * toastRef.close();
 * ```
 *
 * Config accepts following options:
 *
 * `position` - determines where on the screen toast will be rendered.
 * Default is `top-end`.
 *
 * @stacked-example(Position, toastr/toastr-positions.component)
 *
 * `status` - coloring and icon of the toast.
 * Default is `primary`
 *
 * @stacked-example(Status, toastr/toastr-statuses.component)
 *
 * `duration` - the time after which the toast will be destroyed.
 * `0` means endless toast, that may be destroyed by click only.
 * Default is 3000 ms.
 *
 * @stacked-example(Duration, toastr/toastr-duration.component)
 *
 * `destroyByClick` - provides a capability to destroy toast by click.
 * Default is true.
 *
 * @stacked-example(Destroy by click, toastr/toastr-destroy-by-click.component)
 *
 * `preventDuplicates` - don't create new toast if it has the same title and the same message with previous one.
 * Default is false.
 *
 * @stacked-example(Prevent duplicates, toastr/toastr-prevent-duplicates.component)
 *
 * `hasIcon` - if true then render toast icon.
 * `icon` - you can pass icon class that will be applied into the toast.
 *
 * @stacked-example(Has icon, toastr/toastr-icon.component)
 * */

var NbToastrService = /** @class */function () {
    function NbToastrService(globalConfig, containerRegistry) {
        this.globalConfig = globalConfig;
        this.containerRegistry = containerRegistry;
    }
    /**
     * Shows toast with message, title and user config.
     * */
    NbToastrService.prototype.show = function (message, title, userConfig) {
        var config = new _toastrConfig.NbToastrConfig(__assign({}, this.globalConfig, userConfig));
        var container = this.containerRegistry.get(config.position);
        var toast = { message: message, title: title, config: config };
        return container.attach(toast);
    };
    /**
     * Shows success toast with message, title and user config.
     * */
    NbToastrService.prototype.success = function (message, title, config) {
        return this.show(message, title, __assign({}, config, { status: 'success' }));
    };
    /**
     * Shows info toast with message, title and user config.
     * */
    NbToastrService.prototype.info = function (message, title, config) {
        return this.show(message, title, __assign({}, config, { status: 'info' }));
    };
    /**
     * Shows warning toast with message, title and user config.
     * */
    NbToastrService.prototype.warning = function (message, title, config) {
        return this.show(message, title, __assign({}, config, { status: 'warning' }));
    };
    /**
     * Shows primary toast with message, title and user config.
     * */
    NbToastrService.prototype.primary = function (message, title, config) {
        return this.show(message, title, __assign({}, config, { status: 'primary' }));
    };
    /**
     * Shows danger toast with message, title and user config.
     * */
    NbToastrService.prototype.danger = function (message, title, config) {
        return this.show(message, title, __assign({}, config, { status: 'danger' }));
    };
    /**
     * Shows default toast with message, title and user config.
     * */
    NbToastrService.prototype.default = function (message, title, config) {
        return this.show(message, title, __assign({}, config, { status: '' }));
    };
    NbToastrService = __decorate([(0, _core.Injectable)(), __param(0, (0, _core.Inject)(_toastrConfig.NB_TOASTR_CONFIG)), __metadata("design:paramtypes", [_toastrConfig.NbToastrConfig, NbToastrContainerRegistry])], NbToastrService);
    return NbToastrService;
}();
exports.NbToastrService = NbToastrService;
//# sourceMappingURL=toastr.service.js.map
//# sourceMappingURL=toastr.service.js.map