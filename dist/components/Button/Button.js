"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var Button = function (args) {
    var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        appearance: none;\n        outline: none;\n        cursor: pointer;\n        margin: 0;\n        padding: 1rem 2rem;\n        border-radius: ", ";\n        border: ", ";\n        background: ", ";\n        color: ", ";\n        width: ", ";\n        &:hover {\n            border: none;\n            background: ", ";\n            color: ", ";\n        }\n    "], ["\n        appearance: none;\n        outline: none;\n        cursor: pointer;\n        margin: 0;\n        padding: 1rem 2rem;\n        border-radius: ",
        ";\n        border: ", ";\n        background: ", ";\n        color: ", ";\n        width: ",
        ";\n        &:hover {\n            border: none;\n            background: ", ";\n            color: ", ";\n        }\n    "])), function (props) {
        var cornerTypes = {
            default: '0rem',
            round: '0.5rem',
            pill: '10rem'
        };
        return cornerTypes[props.cornerType] || cornerTypes.default;
    }, function (props) { return props.primary ? 'none' : "1px solid " + props.black; }, function (props) { return props.primary ? props.backgroundColor : 'transparent'; }, function (props) { return props.primary ? props.white : props.black; }, function (props) {
        var buttonWidths = {
            small: '7.5rem',
            default: '10rem',
            large: '12.5rem'
        };
        return buttonWidths[props.size] || buttonWidths.default;
    }, function (props) { return props.primary ? props.accentColor : props.backgroundColor; }, function (props) { return props.white; });
    return (jsx_runtime_1.jsx(StyledButton, __assign({}, args, { children: args.label }), void 0));
};
exports.default = Button;
var templateObject_1;
