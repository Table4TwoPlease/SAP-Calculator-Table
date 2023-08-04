import { GameAPI } from "../../../interfaces/gameAPI.interface";
import { getOpponent } from "../../../util/helper-functions";
import { Toy } from "../../toy.class";

export class FoamSword extends Toy {
    name = "Foam Sword";
    tier = 3;
    startOfBattle(gameApi?: GameAPI) {
        let opponent = getOpponent(gameApi, this.parent);
        for (let i = 0; i < this.level; i++) {
            let target = opponent.getLowestHealthPet();
            this.toyService.snipePet(target, 6, this.parent, this.name, true);
        }
    }
}