import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { CoreModule } from './_core/core.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { UserProfileComponent } from './user-profile/user-profile.component';

// import { HomePageModule } from './home/home.module';
// import { HomePage } from './home/home.page';

// import { PopoverProfilePageModule } from './popover-profile/popover-profile.module';

// import { ToolbarPageModule } from './members/toolbar/toolbar.module';
@NgModule({
  declarations: [
    AppComponent
    // , UserProfileComponent
    // ,HomePage
  ],
  entryComponents: [],
  imports: [
    BrowserModule
    , MaterialModule
    , FormsModule
    , HttpClientModule
    , IonicModule.forRoot()
    , IonicStorageModule.forRoot({
        name: 'umpwa_clt',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
    , AppRoutingModule
    , BrowserAnimationsModule
    , CoreModule
    // , PopoverProfilePageModule
    // , HomePageModule
    // , ToolbarPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
  // ,schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {}
