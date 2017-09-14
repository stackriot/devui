'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  position: fixed;\n  top: ', 'px;\n  left: ', 'px;\n  font-size: 14px;\n  color: ', ';\n  cursor: pointer;\n  display: block;\n  line-height: ', 'px;\n  border: 1px solid ', ';\n\n  button {\n    box-sizing: border-box;\n    background-color: ', ';\n    color: ', ';\n    cursor: pointer;\n    display: block;\n    padding: ', 'px;\n    line-height: ', 'px;\n    border: none;\n    white-space: nowrap;\n\n    &:hover {\n      background-color: ', ';\n      color: ', ';\n    }\n    &:focus {\n      outline:0;\n    }\n  }\n'], ['\n  ', '\n  position: fixed;\n  top: ', 'px;\n  left: ', 'px;\n  font-size: 14px;\n  color: ', ';\n  cursor: pointer;\n  display: block;\n  line-height: ', 'px;\n  border: 1px solid ', ';\n\n  button {\n    box-sizing: border-box;\n    background-color: ', ';\n    color: ', ';\n    cursor: pointer;\n    display: block;\n    padding: ', 'px;\n    line-height: ', 'px;\n    border: none;\n    white-space: nowrap;\n\n    &:hover {\n      background-color: ', ';\n      color: ', ';\n    }\n    &:focus {\n      outline:0;\n    }\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function (_ref) {
  var theme = _ref.theme,
      left = _ref.left,
      top = _ref.top,
      visible = _ref.visible;
  return (0, _styledComponents.css)(_templateObject, visible ? '\n    visibility: visible;\n    opacity: 1;\n    transition: opacity 0.2s linear;\n    ' : '\n    visibility: hidden;\n    opacity: 0;\n    transition: visibility 0s 0.2s, opacity 0.2s linear;\n  ', top, left, theme.base07, theme.inputInternalHeight / 2, theme.base02, theme.base00, theme.base07, theme.inputHeight / 3, theme.inputInternalHeight / 2, theme.base02, theme.base07);
};