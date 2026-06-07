import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule, Github, ExternalLink } from 'lucide-angular';

interface Project {
  name: string;
  bullets: string[];
  tech: string[];
  github?: string;
  url?: string;
}

@Component({
  selector: 'app-projects',
  imports: [LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly githubIcon = Github;
  readonly externalIcon = ExternalLink;
  readonly projects: Project[] = [
    {
      name: 'DUST',
      bullets: [
        'Built a web-based exploration game at Calgary Hacks 2026 where players become digital archaeologists digging through a fictional, decaying internet.',
        'Features real-time multiplayer with competitive and cooperative modes powered by Convex, and secure auth via Clerk.',
      ],
      tech: ['Next.js', 'TypeScript', 'Convex', 'Clerk'],
      github: 'https://github.com/Abdalla-Eldoumani/DUST',
      url: 'https://dust-mu.vercel.app',
    },
    {
      name: 'Computer-Vision Fitness Tracker',
      bullets: [
        'Building a fitness tracker that counts reps and evaluates form in real time via webcam.',
        'Implementing Pose Landmark Analysis and Biomechanical Logic to provide live exercise feedback.',
        'Scaling into a deployable app with a front-end and support for additional exercises.',
      ],
      tech: ['Python', 'OpenCV', 'MediaPipe'],
    },
    {
      name: 'Club Connect',
      bullets: [
        'Built a full-stack web platform for students to discover, join, and manage university clubs and events.',
        'Engineered role-based access control and messaging systems across Student, Exec, and Admin roles.',
      ],
      tech: ['React', 'Node.js', 'Prisma'],
      github: 'https://github.com/jerry56156/ClubConnect',
    },
    {
      name: 'Early-Warning System for Workplace Safety',
      bullets: [
        'Built an ML proof of concept using OSHA injury and exposure data with standard safety metrics.',
        'Applied NAICS risk labeling and trained a Gradient Boosting model for early-warning analysis.',
      ],
      tech: ['Python', 'Scikit-learn', 'OSHA Data'],
      github: 'https://github.com/jerry56156/Workplace_Safety_ML',
    },
    {
      name: 'My Perfect Pet',
      bullets: [
        'Built a dynamic web app enabling users to browse and adopt pets efficiently.',
        'Streamlined deployment by Dockerizing the app, ensuring consistent builds and simplified testing.',
      ],
      tech: ['Svelte', 'TypeScript', 'SQL', 'Docker'],
    },
    {
      name: 'Financial AI',
      bullets: [
        'Created an AI-driven Financial Literacy web app with real-time conversational guidance.',
        'Integrated OpenAI\'s GPT API for personalized personal finance advice.',
      ],
      tech: ['React', 'Node.js', 'OpenAI API'],
    },
  ];
}
