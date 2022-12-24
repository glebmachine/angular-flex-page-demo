import { HttpEvent, HttpResponse } from "@angular/common/http";
import { randNumber, randText, randUrl } from "@ngneat/falso";
import { delay, Observable, of } from "rxjs";
import { FlexPage, PageService, TextContent, VideoContent } from "../../../../../libs/swagger";

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

export class PageMockService extends PageService {
  public override getPage(observe?: 'body', reportProgress?: boolean): Observable<FlexPage>;
  public override getPage(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FlexPage>>;
  public override getPage(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FlexPage>>;
  public override getPage(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    return of([
      mockTextContent(),
      mockVideoContent(),
      mockTextContent(),
    ]).pipe(
      delay(Math.random()*600)
    )
  }
}
