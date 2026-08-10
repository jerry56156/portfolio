import { ChangeDetectionStrategy, Component } from '@angular/core';

interface SkillGroup {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly groups: SkillGroup[] = [
    {
      label: 'Languages',
      items: ['Python', 'TypeScript', 'Java', 'C++', 'SQL', 'R', 'HTML / CSS'],
    },
    {
      label: 'Frameworks & Libraries',
      items: ['Angular', 'React', 'React Native', 'Svelte', 'Node.js'],
    },
    {
      label: 'Tools & Platforms',
      items: ['Docker', 'Git', 'Linux', 'macOS', 'Windows'],
    },
  ];
}
