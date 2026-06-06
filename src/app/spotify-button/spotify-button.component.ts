import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LucideAngularModule, Disc3 } from 'lucide-angular';

interface SpotifyTrack {
  title: string | null;
  artist: string;
  albumImageUrl: string | null;
  songUrl: string;
}

@Component({
  selector: 'app-spotify-button',
  imports: [LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spotify-button.component.html',
  styleUrl: './spotify-button.component.css',
})
export class SpotifyButtonComponent implements OnInit {
  private readonly http = inject(HttpClient);

  readonly track = signal<SpotifyTrack | null>(null);
  readonly loading = signal(true);
  readonly discIcon = Disc3;

  ngOnInit(): void {
    this.http.get<SpotifyTrack>('/api/spotify').subscribe({
      next: (data) => {
        this.track.set(data.title ? data : null);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }
}
