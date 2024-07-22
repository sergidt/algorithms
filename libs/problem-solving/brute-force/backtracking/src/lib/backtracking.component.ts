import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'backtracking',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  template: `
  <h1>Backtracking</h1>
  <markdown [data]="markdown"></markdown>
  <router-outlet></router-outlet>
  `,
})
export class BacktrackingComponent {
  markdown = `#
  Is a general algorithm for finding all (or some) solutions to some computational problems, notably constraint satisfaction problems, that incrementally builds candidates to the solutions, and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot possibly be completed to a valid solution.

## General algorithm (pseudo-code)
\`\`\`javascript
findSolutions(n, other params)
    if (found a solution)
      solutionsFound = solutionsFound + 1;
      displaySolution();
      if (solutionsFound >= solutionTarget)
        exit;
  return

  for (val = first to last)
    if (isValid(val, n))
      applyValue(val, n);
      findSolutions(n+1, other params);
      removeValue(val, n);
\`\`\`
`;
}
