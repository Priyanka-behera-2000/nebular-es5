'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.COSMIC_THEME = undefined;

var _color = require('../color.helper');

var palette = {
    primary: '#7659ff',
    success: '#00d977',
    info: '#0088ff',
    warning: '#ffa100',
    danger: '#ff386a'
};
var COSMIC_THEME = exports.COSMIC_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        bg: '#3d3780',
        fg: '#a1a1e5',
        fgHeading: '#ffffff',
        fgText: '#d1d1ff',
        fgHighlight: '#00f9a6',
        layoutBg: '#2f296b',
        separator: '#342e73',
        primary: palette.primary,
        success: palette.success,
        info: palette.info,
        warning: palette.warning,
        danger: palette.danger,
        primaryLight: _color.NbColorHelper.tint(palette.primary, 20),
        successLight: _color.NbColorHelper.tint(palette.success, 20),
        infoLight: _color.NbColorHelper.tint(palette.info, 20),
        warningLight: _color.NbColorHelper.tint(palette.warning, 20),
        dangerLight: _color.NbColorHelper.tint(palette.danger, 20)
    }
};
//# sourceMappingURL=cosmic.theme.js.map
//# sourceMappingURL=cosmic.theme.js.map