import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PhoneticOption } from '../interfaces/phonetic.interface';
import { Observable } from 'rxjs';
import { todayDate } from '../shared/utils/functions.util';

@Injectable({ providedIn: 'root' })
export class PhoneticService {

    http = inject(HttpClient);

    /**
     * Obtiene las fonéticas del juego del día
     * @returns Observable<PhoneticOption[]>
     */
    public getTodayPhonetics(): Observable<PhoneticOption[]> {
        return this.http.get<PhoneticOption[]>(`${environment.API_PATH}/mini/phonetics/${todayDate()}`);
    }    

}