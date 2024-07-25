"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const App_1 = __importDefault(require("./App"));
require("./index.css");
const react_router_dom_1 = require("react-router-dom");
const notistack_1 = require("notistack");
const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}
const root = client_1.default.createRoot(rootElement);
root.render(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
    react_1.default.createElement(notistack_1.SnackbarProvider, null,
        react_1.default.createElement(App_1.default, null))));
