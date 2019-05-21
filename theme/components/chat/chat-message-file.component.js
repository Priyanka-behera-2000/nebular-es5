"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbChatMessageFileComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _platformBrowser = require("@angular/platform-browser");

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

/**
 * Chat message component.
 */
var NbChatMessageFileComponent = /** @class */function () {
    function NbChatMessageFileComponent(cd, domSanitizer) {
        this.cd = cd;
        this.domSanitizer = domSanitizer;
    }
    Object.defineProperty(NbChatMessageFileComponent.prototype, "files", {
        /**
         * Message file path
         * @type {Date}
         */
        set: function set(files) {
            var _this = this;
            this.readyFiles = (files || []).map(function (file) {
                var isImage = _this.isImage(file);
                return __assign({}, file, { urlStyle: isImage && _this.domSanitizer.bypassSecurityTrustStyle("url(" + file.url + ")"), isImage: isImage });
            });
            this.cd.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    NbChatMessageFileComponent.prototype.isImage = function (file) {
        return ['image/png', 'image/jpeg', 'image/gif'].includes(file.type);
    };
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbChatMessageFileComponent.prototype, "message", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbChatMessageFileComponent.prototype, "sender", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Date)], NbChatMessageFileComponent.prototype, "date", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], NbChatMessageFileComponent.prototype, "files", null);
    NbChatMessageFileComponent = __decorate([(0, _core.Component)({
        selector: 'nb-chat-message-file',
        template: "\n    <nb-chat-message-text [sender]=\"sender\" [date]=\"date\" [message]=\"message\">\n      {{ message }}\n    </nb-chat-message-text>\n\n    <ng-container *ngIf=\"readyFiles?.length > 1\">\n      <div class=\"message-content-group\">\n        <a *ngFor=\"let file of readyFiles\" [href]=\"file.url\" target=\"_blank\">\n          <nb-icon [icon]=\"file.icon\" *ngIf=\"!file.urlStyle && file.icon\"></nb-icon>\n          <div *ngIf=\"file.urlStyle\" [style.background-image]=\"file.urlStyle\"></div>\n        </a>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"readyFiles?.length === 1\">\n      <a [href]=\"readyFiles[0].url\" target=\"_blank\">\n        <nb-icon [icon]=\"readyFiles[0].icon\" *ngIf=\"!readyFiles[0].urlStyle && readyFiles[0].icon\"></nb-icon>\n        <div *ngIf=\"readyFiles[0].urlStyle\" [style.background-image]=\"readyFiles[0].urlStyle\"></div>\n      </a>\n    </ng-container>\n  ",
        changeDetection: _core.ChangeDetectionStrategy.OnPush
    }), __metadata("design:paramtypes", [_core.ChangeDetectorRef, _platformBrowser.DomSanitizer])], NbChatMessageFileComponent);
    return NbChatMessageFileComponent;
}();
exports.NbChatMessageFileComponent = NbChatMessageFileComponent;
//# sourceMappingURL=chat-message-file.component.js.map
//# sourceMappingURL=chat-message-file.component.js.map