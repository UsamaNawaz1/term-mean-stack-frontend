import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UsersCreateComponent,
    UsersEditComponent,
    UsersListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
