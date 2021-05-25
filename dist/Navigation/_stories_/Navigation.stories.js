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
exports.Primary = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Navigation_1 = __importDefault(require("../Navigation"));
exports.default = {
    title: 'Components/Navigation',
    component: Navigation_1.default,
    argTypes: {
        backgroundColor: { control: 'color' },
        accentColor: { control: 'color' },
        white: { control: 'color' },
        black: { control: 'color' },
    },
};
var Template = function (args) { return jsx_runtime_1.jsx(Navigation_1.default, __assign({}, args), void 0); };
var handleClick = function (route) { return alert(route); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    backgroundColor: 'white',
    accentColor: 'blue',
    paddingSide: 10,
    align: 'middle',
    activeLink: 'about',
    links: [
        { name: 'about', route: 'about', onClick: handleClick },
        { name: 'projects', route: 'projects', onClick: handleClick },
        { name: 'contact', route: 'contact', onClick: handleClick },
    ],
    logo: 'https://1000logos.net/wp-content/uploads/2017/02/ig-logo.png',
    menu: 'https://static.thenounproject.com/png/659803-200.png',
    visible: true,
    white: 'white',
    black: 'black',
};
