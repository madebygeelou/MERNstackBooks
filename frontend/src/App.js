"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./pages/Home"));
const CreateBooks_1 = __importDefault(require("./pages/CreateBooks"));
const ShowBook_1 = __importDefault(require("./pages/ShowBook"));
const EditBook_1 = __importDefault(require("./pages/EditBook"));
const DeleteBook_1 = __importDefault(require("./pages/DeleteBook"));
const App = () => {
    return (react_1.default.createElement(react_router_dom_1.Routes, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(Home_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/books/create', element: react_1.default.createElement(CreateBooks_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/books/details/:id', element: react_1.default.createElement(ShowBook_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/books/edit/:id', element: react_1.default.createElement(EditBook_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: '/books/delete/:id', element: react_1.default.createElement(DeleteBook_1.default, null) })));
};
exports.default = App;
