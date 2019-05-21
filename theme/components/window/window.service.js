"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbWindowService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _operators = require("rxjs/operators");

var _overlay = require("../cdk/overlay");

var _blockScrollStrategyAdapter = require("../cdk/adapter/block-scroll-strategy-adapter");

var _window = require("./window.options");

var _windowRef = require("./window-ref");

var _windowsContainer = require("./windows-container.component");

var _window2 = require("./window.component");

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

/**
 * The `NbWindowService` can be used to open windows.
 *
 * @stacked-example(Showcase, window/window-showcase.component)
 *
 * ### Installation
 *
 * Import `NbWindowModule` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbWindowModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * If you are using it in a lazy loaded module than you have to install `NbWindowModule.forChild`:
 * ```ts
 * @NgModule({
 *   imports: [
 *   	// ...
 *     NbWindowModule.forChild(config),
 *   ],
 * })
 * export class LazyLoadedModule { }
 * ```
 *
 * ### Usage
 *
 * A new window can be opened by calling the `open` method with a component or template to be loaded
 * and an optional configuration.
 * `open` method will return `NbWindowRef` that can be used for the further manipulations.
 *
 * ```ts
 * const windowRef = this.windowService.open(MyComponent, { ... });
 * ```
 *
 * `NbWindowRef` gives you ability manipulate opened window.
 * Also, you can inject `NbWindowRef` inside provided component which rendered in window.
 *
 * ```ts
 * this.windowService.open(MyWindowComponent, { ... });
 *
 * // my.component.ts
 * constructor(protected windowRef: NbWindowRef) {
 * }
 *
 * minimize() {
 *   this.windowRef.minimize();
 * }
 *
 * close() {
 *   this.windowRef.close();
 * }
 * ```
 *
 * Instead of component you can create window from TemplateRef. As usual you can access context provided via config
 * via `let-` variables. Also you can get reference to the `NbWindowRef` in context's `windowRef` property.
 *
 * @stacked-example(Window content from TemplateRef, window/template-window.component)
 *
 * ### Configuration
 *
 * As mentioned above, `open` method of the `NbWindowService` may receive optional configuration options.
 * Also, you can modify default windows configuration through `NbWindowModule.forRoot({ ... })`.
 * You can read about all available options on [API tab](docs/components/window/api#nbwindowconfig).
 *
 * @stacked-example(Configuration, window/windows-backdrop.component)
 */
var NbWindowService = /** @class */function () {
    function NbWindowService(componentFactoryResolver, overlayService, overlayPositionBuilder, blockScrollStrategy, defaultWindowsConfig, cfr) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.overlayService = overlayService;
        this.overlayPositionBuilder = overlayPositionBuilder;
        this.blockScrollStrategy = blockScrollStrategy;
        this.defaultWindowsConfig = defaultWindowsConfig;
        this.cfr = cfr;
        this.openWindows = [];
    }
    /**
     * Opens new window.
     * @param windowContent
     * @param windowConfig
     * */
    NbWindowService.prototype.open = function (windowContent, windowConfig) {
        if (windowConfig === void 0) {
            windowConfig = {};
        }
        if (this.windowsContainerViewRef == null) {
            this.createWindowsContainer();
        }
        var config = new _window.NbWindowConfig(this.defaultWindowsConfig, windowConfig);
        var windowRef = new _windowRef.NbWindowRef(config);
        windowRef.componentRef = this.appendWindow(windowContent, config, windowRef);
        this.openWindows.push(windowRef);
        this.subscribeToEvents(windowRef);
        return windowRef;
    };
    NbWindowService.prototype.createWindowsContainer = function () {
        this.overlayRef = this.overlayService.create({
            scrollStrategy: this.overlayService.scrollStrategies.noop(),
            positionStrategy: this.overlayPositionBuilder.global().bottom().right(),
            hasBackdrop: true
        });
        var windowsContainerPortal = new _overlay.NbComponentPortal(_windowsContainer.NbWindowsContainerComponent, null, null, this.cfr);
        var overlayRef = this.overlayRef.attach(windowsContainerPortal);
        this.windowsContainerViewRef = overlayRef.instance.viewContainerRef;
    };
    NbWindowService.prototype.appendWindow = function (content, config, windowRef) {
        var context = content instanceof _core.TemplateRef ? { $implicit: config.context, windowRef: windowRef } : config.context;
        var providers = [{ provide: _window.NB_WINDOW_CONTENT, useValue: content }, { provide: _window.NB_WINDOW_CONTEXT, useValue: context }, { provide: _window.NbWindowConfig, useValue: config }, { provide: _windowRef.NbWindowRef, useValue: windowRef }];
        var parentInjector = config.viewContainerRef ? config.viewContainerRef.injector : this.windowsContainerViewRef.injector;
        var injector = _core.Injector.create({ parent: parentInjector, providers: providers });
        var windowFactory = this.componentFactoryResolver.resolveComponentFactory(_window2.NbWindowComponent);
        var ref = this.windowsContainerViewRef.createComponent(windowFactory, null, injector);
        ref.instance.cfr = this.cfr;
        ref.changeDetectorRef.detectChanges();
        return ref;
    };
    NbWindowService.prototype.subscribeToEvents = function (windowRef) {
        var _this = this;
        if (windowRef.config.closeOnBackdropClick) {
            this.overlayRef.backdropClick().subscribe(function () {
                return windowRef.close();
            });
        }
        if (windowRef.config.closeOnEsc) {
            this.overlayRef.keydownEvents().pipe((0, _operators.filter)(function (event) {
                return event.keyCode === 27;
            })).subscribe(function () {
                return windowRef.close();
            });
        }
        windowRef.stateChange.subscribe(function () {
            return _this.checkAndUpdateOverlay();
        });
        windowRef.onClose.subscribe(function () {
            _this.openWindows.splice(_this.openWindows.indexOf(windowRef), 1);
            _this.checkAndUpdateOverlay();
        });
    };
    NbWindowService.prototype.checkAndUpdateOverlay = function () {
        var fullScreenWindows = this.openWindows.filter(function (w) {
            return w.state === _window.NbWindowState.FULL_SCREEN;
        });
        if (fullScreenWindows.length > 0) {
            this.blockScrollStrategy.enable();
        } else {
            this.blockScrollStrategy.disable();
        }
        if (fullScreenWindows.some(function (w) {
            return w.config.hasBackdrop;
        })) {
            this.overlayRef.backdropElement.removeAttribute('hidden');
        } else {
            this.overlayRef.backdropElement.setAttribute('hidden', '');
        }
    };
    NbWindowService = __decorate([(0, _core.Injectable)(), __param(4, (0, _core.Inject)(_window.NB_WINDOW_CONFIG)), __metadata("design:paramtypes", [_core.ComponentFactoryResolver, _overlay.NbOverlayService, _overlay.NbOverlayPositionBuilder, _blockScrollStrategyAdapter.NbBlockScrollStrategyAdapter, _window.NbWindowConfig, _core.ComponentFactoryResolver])], NbWindowService);
    return NbWindowService;
}();
exports.NbWindowService = NbWindowService;
//# sourceMappingURL=window.service.js.map
//# sourceMappingURL=window.service.js.map