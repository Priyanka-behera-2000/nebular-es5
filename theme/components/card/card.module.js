"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbCardModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _shared = require("../shared/shared.module");

var _icon = require("../icon/icon.module");

var _card = require("./card.component");

var _revealCard = require("./reveal-card/reveal-card.component");

var _flipCard = require("./flip-card/flip-card.component");

var _shared2 = require("./shared/shared.component");

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

var NB_CARD_COMPONENTS = [_card.NbCardComponent, _card.NbCardBodyComponent, _card.NbCardFooterComponent, _card.NbCardHeaderComponent, _revealCard.NbRevealCardComponent, _flipCard.NbFlipCardComponent, _shared2.NbCardFrontComponent, _shared2.NbCardBackComponent];
var NbCardModule = /** @class */function () {
    function NbCardModule() {}
    NbCardModule = __decorate([(0, _core.NgModule)({
        imports: [_shared.NbSharedModule, _icon.NbIconModule],
        declarations: NB_CARD_COMPONENTS.slice(),
        exports: NB_CARD_COMPONENTS.slice()
    })], NbCardModule);
    return NbCardModule;
}();
exports.NbCardModule = NbCardModule;
//# sourceMappingURL=card.module.js.map
//# sourceMappingURL=card.module.js.map