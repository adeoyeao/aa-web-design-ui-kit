"use strict";
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
exports.CTA = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = __importDefault(require("../Button"));
exports.default = {
    title: 'Components/Button',
    component: Button_1.default,
    argTypes: {
        backgroundColor: { control: 'color' },
        white: { control: 'color' },
        black: { control: 'color' },
        accentColor: { control: 'color' },
    },
};
var Template = function (args) { return jsx_runtime_1.jsx(Button_1.default, __assign({}, args), void 0); };
exports.CTA = Template.bind({});
exports.CTA.args = {
    primary: true,
    backgroundColor: 'blue',
    accentColor: 'orange',
    white: 'white',
    black: 'black',
    size: 'default',
    label: 'Primary',
};
