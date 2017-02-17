import { User } from "./user.model";

export class Group {
    public id: number;
    public name: string;
    public owner: User;
    public friends: Array<User>;    
    public creationDate: Date;
    public creationBy: number;
}