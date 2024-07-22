import { BacktrackingComponent } from './../../../../libs/problem-solving/brute-force/backtracking/src/lib/backtracking.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    BacktrackingComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'algorithms';
}
