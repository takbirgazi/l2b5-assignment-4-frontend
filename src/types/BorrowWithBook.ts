
export interface BorrowWithBook {
    _id: string;
    quantity: number;
    dueDate: string;
    book: {
        title: string;
        author: string;
        genre: string;
        isbn: string;
        description: string;
        copies: number;
        available: boolean;
    };
}