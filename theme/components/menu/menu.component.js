"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbMenuComponent = exports.NbMenuItemComponent = exports.NbToggleStates = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _router = require("@angular/router");

var _operators = require("rxjs/operators");

var _menu = require("./menu.service");

var _helpers = require("../helpers");

var _theme = require("../../theme.options");

var _animations = require("@angular/animations");

var _direction = require("../../services/direction.service");

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
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var NbToggleStates = exports.NbToggleStates = undefined;
(function (NbToggleStates) {
    NbToggleStates["Expanded"] = "expanded";
    NbToggleStates["Collapsed"] = "collapsed";
})(NbToggleStates || (exports.NbToggleStates = NbToggleStates = {}));
var NbMenuItemComponent = /** @class */function () {
    function NbMenuItemComponent(menuService, directionService) {
        this.menuService = menuService;
        this.directionService = directionService;
        this.menuItem = null;
        this.hoverItem = new _core.EventEmitter();
        this.toggleSubMenu = new _core.EventEmitter();
        this.selectItem = new _core.EventEmitter();
        this.itemClick = new _core.EventEmitter();
        this.alive = true;
    }
    NbMenuItemComponent.prototype.ngDoCheck = function () {
        this.toggleState = this.menuItem.expanded ? NbToggleStates.Expanded : NbToggleStates.Collapsed;
    };
    NbMenuItemComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.menuService.onSubmenuToggle().pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        }), (0, _operators.filter)(function (_a) {
            var item = _a.item;
            return item === _this.menuItem;
        }), (0, _operators.map)(function (_a) {
            var item = _a.item;
            return item.expanded;
        })).subscribe(function (isExpanded) {
            return _this.toggleState = isExpanded ? NbToggleStates.Expanded : NbToggleStates.Collapsed;
        });
    };
    NbMenuItemComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbMenuItemComponent.prototype.onToggleSubMenu = function (item) {
        this.toggleSubMenu.emit(item);
    };
    NbMenuItemComponent.prototype.onHoverItem = function (item) {
        this.hoverItem.emit(item);
    };
    NbMenuItemComponent.prototype.onSelectItem = function (item) {
        this.selectItem.emit(item);
    };
    NbMenuItemComponent.prototype.onItemClick = function (item) {
        this.itemClick.emit(item);
    };
    NbMenuItemComponent.prototype.getExpandStateIcon = function () {
        if (this.menuItem.expanded) {
            return 'chevron-down-outline';
        }
        return this.directionService.isLtr() ? 'chevron-left-outline' : 'chevron-right-outline';
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", Object)], NbMenuItemComponent.prototype, "menuItem", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", Object)], NbMenuItemComponent.prototype, "hoverItem", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", Object)], NbMenuItemComponent.prototype, "toggleSubMenu", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", Object)], NbMenuItemComponent.prototype, "selectItem", void 0);
    __decorate([(0, _core.Output)(), __metadata("design:type", Object)], NbMenuItemComponent.prototype, "itemClick", void 0);
    NbMenuItemComponent = __decorate([(0, _core.Component)({
        selector: '[nbMenuItem]',
        template: "<span *ngIf=\"menuItem.group\"> <nb-icon class=\"menu-icon\" [icon]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon> {{ menuItem.title }} </span> <a *ngIf=\"menuItem.link && !menuItem.url && !menuItem.children && !menuItem.group\" [routerLink]=\"menuItem.link\" [queryParams]=\"menuItem.queryParams\" [fragment]=\"menuItem.fragment\" [skipLocationChange]=\"menuItem.skipLocationChange\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"onItemClick(menuItem);\"> <nb-icon class=\"menu-icon\" [icon]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"menuItem.url && !menuItem.children && !menuItem.link && !menuItem.group\" [attr.href]=\"menuItem.url\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"onSelectItem(menuItem)\"> <nb-icon class=\"menu-icon\" [icon]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"!menuItem.children && !menuItem.link && !menuItem.url && !menuItem.group\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" (click)=\"$event.preventDefault(); onItemClick(menuItem);\"> <nb-icon class=\"menu-icon\" [icon]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon> <span class=\"menu-title\">{{ menuItem.title }}</span> </a> <a *ngIf=\"menuItem.children\" (click)=\"$event.preventDefault(); onToggleSubMenu(menuItem);\" [attr.target]=\"menuItem.target\" [attr.title]=\"menuItem.title\" [class.active]=\"menuItem.selected\" (mouseenter)=\"onHoverItem(menuItem)\" href=\"#\"> <nb-icon class=\"menu-icon\" [icon]=\"menuItem.icon\" *ngIf=\"menuItem.icon\"></nb-icon> <span class=\"menu-title\">{{ menuItem.title }}</span> <nb-icon class=\"expand-state\" [icon]=\"getExpandStateIcon()\" pack=\"nebular-essentials\"></nb-icon> </a> <ul *ngIf=\"menuItem.children\" [class.collapsed]=\"!(menuItem.children && menuItem.expanded)\" [class.expanded]=\"menuItem.expanded\" [@toggle]=\"toggleState\" class=\"menu-items\"> <ng-container *ngFor=\"let item of menuItem.children\"> <li nbMenuItem *ngIf=\"!item.hidden\" [menuItem]=\"item\" [class.menu-group]=\"item.group\" (hoverItem)=\"onHoverItem($event)\" (toggleSubMenu)=\"onToggleSubMenu($event)\" (selectItem)=\"onSelectItem($event)\" (itemClick)=\"onItemClick($event)\" class=\"menu-item\"> </li> </ng-container> </ul> ",
        animations: [(0, _animations.trigger)('toggle', [(0, _animations.state)(NbToggleStates.Collapsed, (0, _animations.style)({ height: '0', margin: '0' })), (0, _animations.state)(NbToggleStates.Expanded, (0, _animations.style)({ height: '*' })), (0, _animations.transition)(NbToggleStates.Collapsed + " <=> " + NbToggleStates.Expanded, (0, _animations.animate)(300))])]
    }), __metadata("design:paramtypes", [_menu.NbMenuService, _direction.NbLayoutDirectionService])], NbMenuItemComponent);
    return NbMenuItemComponent;
}();
exports.NbMenuItemComponent = NbMenuItemComponent;
/**
 * Vertical menu component.
 *
 * Accepts a list of menu items and renders them accordingly. Supports multi-level menus.
 *
 * Basic example
 * @stacked-example(Showcase, menu/menu-showcase.component)
 *
 * ```ts
 * // ...
 * items: NbMenuItem[] = [
 *  {
 *    title: home,
 *    link: '/'
 *  },
 *  {
 *    title: dashboard,
 *    link: 'dashboard'
 *  }
 * ];
 * // ...
 * <nb-menu [items]="items"></nb-menu>
 * ```
 * ### Installation
 *
 * Import `NbMenuModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbMenuModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 * and `NbMenuModule` to your feature module where the component should be shown:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbMenuModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Two-level menu example
 * @stacked-example(Two Levels, menu/menu-children.component)
 *
 *
 * Autocollapse menu example
 * @stacked-example(Autocollapse Menu, menu/menu-autocollapse.component)
 *
 *
 * @styles
 *
 * menu-background-color:
 * menu-text-color:
 * menu-text-font-family:
 * menu-text-font-size:
 * menu-text-font-weight:
 * menu-text-line-height:
 * menu-group-text-color:
 * menu-item-border-radius:
 * menu-item-padding:
 * menu-item-hover-background-color:
 * menu-item-hover-cursor:
 * menu-item-hover-text-color:
 * menu-item-icon-hover-color:
 * menu-item-active-background-color:
 * menu-item-active-text-color:
 * menu-item-icon-active-color:
 * menu-item-icon-color:
 * menu-item-icon-margin:
 * menu-item-icon-width:
 * menu-item-divider-color:
 * menu-item-divider-style:
 * menu-item-divider-width:
 * menu-submenu-background-color:
 * menu-submenu-text-color:
 * menu-submenu-margin:
 * menu-submenu-padding:
 * menu-submenu-item-border-color:
 * menu-submenu-item-border-style:
 * menu-submenu-item-border-width:
 * menu-submenu-item-border-radius:
 * menu-submenu-item-padding:
 * menu-submenu-item-hover-background-color:
 * menu-submenu-item-hover-border-color:
 * menu-submenu-item-hover-text-color:
 * menu-submenu-item-icon-hover-color:
 * menu-submenu-item-active-background-color:
 * menu-submenu-item-active-border-color:
 * menu-submenu-item-active-text-color:
 * menu-submenu-item-icon-active-color:
 * menu-submenu-item-active-hover-background-color:
 * menu-submenu-item-active-hover-border-color:
 * menu-submenu-item-active-hover-text-color:
 * menu-submenu-item-icon-active-hover-color:
 */

