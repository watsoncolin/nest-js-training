import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { COFFEE_BRANDS } from './coffee.constants';

class ConfigService {}

class DevelopementConfigService {}

class ProductionConfigService {}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  providers: [
    CoffeesService,
    { provide: COFFEE_BRANDS, useValue: ['buddy brew', 'nescafe'] },
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? DevelopementConfigService
          : ProductionConfigService,
    },
  ],
  controllers: [CoffeesController],
  exports: [CoffeesService],
})
export class CoffeesModule {}
