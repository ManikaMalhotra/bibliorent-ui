export interface Book {
    data: { 
        id: string;
        name: string;
        author: string;
        dop: Date;
        genre: string;
        availableCopies: number;
}[];
}