import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { UserViewerComponent } from './components/user-viewer/user-viewer.component';
import { UsersDisplayComponent } from './components/users-display/users-display.component';

@NgModule({
  declarations: [
    UserComponent,
    UserViewerComponent,
    UsersDisplayComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [UsersDisplayComponent]
})
export class AppModule { }
