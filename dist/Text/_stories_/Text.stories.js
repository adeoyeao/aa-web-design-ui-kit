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
exports.Paragraph = exports.HeadingSubTitle = exports.HeadingSection = exports.Heading = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Text_1 = __importDefault(require("../Text"));
exports.default = {
    title: "Components/Text",
    component: Text_1.default,
    argTypes: {
        option: { control: {
                type: 'radio',
                options: ['heading', 'headingSection', 'headingSubTitle', 'paragraph']
            } },
        align: { control: {
                type: 'radio',
                options: ['left', 'center']
            } },
        fontSize: { control: {
                type: 'number'
            } }
    },
};
var Template = function (args) { return jsx_runtime_1.jsx(Text_1.default, __assign({}, args), void 0); };
exports.Heading = Template.bind({});
exports.Heading.args = {
    option: 'heading',
    content: 'Heading',
    fontSize: 1,
};
exports.HeadingSection = Template.bind({});
exports.HeadingSection.args = {
    option: 'headingSection',
    content: 'Section Heading',
    fontSize: 1,
};
exports.HeadingSubTitle = Template.bind({});
exports.HeadingSubTitle.args = {
    option: 'headingSubTitle',
    content: 'Sub Title Heading',
    fontSize: 1,
};
exports.Paragraph = Template.bind({});
exports.Paragraph.args = {
    option: 'paragraph',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    fontSize: 1,
};
