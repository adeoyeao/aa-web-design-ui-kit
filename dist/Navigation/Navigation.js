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
var polished_1 = require("polished");
var react_1 = require("react");
var Navigation = function (args) {
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    var _b = react_1.useState(args.activeLink), activeLink = _b[0], setActiveLink = _b[1];
    var changeVisible = function () {
        setVisible(!visible);
    };
    var handleClick = function (route) {
        setActiveLink(route);
        setVisible(false);
    };
    var StyledNavigation = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n\n        height: 70px;\n        width: 100vw;\n        position: fixed;\n        top: 0;\n        left: 0;\n        box-sizing: border-box;\n        border-bottom: 1px solid #E5E5E5;\n\n        background: ", ";\n        padding: ", ";\n\n        display: grid;\n        grid-gap: 2rem;\n        grid-template-columns: 1fr auto;\n\n        img {\n            height: 2rem;\n            align-self: center;\n            cursor: pointer;\n        }\n\n        .menuButton {\n            width: 1.25rem;\n            height: 1.25rem;\n            align-self: center;\n            appearance: none;\n            outline: none;\n            border: none;\n            cursor: pointer;\n            background-color: transparent;\n            background-image: ", ";\n            background-size: cover;\n        }\n\n        ul {\n            display: ", ";\n            flex-direction: column;\n            grid-gap: 1rem;\n            position: absolute;\n            top: 70px;\n            width: 100vw;\n\n            li {\n                list-style-type: none;\n                background: ", ";\n                padding-top: 1rem;\n                padding-bottom: 1rem;\n                text-align: center;\n\n                &:hover {\n                    background: ", ";\n\n                    button {\n                        color: ", ";\n                    }\n                }\n\n                button {\n                    appearance: none;\n                    outline: none;\n                    border: none;\n                    background: none;  \n                    cursor: pointer;\n                    color: ", ";\n                    height: 100%;\n                    width: 100%;\n                }\n            }\n\n            .active button {\n                color: ", ";\n                font-weight: bold;\n            }\n        }\n\n        @media screen and (min-width: 700px) {\n            grid-template-columns: ", ";\n\n            .menuButton {\n                display: none;\n            }\n\n            ul {\n                display: flex;\n                flex-direction: row;\n                grid-gap: 2rem;\n                align-self: center;\n                position: unset;\n                top: unset;\n                width: unset;\n\n                li {\n                    background: unset;\n                    padding-top: unset;\n                    padding-bottom: unset;\n                    position: relative;\n\n                    &:hover {\n                        background: unset;\n                        \n                        button {\n                            color: ", ";\n                        }\n                    }\n\n                    &::after {\n                        content: '';\n                        position: absolute;\n                        display: block;\n                        height: 4px;\n                        background: ", ";\n                        width: 0%;\n                        bottom: -26px;\n                        transition: width 0.5s ease-in-out;\n                    }\n\n                    &:hover::after {\n                        width: 100%;\n                    }\n                }\n            }\n        }\n    "], ["\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n\n        height: 70px;\n        width: 100vw;\n        position: fixed;\n        top: 0;\n        left: 0;\n        box-sizing: border-box;\n        border-bottom: 1px solid #E5E5E5;\n\n        background: ", ";\n        padding: ", ";\n\n        display: grid;\n        grid-gap: 2rem;\n        grid-template-columns: 1fr auto;\n\n        img {\n            height: 2rem;\n            align-self: center;\n            cursor: pointer;\n        }\n\n        .menuButton {\n            width: 1.25rem;\n            height: 1.25rem;\n            align-self: center;\n            appearance: none;\n            outline: none;\n            border: none;\n            cursor: pointer;\n            background-color: transparent;\n            background-image: ", ";\n            background-size: cover;\n        }\n\n        ul {\n            display: ", ";\n            flex-direction: column;\n            grid-gap: 1rem;\n            position: absolute;\n            top: 70px;\n            width: 100vw;\n\n            li {\n                list-style-type: none;\n                background: ", ";\n                padding-top: 1rem;\n                padding-bottom: 1rem;\n                text-align: center;\n\n                &:hover {\n                    background: ", ";\n\n                    button {\n                        color: ", ";\n                    }\n                }\n\n                button {\n                    appearance: none;\n                    outline: none;\n                    border: none;\n                    background: none;  \n                    cursor: pointer;\n                    color: ", ";\n                    height: 100%;\n                    width: 100%;\n                }\n            }\n\n            .active button {\n                color: ", ";\n                font-weight: bold;\n            }\n        }\n\n        @media screen and (min-width: 700px) {\n            grid-template-columns: ",
        ";\n\n            .menuButton {\n                display: none;\n            }\n\n            ul {\n                display: flex;\n                flex-direction: row;\n                grid-gap: 2rem;\n                align-self: center;\n                position: unset;\n                top: unset;\n                width: unset;\n\n                li {\n                    background: unset;\n                    padding-top: unset;\n                    padding-bottom: unset;\n                    position: relative;\n\n                    &:hover {\n                        background: unset;\n                        \n                        button {\n                            color: ", ";\n                        }\n                    }\n\n                    &::after {\n                        content: '';\n                        position: absolute;\n                        display: block;\n                        height: 4px;\n                        background: ", ";\n                        width: 0%;\n                        bottom: -26px;\n                        transition: width 0.5s ease-in-out;\n                    }\n\n                    &:hover::after {\n                        width: 100%;\n                    }\n                }\n            }\n        }\n    "])), function (props) { return props.backgroundColor; }, function (props) { return "0 " + props.paddingSide + "vw"; }, function (props) { return "url(" + props.menu + ")"; }, visible ? 'block' : 'none', function (props) { return polished_1.darken(0.2, props.backgroundColor); }, function (props) { return props.accentColor; }, function (props) { return props.white; }, function (props) { return polished_1.lighten(0.2, props.black); }, function (props) { return props.accentColor; }, function (props) {
        var alignment = {
            left: "auto 1fr",
            middle: "1fr auto 1fr",
            right: "1fr auto"
        };
        return alignment[props.align];
    }, function (props) { return polished_1.lighten(0.2, props.accentColor); }, function (props) { return polished_1.lighten(0.2, props.accentColor); });
    return (jsx_runtime_1.jsxs(StyledNavigation, __assign({}, args, { children: [jsx_runtime_1.jsx("img", { src: args.logo, alt: 'Company Logo' }, void 0),
            jsx_runtime_1.jsx("button", { className: 'menuButton', onClick: changeVisible }, void 0),
            jsx_runtime_1.jsx("ul", { children: args.links.map(function (link) { return (jsx_runtime_1.jsx("li", __assign({ className: activeLink === link.route ? "active" : "inactive" }, { children: jsx_runtime_1.jsx("button", __assign({ onClick: function () {
                            handleClick(link.route);
                            link.onClick(link.route);
                        } }, { children: link.name }), void 0) }), void 0)); }) }, void 0)] }), void 0));
};
exports.default = Navigation;
var templateObject_1;
