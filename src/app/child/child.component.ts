import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Output()public ChildClick:EventEmitter<string>=new EventEmitter<string>();
public Cancelled(){
  this.ChildClick.emit('Record cancelled....')
 }
 public Updated(){
  this.ChildClick.emit('Record Updated...')
 }
}