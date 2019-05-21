"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbAccordionModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _common = require("@angular/common");

var _icon = require("../icon/icon.module");

var _accordion = require("./accordion.component");

var _accordionItem = require("./accordion-item.component");

var _accordionItemHeader = require("./accordion-item-header.component");

var _accordionItemBody = require("./accordion-item-body.component");

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

var NB_ACCORDION_COMPONENTS = [_accordion.NbAccordionComponent, _accordionItem.NbAccordionItemComponent, _accordionItemHeader.NbAccordionItemHeaderComponent, _accordionItemBody.NbAccordionItemBodyComponent];
var NbAccordionModule = /** @class */function () {
    function NbAccordionModule() {}
    NbAccordionModule = __decorate([(0, _core.NgModule)({
        imports: [_common.CommonModule, _icon.NbIconModule],
        exports: NB_ACCORDION_COMPONENTS.slice(),
        declarations: NB_ACCORDION_COMPONENTS.slice(),
        providers: []
    })], NbAccordionModule);
    return NbAccordionModule;
}();
exports.NbAccordionModule = NbAccordionModule;
//# sourceMappingURL=accordion.module.js.map
//# sourceMappingURL=accordion.module.js.map