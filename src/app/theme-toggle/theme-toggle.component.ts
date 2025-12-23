import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';

@Component({
  selector: 'app-theme-toggle',
  imports: [LucideAngularModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'host',
    'aria-label': 'Theme toggle',
  },
})
export class ThemeToggleComponent {

  readonly onLightToDark = input<(() => void) | null>(null);
  readonly onDarkToLight = input<(() => void) | null>(null);

  readonly initialDark = input(false);

  readonly isDark = signal(false);

  readonly icon = computed(() => (this.isDark() ? Sun : Moon));
  readonly iconLabel = computed(() => (this.isDark() ? 'Switch to light mode' : 'Switch to dark mode'));

  readonly icons = { Sun, Moon };

  ngOnInit(): void {
    this.isDark.set(this.initialDark());
  }

  toggle(): void {
    const goingToDark = !this.isDark();

    if (goingToDark) {
      this.onLightToDark()?.();
    } else {
      this.onDarkToLight()?.();
    }

    this.isDark.set(goingToDark);
  }
}
