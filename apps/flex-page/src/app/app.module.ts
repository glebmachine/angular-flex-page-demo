import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule, Configuration, PageService } from '../../../../libs/swagger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageMockService } from './mocks/page.mock.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule.forRoot(() => {
      return {
        basePath: 'https://pornhub.com/api/v1'
      } as Configuration
    })
  ],
  providers: [
    { provide: PageService, useClass: PageMockService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
