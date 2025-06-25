import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { ProvedoresModule } from './provedores/provedores.module';
import { PersonalModule } from './personal/personal.module';
import { MongooseModule,  } from '@nestjs/mongoose';


@Module({
  imports: [ProductosModule, ProvedoresModule, PersonalModule,MongooseModule.forRoot('mongodb+srv://sebastianperdomotriana:sebas123@cluster0.t7sxbvz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/TIENDA')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
