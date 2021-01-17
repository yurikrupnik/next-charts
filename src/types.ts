export interface Data {
    name: string;
    site: {
        name: string;
    };
    type: {
        name: string;
    };
    id: string;
    children: Data[] | null;
}
