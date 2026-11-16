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
  // One persistent <video> per transition so each stays buffered; we never swap src.
  @ViewChild('d2nVid') private readonly d2nVid?: ElementRef<HTMLVideoElement>;
  @ViewChild('n2dVid') private readonly n2dVid?: ElementRef<HTMLVideoElement>;

  readonly mode = signal<Mode>('night');
  readonly phase = signal<Phase>('still');
  /** Which transition video is currently on screen (null = show still image). */
  readonly activeVideo = signal<'d2n' | 'n2d' | null>(null);
  private readonly settledMode = signal<Mode>('night');

  readonly assets = {
    stillDay: 'media/day.webp',
    stillNight: 'media/night.webp',
    d2n: 'media/day-to-night.mp4',
    n2d: 'media/night-to-day.mp4',
  } as const;

  readonly showDayStill = computed(() => this.settledMode() === 'day');

  /** Bumped on every toggle so stale play()/ended callbacks are ignored. */
  private token = 0;

  ngAfterViewInit(): void {
    for (const el of this.videos()) {
      el.muted = true;
      el.playsInline = true;
      el.load();
    }
    // Warm + decode both stills so swapping them is instant.
    for (const src of [this.assets.stillDay, this.assets.stillNight]) {
      const img = new Image();
      img.src = src;
      img.decode?.().catch(() => {});
    }
  }

  setMode(next: Mode): void {
    const prev = this.mode();
    if (prev === next) return;

    const key = prev === 'day' ? 'd2n' : 'n2d';
    const el = (key === 'd2n' ? this.d2nVid : this.n2dVid)?.nativeElement;
    const token = ++this.token;

    this.mode.set(next);
    this.phase.set('transition');

    // Stop whatever was playing.
    for (const v of this.videos()) {
      if (v !== el) v.pause();
    }

    if (!el) {
      this.settle(token);
      return;
    }

    el.pause();
    el.currentTime = 0;

    // Only reveal the video once it actually has a frame to show,
    // so the still stays visible instead of a blank/black frame.
    const reveal = () => {
      if (token === this.token) this.activeVideo.set(key);
    };
    if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      reveal();
    } else {
      el.addEventListener('loadeddata', reveal, { once: true });
    }

    el.play().then(reveal, () => {
      // Playback blocked/failed: jump straight to the end state instead of hanging.
      this.settle(token);
    });
  }

  setDay(): void {
    this.setMode('day');
  }

  setNight(): void {
    this.setMode('night');
  }

  onEnded(which: 'd2n' | 'n2d'): void {
    if (which !== this.activeVideo()) return;
    this.settle(this.token);
  }

  private settle(token: number): void {
    if (token !== this.token) return;
    this.settledMode.set(this.mode());
    this.phase.set('still');
    // Leave the finished video on screen: its last frame matches the still, and
    // hiding it here can expose the still layer before it repaints (a flash).
    // It gets replaced when the next transition's video is revealed.
  }

  private videos(): HTMLVideoElement[] {
    return [this.d2nVid?.nativeElement, this.n2dVid?.nativeElement].filter(
      (v): v is HTMLVideoElement => !!v
    );
  }
}
