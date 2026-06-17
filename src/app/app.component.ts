import { Component, ViewChild, AfterViewInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { SkyBackgroundComponent } from './sky-background/sky-background.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  host: { '[attr.data-theme]': 'theme()' },
  imports: [
    RouterOutlet,
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    SkyBackgroundComponent,
    ThemeToggleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {

  title = 'portfolio';

  readonly theme = signal<'day' | 'night'>('night');

  @ViewChild(SkyBackgroundComponent) private sky!: SkyBackgroundComponent;

  ngAfterViewInit(): void {}

  setNight = (): void => {
    this.sky?.setNight();
    this.theme.set('night');
    this.setThemeColor('#080818');
  };

  setDay = (): void => {
    this.sky?.setDay();
    this.theme.set('day');
    this.setThemeColor('#7ab8d4');
  };

  private setThemeColor(color: string): void {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
  }


}
