import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router} from '@angular/router';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { GetuserlistService } from './getuserlist.service'

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [GetuserlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
