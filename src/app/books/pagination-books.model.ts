import { Books } from './books.model';

export interface PaginationBooks {
    pageSize: number;
    page: number;
    sort: string;
    sortDirection: string;
    pagesQuantity: number;
    data: Books[];
    filterValue: {};
    totalRows: number;
}