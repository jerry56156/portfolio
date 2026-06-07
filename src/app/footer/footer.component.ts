import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SocialButtonComponent } from '../social-button/social-button.component';

@Component({
  selector: 'app-footer',
  imports: [SocialButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
