import { NgTemplateOutlet } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { shareReplay } from 'rxjs';
import { TestContentComponent } from '../../../../libs/base-ui/src/lib/test-content/test-content.component';
import { TextContentComponent } from '../../../../libs/base-ui/src/lib/text-content/text-content.component';
import { VideoContentComponent } from '../../../../libs/base-ui/src/lib/video-content/video-content.component';
import { PageService } from '../../../../libs/swagger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public data$ = this.api.getPage().pipe(shareReplay(1));
  @ViewChild('componentHost', {static: true}) componentHost!: NgTemplateOutlet;

  constructor(
    private api: PageService,
    public viewContainerRef: ViewContainerRef
    ) {

      this.data$.subscribe((content) => {
        content.forEach(value => {
          switch (value.type) {
            case 'text':
              this.viewContainerRef.createComponent(TextContentComponent).instance.content = value;
              break;
            case 'video':
              this.viewContainerRef.createComponent(VideoContentComponent).instance.content = value;
              break;
            case 'test':
              this.viewContainerRef.createComponent(TestContentComponent).instance.content = value;
              break;
            default:
              const itShouldBeGreenForever: never = value;
          }
        })
      });
  }

}
