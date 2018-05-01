import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { PlayerstoWatchService } from '../playerstowatch.service';

import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css'],
  providers: [PlayerService]
})

export class PlayerlistComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private playerService: PlayerService){}

  ngOnInit(){
  this.players = this.playerService.getPlayers();

}

  goToDetailPage(clickedPlayer) {
    this.router.navigate(['players', clickedPlayer.$key]);
  };
}

@Component({
  selector: 'app-playerstowatch',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css'],
  providers: [PlayerstoWatchService]
})

export class PlayerlistComponent2 implements OnInit {
  playerstowatch: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private playerService: PlayerService){}

  ngOnInit(){
  this.playerstowatch = this.playerService.getPlayers();

}

  goToDetailPage(clickedPlayer) {
    this.router.navigate(['playerstowatch', clickedPlayer.$key]);
  };
}
