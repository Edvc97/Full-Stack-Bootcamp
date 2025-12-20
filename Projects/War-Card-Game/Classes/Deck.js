//Created by: Edvc97
import { Card } from "./card.js";

export class Deck {
    collection = [];
    static suites = ["Hearts", "Diamonds", "Clubs", "Spades"];
    static ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];



    constructor() {
        this._buildDeck();
        this._suffle();
        //console.log(this.collection);

    }

    _buildDeck() {
        for (var suite of Deck.suites) {
            for (var rank of Deck.ranks) {
                this.collection.push(new Card(rank, suite));
            }
        }
    }

    _suffle() {
        for (var i = (this.collection.length - 1); i > 0; i -= 1) {

            const random = Math.floor((Math.random() * (i + 1)));
            [this.collection[i], this.collection[random]] = [this.collection[random], this.collection[i]];

        }
    }

    deal(numOfCards) {
        const num = Number(numOfCards);
        var cards = [];

        if (!isFinite(num)) {
            console.log("Not a valid input!");
            return;
        }

        if (num > this.collection.length) {
            console.log("Not enough cards in deck to deal " + numOfCards + " Cards!");
            return;
        }

        for (var i = 0; i < num; i += 1) {
            cards.push(this.collection.pop());
        }
        return cards;

    }

}

