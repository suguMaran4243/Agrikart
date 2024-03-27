import { Component } from '@angular/core';
import { TranslationService } from '../Shared/Services/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
 public heading: string;
  constructor(private translateService: TranslationService) {
    this.heading = this.translateService.getTranslation('title');
  }
}
