import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewComponentComponent } from './new-component/new-component.component';
import { ChatComponent } from './chat/chat.component';
import { UniversitiesComponent } from './universities/universities.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ProposComponentComponent } from './propos-component/propos-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ServicesComponent } from './services/services.component';
import { HelperssComponent } from './helperss/helperss.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NewComponentComponent,
    ChatComponent,
    UniversitiesComponent,
    SubscribeComponent,
    ProposComponentComponent,
    ContactComponentComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    HelloWorldComponent,
   
    ProfileComponent,
    BoardUserComponent,
    ServicesComponent,
    HelperssComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgbModule,
    HttpClientModule,
    FormsModule
    /*RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component:CarouselComponent  },
    { path: 'discover', component:ProposComponentComponent  },
    { path: 'recent', component: NewComponentComponent },
    { path: 'sign', component: ContactComponentComponent }
  ],{useHash:true})*/
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
