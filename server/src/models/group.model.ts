import { User } from "./user.model";

export class Group {
    public name: string;
    public friends: Array<User>;
}