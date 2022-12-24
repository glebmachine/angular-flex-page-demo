import { HttpEvent, HttpResponse } from "@angular/common/http";
import { randNumber, randText, randUrl } from "@ngneat/falso";
import { delay, Observable, of } from "rxjs";
import { FlexPage, PageService, TestContent, TestQuestion, TestQuestionAnwser, TextContent, VideoContent } from "../../../../../libs/swagger";

function mockTextContent(): TextContent {
  return {
    id : randNumber(),
    type: 'text',
    content: randText({ length: 10 }).join(' '),
  }
}

function mockVideoContent(): VideoContent {
  return {
    id : randNumber(),
    type: 'video',
    url: randUrl(),
  }
}


function mockTestQuestion(): TestQuestion {
 return {
    questionId: randNumber(),
    question: randText() + '?',
    anwsers: [
      mockTestQuestionAnswer(),
      mockTestQuestionAnswer(),
      mockTestQuestionAnswer(),
    ]
  }
}
function mockTestQuestionAnswer(): TestQuestionAnwser {
 return {
    anwserId: randNumber(),
    answer: randText(),
  }
}

function mockTestContent(): TestContent {
  return {
    id : randNumber(),
    type: 'test',
    questions: [
      mockTestQuestion(),
      mockTestQuestion(),
    ]
  }
}

export class PageMockService extends PageService {
  public override getPage(observe?: 'body', reportProgress?: boolean): Observable<FlexPage>;
  public override getPage(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FlexPage>>;
  public override getPage(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FlexPage>>;
  public override getPage(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    return of([
      mockTextContent(),
      mockVideoContent(),
      mockTextContent(),
      mockTestContent(),
    ]).pipe(
      delay(Math.random()*600)
    )
  }
}
