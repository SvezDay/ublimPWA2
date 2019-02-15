import { NgModule } from '@angular/core';
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



// import { HomeModule } from './home/home.module';
import { PopoverProfilePageModule } from './popover-profile/popover-profile.module';

@NgModule({
  declarations: [
    AppComponent
    // , UserProfileComponent
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
    // , HomeModule
    , PopoverProfilePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
