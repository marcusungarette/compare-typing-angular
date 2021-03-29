import { Component } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  randomText = lorem.sentence();
  solved = false;

  onInput(value: string) {
    if (value === this.randomText) {
      this.solved = true;
    }
  }
}
