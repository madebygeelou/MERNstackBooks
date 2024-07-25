"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Spinner = () => {
    return (react_1.default.createElement("div", { className: 'animate-ping w-16 h-16 m-8 rounded-full bg-sky-600' }));
};
exports.default = Spinner;
