import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  private list: string[];

  constructor() {
    this.list = [];
  }
  public get todoList(): string[] {
    return this.list;
  }
  public set todoList(todoList: string[]) {
    this.list = todoList;
  }
  public pushTodo(value: string): void {
    this.list.push(value);
  }
}
