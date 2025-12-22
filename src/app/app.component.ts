import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { SkyBackgroundComponent } from "./sky-background/sky-background.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, SkillsComponent, ProjectsComponent, ContactMeComponent, SkyBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
