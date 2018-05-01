import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { PlayerstoWatchService } from '../playerstowatch.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService]
})
export class EditPlayerComponent implements OnInit {
  @Input() selectedPlayer;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  beginUpdatingPlayer(playerToUpdate){
    this.playerService.updatePlayer(playerToUpdate);
  }

  beginDeletingPlayer(playerToDelete){
      if(confirm("Are you sure you want to delete this item from the inventory?")){
        this.playerService.deletePlayer(playerToDelete);
      }
    }

}

@Component({
  selector: 'app-edit2-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerstoWatchService]
})

export class EditPlayerComponent2 implements OnInit {
  @Input() selectedPlayer;

  constructor(private playertoWatchService: PlayerstoWatchService) { }

  ngOnInit() {
  }

  beginUpdatingPlayer(playerToUpdate){
    this.playertoWatchService.updatePlayer(playerToUpdate);
  }

  beginDeletingPlayer(playerToDelete){
      if(confirm("Are you sure you want to delete this item from the inventory?")){
        this.playertoWatchService.deletePlayer(playerToDelete);
      }
    }

}
