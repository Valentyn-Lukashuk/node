"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const { Schema } = mongoose;
exports.NoteSchema = new Schema({
    name: String,
    description: String,
    tags: {
        type: String,
        enum: ["Personal", "Travel", "Life", "Work"],
    },
    createdAt: { type: Date, default: Date.now }
});
//# sourceMappingURL=note.schema.js.map