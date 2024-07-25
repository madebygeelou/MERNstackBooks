"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ai_1 = require("react-icons/ai");
const bs_1 = require("react-icons/bs");
const md_1 = require("react-icons/md");
const BooksTable = ({ books = [] }) => {
    // Ensure books is an array
    if (!Array.isArray(books)) {
        return react_1.default.createElement("div", null, "No books available");
    }
    return (react_1.default.createElement("table", { className: 'w-full border-separate border-spacing-2' },
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", { className: 'border border-slate-600 rounded-md' }, "No"),
                react_1.default.createElement("th", { className: 'border border-slate-600 rounded-md' }, "Title"),
                react_1.default.createElement("th", { className: 'border border-slate-600 rounded-md max-md:hidden' }, "Author"),
                react_1.default.createElement("th", { className: 'border border-slate-600 rounded-md max-md:hidden' }, "Publish Year"),
                react_1.default.createElement("th", { className: 'border border-slate-600 rounded-md' }, "Operations"))),
        react_1.default.createElement("tbody", null, books.map((book, index) => (react_1.default.createElement("tr", { key: book._id, className: 'h-8' },
            react_1.default.createElement("td", { className: 'border border-slate-700 rounded-md text-center' }, index + 1),
            react_1.default.createElement("td", { className: 'border border-slate-700 rounded-md text-center' }, book.title),
            react_1.default.createElement("td", { className: 'border border-slate-700 rounded-md text-center max-md:hidden' }, book.author),
            react_1.default.createElement("td", { className: 'border border-slate-700 rounded-md text-center max-md:hidden' }, book.publishYear),
            react_1.default.createElement("td", { className: 'border border-slate-700 rounded-md text-center' },
                react_1.default.createElement("div", { className: 'flex justify-center gap-x-4' },
                    react_1.default.createElement(react_router_dom_1.Link, { to: `/books/details/${book._id}` },
                        react_1.default.createElement(bs_1.BsInfoCircle, { className: 'text-2xl text-green-800' })),
                    react_1.default.createElement(react_router_dom_1.Link, { to: `/books/edit/${book._id}` },
                        react_1.default.createElement(ai_1.AiOutlineEdit, { className: 'text-2xl text-yellow-600' })),
                    react_1.default.createElement(react_router_dom_1.Link, { to: `/books/delete/${book._id}` },
                        react_1.default.createElement(md_1.MdOutlineDelete, { className: 'text-2xl text-red-600' }))))))))));
};
exports.default = BooksTable;
