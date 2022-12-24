import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { TestContent, TestService } from '../../../../swagger';


@Component({
  templateUrl: './test-content.component.html',
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class TestContentComponent {
  @Input() public content: TestContent | undefined;

  constructor(private api: TestService) {}

  public chooseAnswer(questionId: number, answerId: number) {
    this.api.sendAnswer({ questionId, answerId })
  }
}
