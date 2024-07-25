"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const bs_1 = require("react-icons/bs");
const BackButton = ({ destination = '/' }) => {
    return (react_1.default.createElement("div", { className: 'flex' },
        react_1.default.createElement(react_router_dom_1.Link, { to: destination, className: 'bg-sky-800 text-white px-4 py-1 rounded-lg w-fit' },
            react_1.default.createElement(bs_1.BsArrowLeft, { className: 'text-2xl' }))));
};
exports.default = BackButton;
