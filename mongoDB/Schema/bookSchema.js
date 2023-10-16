import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    summary: { type: String, required: true },
    audio: {
        data: Buffer, // Stores the audio file data
        contentType: String // Stores the audio file MIME type
    },
    length: { type: Number, required: true },
    likes: { type: Number, default: 0 },
    comments: [{
        user: { type: String, required: true },
        comment: { type: String, required: true }
    }]
});

export const Book = mongoose.model('Book', bookSchema);