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
const BackButton_1 = __importDefault(require("../components/BackButton"));
const Spinner_1 = __importDefault(require("../components/Spinner"));
const axios_1 = __importDefault(require("axios"));
const react_router_dom_1 = require("react-router-dom");
const notistack_1 = require("notistack");
const EditBook = () => {
    const [title, setTitle] = (0, react_1.useState)('');
    const [author, setAuthor] = (0, react_1.useState)('');
    const [publishYear, setPublishYear] = (0, react_1.useState)('');
    const [loading, setLoading] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { id } = (0, react_router_dom_1.useParams)();
    const { enqueueSnackbar } = (0, notistack_1.useSnackbar)();
    (0, react_1.useEffect)(() => {
        setLoading(true);
        axios_1.default.get(`http://localhost:5555/books/${id}`)
            .then((response) => {
            setAuthor(response.data.author);
            setPublishYear(response.data.publishYear);
            setTitle(response.data.title);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            alert('An error happened. Please Chack console');
            console.log(error);
        });
    }, []);
    const handleEditBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios_1.default
            .put(`http://localhost:5555/books/${id}`, data)
            .then(() => {
            setLoading(false);
            enqueueSnackbar('Book Edited successfully', { variant: 'success' });
            navigate('/');
        })
            .catch((error) => {
            setLoading(false);
            // alert('An error happened. Please Chack console');
            enqueueSnackbar('Error', { variant: 'error' });
            console.log(error);
        });
    };
    return (react_1.default.createElement("div", { className: 'p-4' },
        react_1.default.createElement(BackButton_1.default, null),
        react_1.default.createElement("h1", { className: 'text-3xl my-4' }, "Edit Book"),
        loading ? react_1.default.createElement(Spinner_1.default, null) : '',
        react_1.default.createElement("div", { className: 'flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto' },
            react_1.default.createElement("div", { className: 'my-4' },
                react_1.default.createElement("label", { className: 'text-xl mr-4 text-gray-500' }, "Title"),
                react_1.default.createElement("input", { type: 'text', value: title, onChange: (e) => setTitle(e.target.value), className: 'border-2 border-gray-500 px-4 py-2 w-full' })),
            react_1.default.createElement("div", { className: 'my-4' },
                react_1.default.createElement("label", { className: 'text-xl mr-4 text-gray-500' }, "Author"),
                react_1.default.createElement("input", { type: 'text', value: author, onChange: (e) => setAuthor(e.target.value), className: 'border-2 border-gray-500 px-4 py-2  w-full ' })),
            react_1.default.createElement("div", { className: 'my-4' },
                react_1.default.createElement("label", { className: 'text-xl mr-4 text-gray-500' }, "Publish Year"),
                react_1.default.createElement("input", { type: 'number', value: publishYear, onChange: (e) => setPublishYear(e.target.value), className: 'border-2 border-gray-500 px-4 py-2  w-full ' })),
            react_1.default.createElement("button", { className: 'p-2 bg-sky-300 m-8', onClick: handleEditBook }, "Save"))));
};
exports.default = EditBook;
