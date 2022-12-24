import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BaseUiModule } from '../../../../libs/base-ui/src';
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
    BaseUiModule,
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
