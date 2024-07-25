"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookModel_js_1 = require("../models/bookModel.js");
const router = express_1.default.Router();
// Route for Save a new Book
router.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!request.body.title ||
            !request.body.author ||
            !request.body.publishYear) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };
        const book = yield bookModel_js_1.Book.create(newBook);
        return response.status(201).send(book);
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}));
// Route for Get All Books from database
router.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield bookModel_js_1.Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books,
        });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}));
// Route for Get One Book from database by id
router.get('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const book = yield bookModel_js_1.Book.findById(id);
        return response.status(200).json(book);
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}));
// Route for Update a Book
router.put('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!request.body.title ||
            !request.body.author ||
            !request.body.publishYear) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const { id } = request.params;
        const result = yield bookModel_js_1.Book.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }
        return response.status(200).send({ message: 'Book updated successfully' });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}));
// Route for Delete a book
router.delete('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const result = yield bookModel_js_1.Book.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }
        return response.status(200).send({ message: 'Book deleted successfully' });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}));
exports.default = router;
