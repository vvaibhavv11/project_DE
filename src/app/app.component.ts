import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  darkMode = false;
  constructor(){
    this.dectectColorScheme();
  }

  dectectColorScheme(){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
      this.darkMode = true;
      document.documentElement.setAttribute('data_theme', this.darkMode ? 'dark' : 'Light');
    }
  }

  Theme(){
    this.darkMode =! this.darkMode;
    document.documentElement.setAttribute('data_theme', this.darkMode ? 'dark' : 'light');
  }
}
