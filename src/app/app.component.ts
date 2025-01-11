import { Component } from '@angular/core';
import { HomeModule } from './home/home.module';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'starting-project';
}

