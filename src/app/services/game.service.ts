import { Injectable } from "@angular/core";
import { Player } from "../classes/player.class";
import { GameAPI } from "../interfaces/gameAPI.interface";
import { AbilityService } from "./ability.service";
import { Pet } from "../classes/pet.class";

@Injectable({
    providedIn: "root"
})
export class GameService {

    gameApi: GameAPI;

    constructor() {
    }

    init(player: Player, opponent: Player) {
        this.gameApi = {
            player: player,
            opponet: opponent
        }
    }

    setTierGroupPets(playerPetPool? : Map<number, string[]>, opponentPetPool? : Map<number, string[]>) {
        if (playerPetPool != null)
            this.gameApi.playerPetPool = playerPetPool;

        if (opponentPetPool != null)
            this.gameApi.opponentPetPool = opponentPetPool;

        console.log(this.gameApi)
    }

    setPreviousShopTier(tier: number) {
        this.gameApi.previousShopTier = tier;
    }

}