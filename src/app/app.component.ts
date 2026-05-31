import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkyBackgroundComponent } from './sky-background/sky-background.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    SkyBackgroundComponent,
    ThemeToggleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {

  title = 'portfolio';

  @ViewChild(SkyBackgroundComponent) private sky!: SkyBackgroundComponent;

  ngAfterViewInit(): void {
  }

  setNight = (): void => {
    this.sky?.setNight();
  };

  setDay = (): void => {
    this.sky?.setDay();
  };


}
