"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ai_1 = require("react-icons/ai");
const pi_1 = require("react-icons/pi");
const bi_1 = require("react-icons/bi");
const BookModal = ({ book, onClose }) => {
    // Ensure book is defined
    if (!book) {
        return null;
    }
    return (react_1.default.createElement("div", { className: 'fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center', onClick: onClose },
        react_1.default.createElement("div", { onClick: (event) => event.stopPropagation(), className: 'w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative' },
            react_1.default.createElement(ai_1.AiOutlineClose, { className: 'absolute right-6 top-6 text-3xl text-red-600 cursor-pointer', onClick: onClose }),
            react_1.default.createElement("h2", { className: 'w-fit px-4 py-1 bg-red-300 rounded-lg' }, book.publishYear),
            react_1.default.createElement("h4", { className: 'my-2 text-gray-500' }, book._id),
            react_1.default.createElement("div", { className: 'flex justify-start items-center gap-x-2' },
                react_1.default.createElement(pi_1.PiBookOpenTextLight, { className: 'text-red-300 text-2xl' }),
                react_1.default.createElement("h2", { className: 'my-1' }, book.title)),
            react_1.default.createElement("div", { className: 'flex justify-start items-center gap-x-2' },
                react_1.default.createElement(bi_1.BiUserCircle, { className: 'text-red-300 text-2xl' }),
                react_1.default.createElement("h2", { className: 'my-1' }, book.author)),
            react_1.default.createElement("p", { className: 'mt-4' }, "Anything You want to show"),
            react_1.default.createElement("p", { className: 'my-2' }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita necessitatibus assumenda laboriosam, facilis iste cumque a pariatur nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi dolorum est? Deserunt placeat cumque quo dicta architecto, dolore vitae voluptate sequi repellat!"))));
};
BookModal.defaultProps = {
    book: null,
};
exports.default = BookModal;
