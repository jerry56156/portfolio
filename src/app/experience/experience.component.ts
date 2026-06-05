import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Job {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  readonly jobs: Job[] = [
    {
      title: 'Software Developer',
      company: 'Ulyfe',
      period: 'May 2026 – Present',
      location: 'Chicago (Remote)',
      bullets: [
        'Owned end-to-end delivery of the public-facing marketing site for a live Gen Z startup.',
        'Iterated on features across 4+ feedback cycles based on direct input from design and product leads.',
        'Refactored codebase, eliminating 35% of dead CSS and unused components to improve maintainability.',
        'Implemented responsive design across mobile, tablet, and desktop targeting 3 screen breakpoints.',
      ],
    },
    {
      title: 'Teaching Assistant — Design and Analysis of Algorithms',
      company: 'University of Calgary',
      period: 'Jan 2026 – May 2026',
      location: 'Calgary, AB',
      bullets: [
        'Instructed students on designing efficient, scalable algorithms using greedy, divide-and-conquer, and DP.',
        'Analyzed and optimized solutions for time and space complexity, identifying bottlenecks and trade-offs.',
        'Evaluated correctness, edge-case handling, and performance guarantees across diverse problem settings.',
        'Taught NP-completeness and polynomial-time reductions with emphasis on practical system design.',
        'Led debugging and optimization discussions to strengthen problem decomposition and reasoning.',
      ],
    },
  ];
}
