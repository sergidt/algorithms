import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sudoku-solver',
  standalone: true,
  imports: [CommonModule],
  template: `<p>sudoku-solver works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SudokuSolverComponent {}