var NbMenuComponent = /** @class */function () {
    function NbMenuComponent(window, menuInternalService, router) {
        this.window = window;
        this.menuInternalService = menuInternalService;
        this.router = router;
        this._autoCollapse = false;
        this.alive = true;
    }
    Object.defineProperty(NbMenuComponent.prototype, "autoCollapse", {
        /**
         * Collapse all opened submenus on the toggle event
         * Default value is "false"
         * @type boolean
         */
        get: function get() {
            return this._autoCollapse;
        },
        set: function set(value) {
            this._autoCollapse = (0, _helpers.convertToBoolProperty)(value);
        },
        enumerable: true,
        configurable: true
    });
    NbMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuInternalService.prepareItems(this.items);
        this.menuInternalService.onAddItem().pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        }), (0, _operators.filter)(function (data) {
            return _this.compareTag(data.tag);
        })).subscribe(function (data) {
            return _this.onAddItem(data);
        });
        this.menuInternalService.onNavigateHome().pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        }), (0, _operators.filter)(function (data) {
            return _this.compareTag(data.tag);
        })).subscribe(function () {
            return _this.navigateHome();
        });
        this.menuInternalService.onGetSelectedItem().pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        }), (0, _operators.filter)(function (data) {
            return _this.compareTag(data.tag);
        })).subscribe(function (data) {
            data.listener.next({ tag: _this.tag, item: _this.getSelectedItem(_this.items) });
        });
        this.menuInternalService.onCollapseAll().pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        }), (0, _operators.filter)(function (data) {
            return _this.compareTag(data.tag);
        })).subscribe(function () {
            return _this.collapseAll();
        });
        this.router.events.pipe((0, _operators.takeWhile)(function () {
            return _this.alive;
        }), (0, _operators.filter)(function (event) {
            return event instanceof _router.NavigationEnd;
        })).subscribe(function () {
            _this.menuInternalService.selectFromUrl(_this.items, _this.tag, _this.autoCollapse);
        });
    };
    NbMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            return _this.menuInternalService.selectFromUrl(_this.items, _this.tag, _this.autoCollapse);
        });
    };
    NbMenuComponent.prototype.onAddItem = function (data) {
        var _a;
        (_a = this.items).push.apply(_a, data.items);
        this.menuInternalService.prepareItems(this.items);
        this.menuInternalService.selectFromUrl(this.items, this.tag, this.autoCollapse);
    };
    NbMenuComponent.prototype.onHoverItem = function (item) {
        this.menuInternalService.itemHover(item, this.tag);
    };
    NbMenuComponent.prototype.onToggleSubMenu = function (item) {
        if (this.autoCollapse) {
            this.menuInternalService.collapseAll(this.items, this.tag, item);
        }
        item.expanded = !item.expanded;
        this.menuInternalService.submenuToggle(item, this.tag);
    };
    // TODO: is not fired on page reload
    NbMenuComponent.prototype.onSelectItem = function (item) {
        this.menuInternalService.selectItem(item, this.items, this.autoCollapse, this.tag);
    };
    NbMenuComponent.prototype.onItemClick = function (item) {
        this.menuInternalService.itemClick(item, this.tag);
    };
    NbMenuComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    NbMenuComponent.prototype.navigateHome = function () {
        var homeItem = this.getHomeItem(this.items);
        if (homeItem) {
            if (homeItem.link) {
                this.router.navigate([homeItem.link], { queryParams: homeItem.queryParams, fragment: homeItem.fragment });
            }
            if (homeItem.url) {
                this.window.location.href = homeItem.url;
            }
        }
    };
    NbMenuComponent.prototype.collapseAll = function () {
        this.menuInternalService.collapseAll(this.items, this.tag);
    };
    NbMenuComponent.prototype.getHomeItem = function (items) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (item.home) {
                return item;
            }
            var homeItem = item.children && this.getHomeItem(item.children);
            if (homeItem) {
                return homeItem;
            }
        }
    };
    NbMenuComponent.prototype.compareTag = function (tag) {
        return !tag || tag === this.tag;
    };
    NbMenuComponent.prototype.getSelectedItem = function (items) {
        var _this = this;
        var selected = null;
        items.forEach(function (item) {
            if (item.selected) {
                selected = item;
            }
            if (item.selected && item.children && item.children.length > 0) {
                selected = _this.getSelectedItem(item.children);
            }
        });
        return selected;
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbMenuComponent.prototype, "tag", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Array)], NbMenuComponent.prototype, "items", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbMenuComponent.prototype, "autoCollapse", null);
    NbMenuComponent = __decorate([(0, _core.Component)({
        selector: 'nb-menu',
        styles: [":host /deep/ {display:block}:host /deep/ .menu-items,:host /deep/ .menu-item>.menu-items{list-style-type:none;overflow:hidden}:host /deep/ .menu-item a{display:flex;color:inherit;text-decoration:none;align-items:center}:host /deep/ .menu-item a .menu-title{flex:1 0 auto}[dir=rtl] :host /deep/ .menu-item a .menu-title{text-align:right}:host /deep/ .menu-group span{display:flex} "],
        template: "\n    <ul class=\"menu-items\">\n      <ng-container *ngFor=\"let item of items\">\n        <li nbMenuItem *ngIf=\"!item.hidden\"\n            [menuItem]=\"item\"\n            [class.menu-group]=\"item.group\"\n            (hoverItem)=\"onHoverItem($event)\"\n            (toggleSubMenu)=\"onToggleSubMenu($event)\"\n            (selectItem)=\"onSelectItem($event)\"\n            (itemClick)=\"onItemClick($event)\"\n            class=\"menu-item\">\n        </li>\n      </ng-container>\n    </ul>\n  "
    }), __param(0, (0, _core.Inject)(_theme.NB_WINDOW)), __metadata("design:paramtypes", [Object, _menu.NbMenuInternalService, _router.Router])], NbMenuComponent);
    return NbMenuComponent;
}();
exports.NbMenuComponent = NbMenuComponent;
//# sourceMappingURL=menu.component.js.map
//# sourceMappingURL=menu.component.js.map