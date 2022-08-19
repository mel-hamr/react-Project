"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BlogSchema = new mongoose_1.default.Schema({
    _id: { type: Number, require: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true },
});
//# sourceMappingURL=Blog.model.js.map