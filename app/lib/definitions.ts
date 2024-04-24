export type Notebook = {
    id: string;
    name: string;
    description: string;
    color: string;
    favorite: boolean;
};

export type Note = {
    id?: string;
    notebookid: string;
    title: string;
    description: string;
    color: string;
    favorite: boolean;
}

export type childrenProp = {
    children?: React.ReactNode
}