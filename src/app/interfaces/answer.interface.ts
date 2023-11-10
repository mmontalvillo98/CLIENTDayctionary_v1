export interface AnswerToDo {
    userId: string;
    date: string;
    miniGame: MiniGame;
    word: string;
}

export interface AnswerDone {
    id: string;
    userId: string;
    date: string;
    gameAnswers: GameAnswer[];
}

export interface GameAnswer {
    miniGame: MiniGame;
    word:string;
}

export type MiniGame = 'PHONETIC' | 'DEFINITION' | 'SYNONYM'; 