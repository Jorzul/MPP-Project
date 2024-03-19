export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    Age: number;
}

export const dummyEmployeeList: IEmployee[] = [
    {
        id: new Date().toJSON().toString(),
        firstName: 'Jorza',
        lastName: 'Ionut',
        Age: 21,
    },
    {
        id: new Date().toJSON().toString(),
        firstName: 'Jurj',
        lastName: 'Victor',
        Age: 20,
    },
    {
        id: new Date().toJSON().toString(),
        firstName: 'Mihut',
        lastName: 'Gabriela',
        Age: 42,
    },
];

export enum PageEnum {
    list,
    add,
    edit,
}
