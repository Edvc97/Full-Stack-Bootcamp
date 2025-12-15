//Created by: Edvc97
import { Deck } from './Deck.js';
import { Player } from './Player.js';

export class WarCardGame {
    deck = null;
    playerAlpha = null;
    playerOmega = null;
    roundsPlayed = 0;
    isGameOver = false;

    constructor() {
        this.deck = new Deck;
        this.playerAlpha = new Player('Alpha', this.deck.deal(26));
        this.playerOmega = new Player('Omega', this.deck.deal(26));
    }

    startGame() {

        while (this.playerAlpha.hand.length > 0 && this.playerOmega.hand.length > 0 && !this.isGameOver) {
            this.roundsPlayed += 1;
            console.log(`--- Round ${this.roundsPlayed} ---`);

            const cardAlpha = this.playerAlpha.drawFromHand();
            const cardOmega = this.playerOmega.drawFromHand();

            if (!cardAlpha || !cardOmega) {
                this.checkAndDeclareWinner();
                break;
            }

            const pot = [cardAlpha, cardOmega];


            this.playRound(cardAlpha, cardOmega, pot);


            if (!this.isGameOver) {
                console.log(`${this.playerAlpha.name} cards: ${this.playerAlpha.hand.length}`);
                console.log(`${this.playerOmega.name} cards: ${this.playerOmega.hand.length}`);
            }

        }

        if (!this.isGameOver) {
            this.checkAndDeclareWinner();
        }
    }

    playRound(cardAlpha, cardOmega, pot) {
        if (cardAlpha.value > cardOmega.value) {
            console.log(`${this.playerAlpha.name} wins this round.`);
            this.playerAlpha.addToHand(pot);
            return;
        }
        if (cardAlpha.value < cardOmega.value) {
            console.log(`${this.playerOmega.name} wins this round.`);
            this.playerOmega.addToHand(pot);
            return;
        }

        ///WAR!!!!!
        console.log("Round escalates to a war!")
        this.handleWar(pot);

    }

    handleWar(pot) {
        if (this.playerAlpha.hand.length < 2) {
            ///WAR IS IMMEDIATELY LOST ;(
            this.playerOmega.addToHand(pot);
            console.log(`${this.playerOmega.name} IS THE GAME WINNER!!!`);
            console.log(`${this.playerAlpha.name} final cards: ${this.playerAlpha.hand.length}`);
            console.log(`${this.playerOmega.name} final cards: ${this.playerOmega.hand.length}`);
            console.log(`Total Rounds Played: ${this.roundsPlayed}`);
            this.isGameOver = true;

            return;
        }
        if (this.playerOmega.hand.length < 2) {
            ///WAR IS IMMEDIATELY LOST ;(
            this.playerAlpha.addToHand(pot);
            console.log(`${this.playerAlpha.name} IS THE GAME WINNER!!!`);
            console.log(`${this.playerAlpha.name} final cards: ${this.playerAlpha.hand.length}`);
            console.log(`${this.playerOmega.name} final cards: ${this.playerOmega.hand.length}`);
            console.log(`Total Rounds Played: ${this.roundsPlayed}`);
            this.isGameOver = true;

            return;
        }
        //I.....De....clare
        console.log("I.....De....clare");
        pot.push(this.playerAlpha.drawFromHand());
        pot.push(this.playerOmega.drawFromHand());

        ///WAR!!!!!
        console.log("WAR!!!!!");
        const battleAlpha = this.playerAlpha.drawFromHand();
        const battleOmega = this.playerOmega.drawFromHand();
        pot.push(battleAlpha, battleOmega);

        this.playRound(battleAlpha, battleOmega, pot);



    }

    checkAndDeclareWinner() {
        if (this.playerAlpha.hand.length < 1) {
            console.log(`${this.playerOmega.name} IS THE GAME WINNER!!!`);
            console.log(`${this.playerAlpha.name} final cards: ${this.playerAlpha.hand.length}`);
            console.log(`${this.playerOmega.name} final cards: ${this.playerOmega.hand.length}`);
            console.log(`Total Rounds Played: ${this.roundsPlayed}`);
            this.isGameOver = true;

        }
        else if (this.playerOmega.hand.length < 1) {
            console.log(`${this.playerAlpha.name} IS THE GAME WINNER!!!`);
            console.log(`${this.playerAlpha.name} final cards: ${this.playerAlpha.hand.length}`);
            console.log(`${this.playerOmega.name} final cards: ${this.playerOmega.hand.length}`);
            console.log(`Total Rounds Played: ${this.roundsPlayed}`);
            this.isGameOver = true;

        }
    }

}