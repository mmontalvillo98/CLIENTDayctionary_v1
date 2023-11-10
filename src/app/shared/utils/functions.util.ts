import * as moment from "moment";

/**
 * Devuelve la fecha actual en el formato utilizado por Dayctionary
 * @returns string con la fecha actual 
 */
export function todayDate(): string {
    return moment().format('YYYYMMDD');
    // return '20230904';
}

/**
 * Reordena un array aleatoriamente
 * @param a array
 * @returns array reordenado
 */
export function shuffle<T>(a: T[]): T[] {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}