import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LucideAngularModule, Github, Linkedin } from 'lucide-angular';

export type SocialKind = 'linkedin' | 'github';

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

  // icon size in px
  readonly size = input(20);

  readonly icon = computed(() => (this.kind() === 'linkedin' ? Linkedin : Github));

  open(): void {
    window.open(this.href(), '_blank', 'noreferrer');
  }
}
