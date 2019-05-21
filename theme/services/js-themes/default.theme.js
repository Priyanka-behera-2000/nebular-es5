'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_THEME = undefined;

var _color = require('../color.helper');

var palette = {
    primary: '#8a7fff',
    success: '#40dc7e',
    info: '#4ca6ff',
    warning: '#ffa100',
    danger: '#ff4c6a'
};
var DEFAULT_THEME = exports.DEFAULT_THEME = {
    name: 'default',
    variables: {
        fontMain: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSecondary: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        bg: '#ffffff',
        fg: '#a4abb3',
        fgHeading: '#2a2a2a',
        fgText: '#3b3b3b',
        fgHighlight: '#41d974',
        layoutBg: '#ebeff5',
        separator: '#ebeef2',
        primary: palette.primary,
        success: palette.success,
        info: palette.info,
        warning: palette.warning,
        danger: palette.danger,
        primaryLight: _color.NbColorHelper.tint(palette.primary, 15),
        successLight: _color.NbColorHelper.tint(palette.success, 15),
        infoLight: _color.NbColorHelper.tint(palette.info, 15),
        warningLight: _color.NbColorHelper.tint(palette.warning, 15),
        dangerLight: _color.NbColorHelper.tint(palette.danger, 15)
    }
};
//# sourceMappingURL=default.theme.js.map
//# sourceMappingURL=default.theme.js.map