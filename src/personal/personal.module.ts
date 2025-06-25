import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonalController } from './personal.controller';
import { PersonalService } from './personal.service';
import { PersonalSchema } from './Personal.models';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Personal', schema: PersonalSchema }])],
  controllers: [PersonalController],
  providers: [PersonalService],
})
export class PersonalModule {}
