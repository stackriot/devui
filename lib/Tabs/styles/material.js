'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex: 0 0 1;\n  padding-left: 1px;\n  background-color: ', ';\n  width: 100%;\n  overflow: hidden;\n  ', '\n\n  > div {\n    display: flex;\n    align-items: flex-end;\n    flex-wrap: nowrap;\n\n    button {\n      background-color: ', ';\n      color: ', ';\n      min-height: 30px;\n      padding: 0 2em;\n      ', '\n      cursor: pointer;\n      border: none;\n      border-bottom: 2px solid transparent;\n      text-align: center;\n      overflow: hidden;\n      outline: 0;\n      transition: all 0.5s;\n\n      &:hover,\n      &:focus {\n        border-bottom: 2px solid ', ';\n        color: ', ';\n      }\n      &.collapsed{\n        display: none;\n      }\n\n      ', '\n    }\n\n    > [data-selected] {\n      border-bottom: 2px solid ', ';\n    }\n  }\n  > div:nth-child(2) {\n    display: block;\n    z-index: 10;\n\n    button {\n      display: block;\n      background: ', ';\n      width: 100%;\n    }\n  }\n'], ['\n  display: flex;\n  flex: 0 0 1;\n  padding-left: 1px;\n  background-color: ', ';\n  width: 100%;\n  overflow: hidden;\n  ', '\n\n  > div {\n    display: flex;\n    align-items: flex-end;\n    flex-wrap: nowrap;\n\n    button {\n      background-color: ', ';\n      color: ', ';\n      min-height: 30px;\n      padding: 0 2em;\n      ', '\n      cursor: pointer;\n      border: none;\n      border-bottom: 2px solid transparent;\n      text-align: center;\n      overflow: hidden;\n      outline: 0;\n      transition: all 0.5s;\n\n      &:hover,\n      &:focus {\n        border-bottom: 2px solid ', ';\n        color: ', ';\n      }\n      &.collapsed{\n        display: none;\n      }\n\n      ', '\n    }\n\n    > [data-selected] {\n      border-bottom: 2px solid ', ';\n    }\n  }\n  > div:nth-child(2) {\n    display: block;\n    z-index: 10;\n\n    button {\n      display: block;\n      background: ', ';\n      width: 100%;\n    }\n  }\n']);

var _styledComponents = require('styled-components');

var _animations = require('../../utils/animations');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var style = exports.style = function style(_ref) {
  var theme = _ref.theme,
      main = _ref.main;
  return (0, _styledComponents.css)(_templateObject, theme.base01, !main && '\n  border-top: 1px solid ' + theme.base01 + ';\n  border-bottom: 1px solid ' + theme.base02 + ';\n  ', theme.base01, theme.base07, main && 'text-transform: uppercase;', theme.base03, theme.base04, (0, _animations.ripple)(theme), theme.base0D, theme.base00);
};