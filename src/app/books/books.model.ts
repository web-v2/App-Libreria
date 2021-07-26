export interface Books {
    id: string;
    titulo: string;
    description: string;
    precio: number;
    fechaPublicacion?: Date;
    autor: {
        id: string,
        nombreCompleto: string
    };
}