export interface PhoneticOption {
    word: string;
    phonetic: Phonetic;
}

export interface Phonetic {
    audio: string;
    syllables: number;
}