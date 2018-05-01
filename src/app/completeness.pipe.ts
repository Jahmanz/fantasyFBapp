import {Pipe, PipeTransform} from '@angular/core';
import {Player} from './models/player.model';

@Pipe({
  name: "completeness",
  pure: false
})


export class CompletenessPipe implements PipeTransform {
  transform(input: Player[], desiredCompleteness) {
    var output: Player[] = [];
    if(desiredCompleteness === "incompletePlayers") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "completedPlayers") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
