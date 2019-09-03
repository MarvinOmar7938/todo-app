import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() public id: number;
  @Input() public content: string;
  constructor() {
    this.id = 0;
    this.content = 'This is my TODO!!';
  }

  ngOnInit() {
  }

}
