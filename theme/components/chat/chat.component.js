"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NbChatComponent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _helpers = require("../helpers");

var _chatForm = require("./chat-form.component");

var _chatMessage = require("./chat-message.component");

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
 * Conversational UI collection - a set of components for chat-like UI construction.
 *
 * Main features:
 * - different message types support (text, image, file, file group, map, etc)
 * - drag & drop for images and files with preview
 * - different UI styles
 * - custom action buttons (coming soon)
 *
 * Here's a complete example build in a bot-like app. Type `help` to be able to receive different message types.
 * Enjoy the conversation and the beautiful UI.
 * @stacked-example(Showcase, chat/chat-showcase.component)
 *
 * Basic chat configuration and usage:
 * ```ts
 * <nb-chat title="Nebular Conversational UI">
 *       <nb-chat-message *ngFor="let msg of messages"
 *                        [type]="msg.type"
 *                        [message]="msg.text"
 *                        [reply]="msg.reply"
 *                        [sender]="msg.user.name"
 *                        [date]="msg.date"
 *                        [files]="msg.files"
 *                        [quote]="msg.quote"
 *                        [latitude]="msg.latitude"
 *                        [longitude]="msg.longitude"
 *                        [avatar]="msg.user.avatar">
 *   </nb-chat-message>
 *
 *   <nb-chat-form (send)="sendMessage($event)" [dropFiles]="true">
 *   </nb-chat-form>
 * </nb-chat>
 * ```
 * ### Installation
 *
 * Import `NbChatModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbChatModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * If you need to provide an API key for a `map` message type (which is required by Google Maps)
 * you may use `NbChatModule.forRoot({ ... })` call if this is a global app configuration
 * or `NbChatModule.forChild({ ... })` for a feature module configuration:
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbChatModule.forRoot({ messageGoogleMapKey: 'MAP_KEY' }),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * There are three main components:
 * ```ts
 * <nb-chat>
 * </nb-chat> // chat container
 *
 * <nb-chat-form>
 * </nb-chat-form> // chat form with drag&drop files feature
 *
 * <nb-chat-message>
 * </nb-chat-message> // chat message, available multiple types
 * ```
 *
 * Two users conversation showcase:
 * @stacked-example(Conversation, chat/chat-conversation-showcase.component)
 *
 * Chat UI is also available in different colors by specifying a `[status]` input:
 *
 * @stacked-example(Colored Chat, chat/chat-colors.component)
 *
 * Also it is possible to configure sizes through `[size]` input:
 *
 * @stacked-example(Chat Sizes, chat/chat-sizes.component)
 *
 * @styles
 *
 * chat-background-color:
 * chat-border:
 * chat-border-radius:
 * chat-shadow:
 * chat-padding:
 * chat-text-color:
 * chat-text-font-family:
 * chat-text-font-size:
 * chat-text-font-weight:
 * chat-text-line-height:
 * chat-header-text-color:
 * chat-header-text-font-family:
 * chat-header-text-font-size:
 * chat-header-text-font-weight:
 * chat-header-text-line-height:
 * chat-tiny-height:
 * chat-small-height:
 * chat-medium-height:
 * chat-large-height:
 * chat-giant-height:
 * chat-primary-background-color:
 * chat-primary-text-color:
 * chat-success-background-color:
 * chat-success-text-color:
 * chat-info-background-color:
 * chat-info-text-color:
 * chat-warning-background-color:
 * chat-warning-text-color:
 * chat-danger-background-color:
 * chat-danger-text-color:
 * chat-divider-color:
 * chat-divider-style:
 * chat-divider-width:
 */
var NbChatComponent = /** @class */function () {
    function NbChatComponent() {
        this._scrollBottom = true;
    }
    Object.defineProperty(NbChatComponent.prototype, "scrollBottom", {
        /**
         * Scroll chat to the bottom of the list when a new message arrives
         */
        get: function get() {
            return this._scrollBottom;
        },
        set: function set(value) {
            this._scrollBottom = (0, _helpers.convertToBoolProperty)(value);
        },
        enumerable: true,
        configurable: true
    });
    NbChatComponent.prototype.ngOnChanges = function (changes) {
        if ('status' in changes) {
            this.updateFormStatus();
        }
    };
    NbChatComponent.prototype.ngAfterContentInit = function () {
        this.updateFormStatus();
    };
    NbChatComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.messages.changes.subscribe(function (messages) {
            _this.messages = messages;
            _this.updateView();
        });
        this.updateView();
    };
    NbChatComponent.prototype.updateView = function () {
        if (this.scrollBottom) {
            this.scrollListBottom();
        }
    };
    NbChatComponent.prototype.scrollListBottom = function () {
        this.scrollable.nativeElement.scrollTop = this.scrollable.nativeElement.scrollHeight;
    };
    NbChatComponent.prototype.updateFormStatus = function () {
        if (this.chatForm) {
            this.chatForm.setStatus(this.status);
        }
    };
    Object.defineProperty(NbChatComponent.prototype, "tiny", {
        get: function get() {
            return this.size === 'tiny';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "small", {
        get: function get() {
            return this.size === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "medium", {
        get: function get() {
            return this.size === 'medium';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "large", {
        get: function get() {
            return this.size === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "giant", {
        get: function get() {
            return this.size === 'giant';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "primary", {
        get: function get() {
            return this.status === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "success", {
        get: function get() {
            return this.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "info", {
        get: function get() {
            return this.status === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "warning", {
        get: function get() {
            return this.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbChatComponent.prototype, "danger", {
        get: function get() {
            return this.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbChatComponent.prototype, "title", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbChatComponent.prototype, "size", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", String)], NbChatComponent.prototype, "status", void 0);
    __decorate([(0, _core.Input)(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], NbChatComponent.prototype, "scrollBottom", null);
    __decorate([(0, _core.ViewChild)('scrollable'), __metadata("design:type", _core.ElementRef)], NbChatComponent.prototype, "scrollable", void 0);
    __decorate([(0, _core.ContentChildren)(_chatMessage.NbChatMessageComponent), __metadata("design:type", _core.QueryList)], NbChatComponent.prototype, "messages", void 0);
    __decorate([(0, _core.ContentChild)(_chatForm.NbChatFormComponent), __metadata("design:type", _chatForm.NbChatFormComponent)], NbChatComponent.prototype, "chatForm", void 0);
    __decorate([(0, _core.HostBinding)('class.size-tiny'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbChatComponent.prototype, "tiny", null);
    __decorate([(0, _core.HostBinding)('class.size-small'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbChatComponent.prototype, "small", null);
    __decorate([(0, _core.HostBinding)('class.size-medium'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbChatComponent.prototype, "medium", null);
    __decorate([(0, _core.HostBinding)('class.size-large'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbChatComponent.prototype, "large", null);
    __decorate([(0, _core.HostBinding)('class.size-giant'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbChatComponent.prototype, "giant", null);
    __decorate([(0, _core.HostBinding)('class.status-primary'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbChatComponent.prototype, "primary", null);
    __decorate([(0, _core.HostBinding)('class.status-success'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbChatComponent.prototype, "success", null);
    __decorate([(0, _core.HostBinding)('class.status-info'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbChatComponent.prototype, "info", null);
    __decorate([(0, _core.HostBinding)('class.status-warning'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbChatComponent.prototype, "warning", null);
    __decorate([(0, _core.HostBinding)('class.status-danger'), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], NbChatComponent.prototype, "danger", null);
    NbChatComponent = __decorate([(0, _core.Component)({
        selector: 'nb-chat',
        styles: [":host{display:flex;flex-direction:column;position:relative;height:100%} "],
        template: "\n    <div class=\"header\">{{ title }}</div>\n    <div class=\"scrollable\" #scrollable>\n      <div class=\"messages\">\n        <ng-content select=\"nb-chat-message\"></ng-content>\n        <p class=\"no-messages\" *ngIf=\"!messages?.length\">No messages yet.</p>\n      </div>\n    </div>\n    <div class=\"form\">\n      <ng-content select=\"nb-chat-form\"></ng-content>\n    </div>\n  "
    })], NbChatComponent);
    return NbChatComponent;
}();
exports.NbChatComponent = NbChatComponent;
//# sourceMappingURL=chat.component.js.map
//# sourceMappingURL=chat.component.js.map