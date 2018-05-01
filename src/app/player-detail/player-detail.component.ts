import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { PlayerstoWatchService } from '../playerstowatch.service';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [PlayerService, PlayerstoWatchService],

})

export class PlayerDetailComponent implements OnInit {
  playerId: string;
  playerToDisplay;


  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private playerService: PlayerService,

    ) {}

    ngOnInit() {
      this.route.params.forEach((urlParameters) => {
       this.playerId = urlParameters['id'];
     });
     this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
    }
  }

  @Component({
    selector: 'app-player-detail',
    templateUrl: './player-detail.component.html',
    styleUrls: ['./player-detail.component.css'],
    providers: [PlayerService, PlayerstoWatchService],

  })

  export class PlayerDetailComponent2 implements OnInit {
    playerId: string;
    playerToDisplay;


    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private playerstoWatchService: PlayerstoWatchService,

      ) {}

      ngOnInit() {
        this.route.params.forEach((urlParameters) => {
         this.playerId = urlParameters['id'];
       });
       this.playerToDisplay = this.playerstoWatchService.getPlayerById(this.playerId);
      }
    }
