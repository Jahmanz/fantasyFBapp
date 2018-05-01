import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { AdminComponent2 } from './admin/admin.component';
import {DomSanitizer} from '@angular/platform-browser';

import { PlayersToWatchComponent } from './playerstowatch/playerstowatch.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerDetailComponent2 } from './player-detail/player-detail.component';
import { masterFirebaseConfig } from './api-keys';
// import { masterFirebaseConfig2} from './api-keys';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { EditPlayerComponent2 } from './edit-player/edit-player.component';
import { EmbedVideo } from 'ngx-embed-video';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

// export const firebaseConfig2 = {
//   apiKey: masterFirebaseConfig2.apiKey,
//   authDomain: masterFirebaseConfig2.authDomain,
//   databaseURL: masterFirebaseConfig2.databaseURL,
//   storageBucket: masterFirebaseConfig2.storageBucket
// };





@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PlayersToWatchComponent,
    PlayerlistComponent,
    PlayerDetailComponent,
    PlayerDetailComponent2,
    AdminComponent,
    AdminComponent2,
    EditPlayerComponent,
    EditPlayerComponent2,

  ],
  // entryComponents: [
  //   PlayerDetailComponent2,
  //   AdminComponent2,
  // ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireModule.initializeApp(firebaseConfig2),
    AngularFireDatabaseModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
