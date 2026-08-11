import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estado } from '../../model/estado';
import { Municipio } from '../../model/municipio';

@Injectable({
  providedIn: 'root'
})
export class UfMunicipioService {

  constructor(private http: HttpClient) { }

  listaUF(): Observable<Estado[]> { 
    const apiUrl = 'https://servicodados.ibge.gov.br/api/v1//localidades/estados'

    return this.http.get<Estado[]>(apiUrl)
    
  }

  listaMunicipios(idUF: number): Observable<Municipio[]> { 
    const apiUrl = `https://servicodados.ibge.gov.br/api/v1//localidades/estados/${idUF}/municipios`

    return this.http.get<Municipio[]>(apiUrl)
    
  }

 
}
