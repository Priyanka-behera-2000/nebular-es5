"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbOverlayService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.patch = patch;
exports.createContainer = createContainer;

var _core = require("@angular/core");

var _mapping = require("./mapping");

var _direction = require("../../../services/direction.service");

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
function patch(container, containerContext) {
    Object.assign(container.instance, containerContext);
    container.changeDetectorRef.detectChanges();
    return container;
}
function createContainer(ref, container, context, componentFactoryResolver) {
    var containerRef = ref.attach(new _mapping.NbComponentPortal(container, null, null, componentFactoryResolver));
    patch(containerRef, context);
    return containerRef;
}
var NbOverlayService = /** @class */function () {
    function NbOverlayService(overlay, layoutDirection) {
        this.overlay = overlay;
        this.layoutDirection = layoutDirection;
    }
    Object.defineProperty(NbOverlayService.prototype, "scrollStrategies", {
        get: function get() {
            return this.overlay.scrollStrategies;
        },
        enumerable: true,
        configurable: true
    });
    NbOverlayService.prototype.create = function (config) {
        var overlayRef = this.overlay.create(config);
        this.layoutDirection.onDirectionChange().subscribe(function (dir) {
            return overlayRef.setDirection(dir);
        });
        return overlayRef;
    };
    NbOverlayService = __decorate([(0, _core.Injectable)(), __metadata("design:paramtypes", [_mapping.NbOverlay, _direction.NbLayoutDirectionService])], NbOverlayService);
    return NbOverlayService;
}();
exports.NbOverlayService = NbOverlayService;
//# sourceMappingURL=overlay.js.map
//# sourceMappingURL=overlay.js.map