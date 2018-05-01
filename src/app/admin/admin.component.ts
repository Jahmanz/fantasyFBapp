import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { PlayerstoWatchService } from '../playerstowatch.service';
import { Player } from '../player.model';
import { Player2 } from '../player.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})

export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, team: string, notes: string, stats: string) {
    var newPlayer: Player = new Player(name, team, notes, stats);
    this.playerService.addPlayer(newPlayer);
  }
}

@Component({
  selector: 'app2-admin',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerstoWatchService]
})

export class AdminComponent2 implements OnInit {

  constructor(private playertoWatchService: PlayerstoWatchService) { }

  ngOnInit() {
  }

  submitForm2(name: string, team: string, notes: string, stats: string) {
    var newPlayer: Player2 = new Player2(name, team, notes, stats);
    this.playertoWatchService.addPlayerToWatch(newPlayer);
  }
}
