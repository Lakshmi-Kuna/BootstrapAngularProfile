import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public ramaraghava:string='';
  public Message(e:any){
    alert(e)
  }
  public ramachandra:string='';
  public Update(e:any){
    alert(e)
  }
}
