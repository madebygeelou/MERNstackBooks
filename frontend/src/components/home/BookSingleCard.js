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
const react_router_dom_1 = require("react-router-dom");
const pi_1 = require("react-icons/pi");
const bi_1 = require("react-icons/bi");
const ai_1 = require("react-icons/ai");
const bs_1 = require("react-icons/bs");
const md_1 = require("react-icons/md");
const BookModal_tsx_1 = __importDefault(require("../BookModal.tsx"));
const BookSingleCard = ({ book }) => {
    const [showModal, setShowModal] = (0, react_1.useState)(false);
    if (!book) {
        return react_1.default.createElement("div", null, "No book data available");
    }
    return (react_1.default.createElement("div", { className: 'border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl' },
        react_1.default.createElement("h2", { className: 'absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg' }, book.publishYear),
        react_1.default.createElement("h4", { className: 'my-2 text-gray-500' }, book._id),
        react_1.default.createElement("div", { className: 'flex justify-start items-center gap-x-2' },
            react_1.default.createElement(pi_1.PiBookOpenTextLight, { className: 'text-red-300 text-2xl' }),
            react_1.default.createElement("h2", { className: 'my-1' }, book.title)),
        react_1.default.createElement("div", { className: 'flex justify-start items-center gap-x-2' },
            react_1.default.createElement(bi_1.BiUserCircle, { className: 'text-red-300 text-2xl' }),
            react_1.default.createElement("h2", { className: 'my-1' }, book.author)),
        react_1.default.createElement("div", { className: 'flex justify-between items-center gap-x-2 mt-4 p-4' },
            react_1.default.createElement(bi_1.BiShow, { className: 'text-3xl text-blue-800 hover:text-black cursor-pointer', onClick: () => setShowModal(true) }),
            react_1.default.createElement(react_router_dom_1.Link, { to: `/books/details/${book._id}` },
                react_1.default.createElement(bs_1.BsInfoCircle, { className: 'text-2xl text-green-800 hover:text-black' })),
            react_1.default.createElement(react_router_dom_1.Link, { to: `/books/edit/${book._id}` },
                react_1.default.createElement(ai_1.AiOutlineEdit, { className: 'text-2xl text-yellow-600 hover:text-black' })),
            react_1.default.createElement(react_router_dom_1.Link, { to: `/books/delete/${book._id}` },
                react_1.default.createElement(md_1.MdOutlineDelete, { className: 'text-2xl text-red-600 hover:text-black' }))),
        showModal && (react_1.default.createElement(BookModal_tsx_1.default, { book: book, onClose: () => setShowModal(false) }))));
};
BookSingleCard.defaultProps = {
    book: null,
};
exports.default = BookSingleCard;
