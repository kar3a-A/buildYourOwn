const Book = require('../models/Book')

const bookController = {
    index : async(req, res) => {
        try{
            const books = await Book.find({})
            return res.json({
                books
            })
        }catch(err){
            return res.status(500).json({
                error: 'Internal Server Fetching Error'
            })
        }
    },
    post: (req, res) => {
        const book = {
            title: 'How to make money offline',
            author: 'Dr. offline'
        }
        try{
            const newBook = new Book(book);
            const savedBook = newBook.save();
            return res.json({
                savedBook
            })
        }catch {
            return res.status(500).json({
                error: 'Error while creating book'
            })
        }

    }
}

module.exports = bookController