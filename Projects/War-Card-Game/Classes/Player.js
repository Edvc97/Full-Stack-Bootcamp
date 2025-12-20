//Created by: Edvc97

export class Player {
    name = undefined;
    hand = [];

    constructor(name, pile) {
        this.name = name;
        this.hand = pile;

    }

    drawFromHand(){

        if(this.hand.length < 1){
            console.log("No cards in hand.");
            return;
        }
        return this.hand.pop();
    }
    addToHand(pile){
        if(!Array.isArray(pile)){
            console.log("I need an array of cards.");
            return;
        }
        this.hand.push(...pile);
    }
    
}