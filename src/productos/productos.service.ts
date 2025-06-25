import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProductos } from './Productos.models';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel('Productos') private readonly productosModel: Model<IProductos>,
  ) {}

  async crearProducto(data: Partial<IProductos>): Promise<IProductos> {
    const nuevoProducto = new this.productosModel(data);
    return await nuevoProducto.save();
  }

  async obtenerTodos(): Promise<IProductos[]> {
    return await this.productosModel.find().exec();
  }

  async obtenerPorId(id: number): Promise<IProductos | null> {
    return await this.productosModel.findOne({ id }).exec();
  }

  async actualizarProducto(id: number, datos: Partial<IProductos>): Promise<IProductos | null> {
    return await this.productosModel.findOneAndUpdate({ id }, datos, { new: true }).exec();
  }

  async eliminarProducto(id: number): Promise<IProductos | null> {
    return await this.productosModel.findOneAndDelete({ id }).exec();
  }
}
