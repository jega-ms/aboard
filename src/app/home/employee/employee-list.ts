import { Employee } from "./employee";

export class EmployeeList {
    public items: Employee[]=[];
    public count: number;


    constructor(items: Employee[], count: number) {
        this.items = items;
        this.count = count;
    }

}
