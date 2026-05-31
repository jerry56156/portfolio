import { AfterViewInit, Component } from '@angular/core';
import { SocialButtonComponent } from '../social-button/social-button.component';
import { SpotifyButtonComponent } from '../spotify-button/spotify-button.component';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  imports: [SocialButtonComponent, SpotifyButtonComponent]
})
export class HeroComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.type();
  }

  private type(): void {
    const tokens = [
      { text: "let ", className: "kw" },
      { text: "intro", className: "var" },
      {text: ": ", className: "op"},
      { text: "string ", className: "type"},
      { text: "= ", className: "op" },
      { text: `"Hello there! I am Jerry Tomy Mukalel.\\n"`, className: "str" }
    ];

    const el = document.getElementById("typewriter");
    const cursor = document.getElementById("cursor");

    if (!el) return;

    let tokenIndex = 0;
    let charIndex = 0;
    let span: HTMLSpanElement | null = null;

    const step = () => {
      if (tokenIndex >= tokens.length) return;

      const token = tokens[tokenIndex];

      if (!span) {
        span = document.createElement("span");
        span.className = token.className;
        el.insertBefore(span, cursor);

      }

      span.textContent += token.text[charIndex++];
      if (charIndex === token.text.length) {
        tokenIndex++;
        charIndex = 0;
        span = null;
      }

      setTimeout(step, 100);
    };

    step();
  }

}
