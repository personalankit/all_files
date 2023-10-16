import mongoose from "mongoose";
import { Book } from "../Schema/bookSchema.js"

export const getBooks = async (req, res) => {
    console.log(req.query)

    try {
        const books = await Book.find()
        res.send(books)
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
}

export const postBooks = async (req, res) => {
    const books = req.body

    const newBooks = new Book({ ...books })
    try {
        await newBooks.save()
        res.status(200).send({ message: 'Successfully created !' })
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
}


export const getBooksBySearch = async (req, res) => {
    const { searchQuery } = req.query;
    
    try {
        const Query = new RegExp(searchQuery, "i"); // that THAT That => that

        const Books = await Book.find({ $or: [{ title: Query }, { category: Query }, { author: Query }] });

        res.send({ data: Books });

    } catch (error) {
        res.status(404).send({ message: error.message });
    }
}
