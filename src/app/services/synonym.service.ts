import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { todayDate } from '../shared/utils/functions.util';
import { SynonymOption } from '../interfaces/synonym.interface';

@Injectable({ providedIn: 'root' })
export class SynonymService {

    http = inject(HttpClient);

    /**
     * Obtiene los sinónimos del juego del día
     * @returns Observable<SynonymOption[]>
     */
    public getTodaySynonyms(): Observable<SynonymOption[]> {
        return this.http.get<SynonymOption[]>(`${environment.API_PATH}/mini/synonyms/${todayDate()}`);
    }    

}