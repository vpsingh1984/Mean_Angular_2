import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './components/user/userlist/userlist.component';
import { AdduserComponent } from './components/user/adduser/adduser.component';
import { UpdateuserComponent } from './components/user/updateuser/updateuser.component';
import { UserComponent } from './components/user/user.component';
import { UserdetailComponent } from './components/user/userdetail/userdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AdduserComponent,
    UpdateuserComponent,
    UserComponent,
    UserdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
