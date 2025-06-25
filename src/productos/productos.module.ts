import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { ProductosSchema } from './Productos.models';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Productos', schema: ProductosSchema }]),
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
