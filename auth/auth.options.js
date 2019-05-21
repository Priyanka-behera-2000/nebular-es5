'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NB_AUTH_TOKEN_INTERCEPTOR_FILTER = exports.NB_AUTH_INTERCEPTOR_HEADER = exports.NB_AUTH_TOKENS = exports.NB_AUTH_STRATEGIES = exports.NB_AUTH_USER_OPTIONS = exports.NB_AUTH_OPTIONS = exports.defaultAuthOptions = undefined;

var _core = require('@angular/core');

var socialLinks = [];
var defaultAuthOptions = exports.defaultAuthOptions = {
    strategies: [],
    forms: {
        login: {
            redirectDelay: 500,
            strategy: 'email',
            rememberMe: true,
            showMessages: {
                success: true,
                error: true
            },
            socialLinks: socialLinks
        },
        register: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true
            },
            terms: true,
            socialLinks: socialLinks
        },
        requestPassword: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true
            },
            socialLinks: socialLinks
        },
        resetPassword: {
            redirectDelay: 500,
            strategy: 'email',
            showMessages: {
                success: true,
                error: true
            },
            socialLinks: socialLinks
        },
        logout: {
            redirectDelay: 500,
            strategy: 'email'
        },
        validation: {
            password: {
                required: true,
                minLength: 4,
                maxLength: 50
            },
            email: {
                required: true
            },
            fullName: {
                required: false,
                minLength: 4,
                maxLength: 50
            }
        }
    }
};
var NB_AUTH_OPTIONS = exports.NB_AUTH_OPTIONS = new _core.InjectionToken('Nebular Auth Options');
var NB_AUTH_USER_OPTIONS = exports.NB_AUTH_USER_OPTIONS = new _core.InjectionToken('Nebular User Auth Options');
var NB_AUTH_STRATEGIES = exports.NB_AUTH_STRATEGIES = new _core.InjectionToken('Nebular Auth Strategies');
var NB_AUTH_TOKENS = exports.NB_AUTH_TOKENS = new _core.InjectionToken('Nebular Auth Tokens');
var NB_AUTH_INTERCEPTOR_HEADER = exports.NB_AUTH_INTERCEPTOR_HEADER = new _core.InjectionToken('Nebular Simple Interceptor Header');
var NB_AUTH_TOKEN_INTERCEPTOR_FILTER = exports.NB_AUTH_TOKEN_INTERCEPTOR_FILTER = new _core.InjectionToken('Nebular Interceptor Filter');
//# sourceMappingURL=auth.options.js.map
//# sourceMappingURL=auth.options.js.map