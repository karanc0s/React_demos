export class Todo {
    id : number
    todoMsg : string
    completed : boolean


    public constructor(id : number , msg:string , completed : boolean) {
        this.id = id;
        this.todoMsg = msg
        this.completed  = completed;
    }


    public toString(): string {
        return `Todo {id: ${this.id}, todoMsg: "${this.todoMsg}", completed: ${this.completed}}`;
    }
}

