import { Component, Input} from '@angular/core';
import { TextContent } from '../../../../swagger';


@Component({
  template: `
    <h1>{{ content?.id }}</h1>
    <p>{{ content?.content }}</p>
  `
})
export class TextContentComponent {
  @Input() public content: TextContent | undefined;
}
