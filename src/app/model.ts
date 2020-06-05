export class Model {
    user: string;
    items: TodoItem[];

    constructor() {
        this.user = 'Anonymus';
        this.items = [
            new TodoItem('Buy Milk', false),
            new TodoItem('Buy Meat', false),
            new TodoItem('Run 10K', false),
            new TodoItem('Do 10 Pullups', true)
        ];
    }

}

export class TodoItem {
    action: string;
    done: boolean;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
