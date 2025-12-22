import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild, computed, signal } from '@angular/core';

type Mode = 'day' | 'night';
type Phase = 'still' | 'transition';

@Component({
  selector: 'sky-background',
  templateUrl: './sky-background.component.html',
  styleUrl: './sky-background.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkyBackgroundComponent implements AfterViewInit {
  @ViewChild('vid') private readonly vid?: ElementRef<HTMLVideoElement>;

  readonly mode = signal<Mode>('night');
  readonly phase = signal<Phase>('still');

  private readonly assets = {
    stillDay: 'media/day.jpg',
    stillNight: 'media/night.jpg',
    d2n: 'assets/sky/day-to-night.mp4',
    n2d: 'assets/sky/night-to-day.mp4',
  } as const;

  readonly stillSrc = computed(() =>
    this.mode() === 'day' ? this.assets.stillDay : this.assets.stillNight
  );


  ngAfterViewInit(): void {
    const el = this.vid?.nativeElement;
    if (!el) return;

    el.muted = true;
    el.playsInline = true;
    el.src = this.assets.n2d;
    el.load();
  }

  
  setMode(next: Mode): void {
    const prev = this.mode();
    if (prev === next) return;

    this.mode.set(next);
    this.phase.set('transition');

    queueMicrotask(() => {
      const el = this.vid?.nativeElement;
      if (!el) return;

      el.pause();
      el.currentTime = 0;

      el.src =
        prev === 'day' && next === 'night' ? this.assets.d2n : this.assets.n2d;

      el.load();
      void el.play();
    });
  }

  onEnded(): void {
    const el = this.vid?.nativeElement;
    if (el) el.pause();

    this.phase.set('still');
  }
}
