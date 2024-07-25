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
const react_router_dom_1 = require("react-router-dom");
const BackButton_1 = __importDefault(require("../components/BackButton"));
const Spinner_1 = __importDefault(require("../components/Spinner"));
const ShowBook = () => {
    const [book, setBook] = (0, react_1.useState)({});
    const [loading, setLoading] = (0, react_1.useState)(false);
    const { id } = (0, react_router_dom_1.useParams)();
    (0, react_1.useEffect)(() => {
        setLoading(true);
        axios_1.default
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
            setBook(response.data);
            setLoading(false);
        })
            .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, []);
    return (react_1.default.createElement("div", { className: 'p-4' },
        react_1.default.createElement(BackButton_1.default, null),
        react_1.default.createElement("h1", { className: 'text-3xl my-4' }, "Show Book"),
        loading ? (react_1.default.createElement(Spinner_1.default, null)) : (react_1.default.createElement("div", { className: 'flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4' },
            react_1.default.createElement("div", { className: 'my-4' },
                react_1.default.createElement("span", { className: 'text-xl mr-4 text-gray-500' }, "Id"),
                react_1.default.createElement("span", null, book._id)),
            react_1.default.createElement("div", { className: 'my-4' },
                react_1.default.createElement("span", { className: 'text-xl mr-4 text-gray-500' }, "Title"),
                react_1.default.createElement("span", null, book.title)),
            react_1.default.createElement("div", { className: 'my-4' },
                react_1.default.createElement("span", { className: 'text-xl mr-4 text-gray-500' }, "Author"),
                react_1.default.createElement("span", null, book.author)),
            react_1.default.createElement("div", { className: 'my-4' },
                react_1.default.createElement("span", { className: 'text-xl mr-4 text-gray-500' }, "Publish Year"),
                react_1.default.createElement("span", null, book.publishYear)),
            react_1.default.createElement("div", { className: 'my-4' },
                react_1.default.createElement("span", { className: 'text-xl mr-4 text-gray-500' }, "Create Time"),
                react_1.default.createElement("span", null, new Date(book.createdAt).toString())),
            react_1.default.createElement("div", { className: 'my-4' },
                react_1.default.createElement("span", { className: 'text-xl mr-4 text-gray-500' }, "Last Update Time"),
                react_1.default.createElement("span", null, new Date(book.updatedAt).toString()))))));
};
exports.default = ShowBook;
