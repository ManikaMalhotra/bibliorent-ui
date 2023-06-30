export interface IGenre {
    _id: string;
    name: string;
}

export interface IPathStore {
    path: string;
    setPath: (path: string) => void;
};

export interface IGenresStore {
    genres: IGenre[];
    setGenres: (genres: IGenre[]) => void;
    getGenres: () => Promise<void>;
};