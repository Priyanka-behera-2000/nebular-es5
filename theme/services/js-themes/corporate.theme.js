'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CORPORATE_THEME = undefined;

var _color = require('../color.helper');

var palette = {
    primary: '#73a1ff',
    success: '#5dcfe3',
    info: '#ba7fec',
    warning: '#ffa36b',
    danger: '#ff6b83'
};
var CORPORATE_THEME = exports.CORPORATE_THEME = {
    name: 'corporate',
    base: 'default',
    variables: {
        fg: '#f1f5f8',
        bg: '#ffffff',
        fgHeading: '#181818',
        fgText: '#4b4b4b',
        fgHighlight: '#a4abb3',
        layoutBg: '#f1f5f8',
        separator: '#cdd5dc',
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
//# sourceMappingURL=corporate.theme.js.map
//# sourceMappingURL=corporate.theme.js.map