export interface InitialItemsObj {
    id: string;
    description: string;
    quantity: string;
    packed: boolean;
}

export type ArrOFNotesOrEmptyArr = InitialItemsObj[] | [];

export enum SortBy {
    quantity = "quantity",
    description = "description",
    packed = "packed",
}
