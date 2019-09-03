import { InputService } from './../input.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public value: string;

  constructor(private inputService: InputService) { }

  ngOnInit() {
  }

  public createItem(): void {
    this.inputService.pushTodo(this.value);
  }
}
