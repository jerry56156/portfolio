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
      title: 'Coming Soon',
      company: ':)',
      period: 'Sept 2026 - ',
      location: 'Calgary, AB',
      bullets: [
      ],
    },

    {
      title: 'Software Developer',
      company: 'Ulyfe',
      period: 'May 2026 – Present',
      location: 'Chicago (Remote)',
      bullets: [
        'Drove product and scope decisions in collaboration with the founding team, and gathered requirements directly from prospective business customers through a rapid TestFlight release-and-demo cycle.',
        'Architected and shipped a full-stack loyalty points economy — escrow-backed quest banks, atomic PostgreSQL functions, and a cross-business QR redemption network with race condition guards.',
        'Built and deployed 5+ Deno edge functions for quest verification, point payouts, and push notifications.',
        'Owned end-to-end delivery of the public-facing marketing site (ulyfe.info), iterating across 4+ feedback cycles with design and product leads.',
        'Refactored both the app and marketing site codebases, eliminating 35% dead CSS and unused components.',
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
