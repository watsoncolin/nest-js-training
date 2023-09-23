import { DataSource } from 'typeorm';
import { CoffeeRefactor1695481559672 } from './migration/1695481559672-CoffeeRefactor';
import { Flavor } from './coffees/entities/flavor.entity';
import { Coffee } from './coffees/entities/coffee.entity';
import { SchemaSync1695482406574 } from './migrations/1695482406574-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1695481559672, SchemaSync1695482406574],
});
