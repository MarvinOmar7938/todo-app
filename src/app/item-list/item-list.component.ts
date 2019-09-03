import { InputService } from './../input.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  public listItem: string[];
  constructor(private inputService: InputService) {
    this.listItem = [];
  }

  ngOnInit() {
    this.listItem = this.inputService.todoList;
  }

}
