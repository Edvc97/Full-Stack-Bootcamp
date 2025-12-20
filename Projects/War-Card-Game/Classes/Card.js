//Created by: Edvc97
export class Card {

    rank = undefined;
    suit = undefined;
    name = undefined;
    value = undefined;
    static values = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };

    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
        this.name = `${rank} of ${suit}`;
        this.value = Card.values[rank];
    }


}    