import { Component, Input} from '@angular/core';
import { VideoContent } from '../../../../swagger';


@Component({
  template: `
    <h1>{{ content?.id }}</h1>
    <p>{{ content?.url }}</p>
  `
})
export class VideoContentComponent {
  @Input() public content: VideoContent | undefined;
}
