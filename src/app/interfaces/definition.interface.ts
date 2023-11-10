export interface DefinitionOption {
    word: string;
    definition: Definition;
}

export interface Definition {
    type: PartOfSpeech;
    text: number;
}

type PartOfSpeech = "noun" | "NOUN" | "pronoun" | "PRONOUN" | "verb" | "VERB" | "adjective" | "ADJECTIVE" | "adverb" | "ADVERB" | "preposition" |"PREPOSITION" | "conjunction" | "CONJUNCTION" | "interjection" | "INTERJECTION";