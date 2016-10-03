import {Injectable} from "@angular/core";
@Injectable()
export class TodoService {
    Todos = ['run with arms behind back','be an epic bawss','die','have yolo','watch 21 vine compilation']
    Add(newEntry: string): void {
        this.Todos.push(newEntry)
    }
    Delete(index: number): void {
        this.Todos.splice(index, index + 1);
    }
    Update(newValue: string, index: number): void {
        this.Todos[index] = newValue
    }
    Get(): string[] {
        return this.Todos
    }
}
