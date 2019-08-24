import { TodoService } from './todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CosNgPaginationModule } from '../../projects/cos-ng-pagination/src/lib/cos-ng-pagination.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CosNgPaginationModule
  ],
  exports: [],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
