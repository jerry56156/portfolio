import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { LucideAngularModule, Github, Linkedin, Mail } from 'lucide-angular';

export type SocialKind = 'linkedin' | 'github' | 'mail';

@Component({
  selector: 'app-social-button',
  imports: [LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.css',
})
export class SocialButtonComponent {
  readonly kind = input.required<SocialKind>();
  readonly label = input.required<string>();
  readonly href = input.required<string>();

  readonly copied = signal(false);

  // icon size in px
  readonly size = input(20);

  readonly icon = computed(() => {
    if (this.kind() === 'linkedin') return Linkedin;
    if (this.kind() === 'github') return Github;
    return Mail;
  });

  open(): void {
    if (this.kind() === 'mail') {
      navigator.clipboard.writeText(this.href());
      this.copied.set(true);

      setTimeout(() => this.copied.set(false), 1200);
      return;
    }

    window.open(this.href(), '_blank', 'noreferrer');
  }

}
