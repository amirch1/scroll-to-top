import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public lines: string[] = [];
  
  constructor(){
    for (let i = 1; i<=100; i++){
        this.lines.push(`This is line number ${i}`);
    }
  }
}
