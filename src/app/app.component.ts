import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public lines: string[] = [];
  public offset = 0;
  public duration = 500;
  
  constructor(){
    for (let i = 1; i<=100; i++){
        this.lines.push(`This is line number ${i}`);
    }
  }
}
