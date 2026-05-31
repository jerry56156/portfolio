import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Project {
  name: string;
  bullets: string[];
  tech: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly projects: Project[] = [
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
    },
    {
      name: 'Early-Warning System for Workplace Safety',
      bullets: [
        'Built an ML proof of concept using OSHA injury and exposure data with standard safety metrics.',
        'Applied NAICS risk labeling and trained a Gradient Boosting model for early-warning analysis.',
      ],
      tech: ['Python', 'Scikit-learn', 'OSHA Data'],
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
