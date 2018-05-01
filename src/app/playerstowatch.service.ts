import { Injectable } from '@angular/core';
import { Player2 } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerstoWatchService {
  playerstowatch: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.playerstowatch = database.list('playerstowatch');

  }

  getPlayersToWatch(){
    return this.playerstowatch;
  }

  addPlayerToWatch(newPlayer: Player2) {
    this.playerstowatch.push(newPlayer);
  }

  getPlayerById(playerId: string){
    return this.database.object('/playerstowatch/' + playerId);
  }

  updatePlayer(localUpdatedPlayer){
    var playerEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);
    playerEntryInFirebase.update({name: localUpdatedPlayer.name,
                                team: localUpdatedPlayer.team,
                                notes: localUpdatedPlayer.notes,
                                stats: localUpdatedPlayer.stats});
  }
  deletePlayer(localPlayerToDelete){
      var playerEntryInFirebase = this.getPlayerById(localPlayerToDelete.$key);
      playerEntryInFirebase.remove();
    }

}
