import { ChangeDetectionStrategy, Component } from '@angular/core';

interface SkillCategory {
  name: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly categories: SkillCategory[] = [
    {
      name: 'Languages & Technologies',
      items: [
        'Python', 'Java', 'C# (.NET)', 'C++', 'HTML/CSS/JS',
        'TypeScript', 'React', 'Svelte', 'Node.js', 'Angular',
        'SQL', 'R', 'Docker', 'Git', 'Linux', 'macOS', 'Windows',
      ],
    },
    {
      name: 'Concepts',
      items: [
        'Data Structures & Algorithms', 'Linear Algebra', 'Probability',
        'Partial Differential Equations', 'Lean-Agile & Scrum', 'OOP', 'SOLID Principles',
      ],
    },
  ];
}
