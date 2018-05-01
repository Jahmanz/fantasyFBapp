import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayersToWatchComponent }   from './playerstowatch/playerstowatch.component';
import { PlayerlistComponent }   from './playerlist/playerlist.component';
import { PlayerDetailComponent }   from './player-detail/player-detail.component';
import { PlayerDetailComponent2 }   from './player-detail/player-detail.component';

import { AdminComponent }   from './admin/admin.component';
import { AdminComponent2 }   from './admin/admin.component';


const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'playerstowatch',
    component: PlayersToWatchComponent
  },
  {
    path: 'playerlist',
    component: PlayerlistComponent
  },
  {
    path: 'players/:id',
    component: PlayerDetailComponent
  },
  {
    path: 'playerstowatch/:id',
    component: PlayerDetailComponent2
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin2',
    component: AdminComponent2
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
