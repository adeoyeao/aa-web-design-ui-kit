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
var Text = function (args) {
    var HeadingMain = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        font-size: ", ";\n        text-align: ", ";\n        line-height: 1.5;\n\n        @media screen and (min-width: 700px) {\n            font-size: ", ";\n        }\n\n        @media screen and (min-width: 1200px) {\n            font-size: ", ";\n        }\n    "], ["\n        font-size: ", ";\n        text-align: ", ";\n        line-height: 1.5;\n\n        @media screen and (min-width: 700px) {\n            font-size: ", ";\n        }\n\n        @media screen and (min-width: 1200px) {\n            font-size: ", ";\n        }\n    "])), function (props) { return 2 * props.fontSize + "rem"; }, function (props) { return props.align; }, function (props) { return 3 * props.fontSize + "rem"; }, function (props) { return 4.5 * props.fontSize + "rem"; });
    var HeadingSection = styled_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        font-size: ", ";\n        text-align: ", ";\n        line-height: 1.5;\n\n        @media screen and (min-width: 700px) {\n            font-size: ", ";\n        }    \n    "], ["\n        font-size: ", ";\n        text-align: ", ";\n        line-height: 1.5;\n\n        @media screen and (min-width: 700px) {\n            font-size: ", ";\n        }    \n    "])), function (props) { return 1.5 * props.fontSize + "rem"; }, function (props) { return props.align; }, function (props) { return 2 * props.fontSize + "rem"; });
    var HeadingSubTitle = styled_components_1.default.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        font-size: ", ";\n        text-align: ", ";\n        line-height: 1.5;\n    "], ["\n        font-size: ", ";\n        text-align: ", ";\n        line-height: 1.5;\n    "])), function (props) { return 1.2 * props.fontSize + "rem"; }, function (props) { return props.align; });
    var Paragraph = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        font-size: ", ";\n        text-align: ", ";\n        line-height: 1.5;\n\n        @media screen and (min-width: 700px) {\n            font-size: ", ";\n        }\n    "], ["\n        font-size: ", ";\n        text-align: ", ";\n        line-height: 1.5;\n\n        @media screen and (min-width: 700px) {\n            font-size: ", ";\n        }\n    "])), function (props) { return 0.8 * props.fontSize + "rem"; }, function (props) { return props.align; }, function (props) { return props.fontSize + "rem"; });
    var TextOptions = {
        heading: jsx_runtime_1.jsx(HeadingMain, __assign({}, args, { children: args.content }), void 0),
        headingSection: jsx_runtime_1.jsx(HeadingSection, __assign({}, args, { children: args.content }), void 0),
        headingSubTitle: jsx_runtime_1.jsx(HeadingSubTitle, __assign({}, args, { children: args.content }), void 0),
        paragraph: jsx_runtime_1.jsx(Paragraph, __assign({}, args, { children: args.content }), void 0),
    };
    return (TextOptions[args.option]);
};
exports.default = Text;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
