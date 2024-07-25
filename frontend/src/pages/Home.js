"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const Spinner_1 = __importDefault(require("../components/Spinner"));
const react_router_dom_1 = require("react-router-dom");
const md_1 = require("react-icons/md");
const BooksTable_1 = __importDefault(require("../components/home/BooksTable"));
const BooksCard_1 = __importDefault(require("../components/home/BooksCard"));
const Home = () => {
    const [books, setBooks] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [showType, setShowType] = (0, react_1.useState)('table');
    (0, react_1.useEffect)(() => {
        setLoading(true);
        axios_1.default
            .get('http://localhost:5555/books')
            .then((response) => {
            setBooks(response.data.data);
            setLoading(false);
        })
            .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, []);
    return (react_1.default.createElement("div", { className: 'p-4' },
        react_1.default.createElement("div", { className: 'flex justify-center items-center gap-x-4' },
            react_1.default.createElement("button", { className: 'bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg', onClick: () => setShowType('table') }, "Table"),
            react_1.default.createElement("button", { className: 'bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg', onClick: () => setShowType('card') }, "Card")),
        react_1.default.createElement("div", { className: 'flex justify-between items-center' },
            react_1.default.createElement("h1", { className: 'text-3xl my-8' }, "Books List"),
            react_1.default.createElement(react_router_dom_1.Link, { to: '/books/create' },
                react_1.default.createElement(md_1.MdOutlineAddBox, { className: 'text-sky-800 text-4xl' }))),
        loading ? (react_1.default.createElement(Spinner_1.default, null)) : showType === 'table' ? (react_1.default.createElement(BooksTable_1.default, { books: books })) : (react_1.default.createElement(BooksCard_1.default, { books: books }))));
};
exports.default = Home;
