import { Component, OnInit } from '@angular/core';
import { Player2 } from '../player.model';
import { Router } from '@angular/router';
import { PlayerstoWatchService } from '../playerstowatch.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-playerstowatch',
  templateUrl: './playerstowatch.component.html',
  styleUrls: ['./playerstowatch.component.css'],
  providers: [PlayerstoWatchService]

})
export class PlayersToWatchComponent implements OnInit {
  playerstowatch: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private playerToWatchService: PlayerstoWatchService){}

  ngOnInit(){
  this.playerstowatch = this.playerToWatchService.getPlayersToWatch();

}

  goToDetailPage(clickedPlayer) {
    this.router.navigate(['playerstowatch', clickedPlayer.$key]);
  };
}
