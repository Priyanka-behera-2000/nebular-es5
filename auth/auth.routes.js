'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routes = undefined;

var _auth = require('./components/auth.component');

var _login = require('./components/login/login.component');

var _register = require('./components/register/register.component');

var _logout = require('./components/logout/logout.component');

var _requestPassword = require('./components/request-password/request-password.component');

var _resetPassword = require('./components/reset-password/reset-password.component');

var routes = exports.routes = [{
    path: 'auth',
    component: _auth.NbAuthComponent,
    children: [{
        path: '',
        component: _login.NbLoginComponent
    }, {
        path: 'login',
        component: _login.NbLoginComponent
    }, {
        path: 'register',
        component: _register.NbRegisterComponent
    }, {
        path: 'logout',
        component: _logout.NbLogoutComponent
    }, {
        path: 'request-password',
        component: _requestPassword.NbRequestPasswordComponent
    }, {
        path: 'reset-password',
        component: _resetPassword.NbResetPasswordComponent
    }]
}];
//# sourceMappingURL=auth.routes.js.map
//# sourceMappingURL=auth.routes.js.map