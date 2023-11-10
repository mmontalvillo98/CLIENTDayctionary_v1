import { Definition, DefinitionOption } from "./definition.interface"
import { Phonetic, PhoneticOption } from "./phonetic.interface"
import { SynonymOption } from "./synonym.interface"

export interface Game {
    id?: string,
    date?: string,
    word?: string,
    version?: number,
    deleted?: boolean,
    definition?: Definition,
    phonetic?: Phonetic,
    synonym?: string,
    similarDefinitions?: DefinitionOption[],
    similarPhonetics?: PhoneticOption[],
    similarSynonyms?: string[],
}