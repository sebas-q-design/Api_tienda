import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProvedoresService } from './provedores.service';
import { ProvedoresController } from './provedores.controller';
import { ProvedoresSchema } from './provedores.models';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Provedores', schema: ProvedoresSchema }]),
  ],
  controllers: [ProvedoresController],
  providers: [ProvedoresService],
})
export class ProvedoresModule {}
