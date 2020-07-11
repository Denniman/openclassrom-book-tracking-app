export class Book {
    // my constructor
    constructor(title, author, description, pages, currentPage) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = false;
    }
    readBook(page) {
        if (page < 1 || page > this.pages) {
            return 0
        } else if (page >= 1 && page < this.pages) {
            this.currentPage = page
            return 1 
        } else if (page === this.pages) {
            this.currentPage = page
            this.read = true
            return 1
        }
    }
}

export const books = [ 
new Book('Things Fall Apart', 'Chinua Achebe', 'how a young man fell apart', 350, 300),
new Book('There was a Country', 'Chinua Achebe', 'a personal story of Biafra', 350, 350),
new Book('Mopping the Wet Floor while Overlooking The Leaking Roof', 'Ibaba S. Ibaba', 'A story of Niger Delta', 150, 50),
new Book('How was Underdeveloped', 'Walter Rodney', 'A story of Africa underdevelopment', 400, 350),
new Book('Digital Economy', 'Omojuwa', 'Create wealth', 200, 100)
]



