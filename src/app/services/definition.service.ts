import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { todayDate } from '../shared/utils/functions.util';
import { DefinitionOption } from '../interfaces/definition.interface';

@Injectable({ providedIn: 'root' })
export class DefinitionService {

    http = inject(HttpClient);

    /**
     * Obtiene las definiciones del juego del día
     * @returns Observable<DefinitionOption[]>
     */
    public getTodayDefinitions(): Observable<DefinitionOption[]> {
        return this.http.get<DefinitionOption[]>(`${environment.API_PATH}/mini/definitions/${todayDate()}`);
    }    

}