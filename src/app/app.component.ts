import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipes-project';
  section: string;

  onClickHeader(section: string) {
    this.section = section;
  }
}
