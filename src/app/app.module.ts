import { NgModule, ErrorHandler } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { UsersPage } from '../pages/users/users';
import { WikiPage} from '../pages/wiki/wiki';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    UsersPage,
    WikiPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    JsonpModule, 
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    UsersPage,
    WikiPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
