import { Component } from '@angular/core';
import { PageService } from '../../../../libs/swagger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public data$ = this.api.getPage();

  constructor( private api: PageService) {}

}
