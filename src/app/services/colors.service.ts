import { Injectable } from '@angular/core';
import { COLORS } from '../data/colors';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor() { }

  getColors(){
    return COLORS;
  }
}
