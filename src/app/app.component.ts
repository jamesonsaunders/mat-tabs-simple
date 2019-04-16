import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedIndex = 0;

  resetTabIndex() {
    this.selectedIndex = 0;
    console.log('tab index has been reset');
  }
}
