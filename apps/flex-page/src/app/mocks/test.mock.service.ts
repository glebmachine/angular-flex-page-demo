import { HttpEvent, HttpResponse } from "@angular/common/http";
import { delay, Observable, of } from "rxjs";
import { QuestionAnswerRequest, } from "../../../../../libs/swagger";
import { TestService } from "../../../../../libs/swagger/api/test.service";

export class TestMockService extends TestService {
  public override sendAnswer(body: QuestionAnswerRequest, observe?: 'body', reportProgress?: boolean): Observable<any>;
  public override sendAnswer(body: QuestionAnswerRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
  public override sendAnswer(body: QuestionAnswerRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
  public override sendAnswer(body: QuestionAnswerRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

    console.log('Отправляем ответ:', body.questionId, body.answerId)
   return of(true).pipe(
    delay(2000 * Math.random())
   );
 }
}
