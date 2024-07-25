"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BookSingleCard_1 = __importDefault(require("./BookSingleCard"));
const BooksCard = ({ books = [] }) => {
    // Ensure books is an array
    if (!Array.isArray(books)) {
        return react_1.default.createElement("div", null, "No books available");
    }
    return (react_1.default.createElement("div", { className: 'grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' }, books.map((item) => (react_1.default.createElement(BookSingleCard_1.default, { key: item._id, book: item })))));
};
exports.default = BooksCard;
