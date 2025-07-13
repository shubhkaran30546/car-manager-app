import { Engine } from './engine.model';

export interface Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  production_year: number;
  engine: Engine;
  [key: string]: number | string | Engine;
}
