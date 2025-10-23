const express = require('express');
const app = express();
app.use(express.json());

let books = [];

app.post('/books',(req, res)=>{
    const book = req.body;
    books.push(book);
    res.status(201).json({ message: 'Book added successfully', book });
});

app.get('/books',(req,res) =>{
    res.json(books);
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
