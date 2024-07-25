"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_js_1 = require("./config.js");
const mongoose_1 = __importDefault(require("mongoose"));
const booksRoutes_js_1 = __importDefault(require("./routes/booksRoutes.js"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 5555;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome!');
});
app.use('/books', booksRoutes_js_1.default);
mongoose_1.default
    .connect(config_js_1.mongoDBURL)
    .then(() => {
    console.log('App connected to database');
    app.listen(config_js_1.PORT, () => {
        console.log(`App is listening to port: ${config_js_1.PORT}`);
    });
})
    .catch((error) => {
    console.log(error);
});
