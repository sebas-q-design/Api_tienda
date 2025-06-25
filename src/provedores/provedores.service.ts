import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProvedores } from './provedores.models';

@Injectable()
export class ProvedoresService {
  constructor(
    @InjectModel('Provedores') private readonly provedoresModel: Model<IProvedores>,
  ) {}

  async crearProveedor(data: Partial<IProvedores>): Promise<IProvedores> {
    const nuevoProveedor = new this.provedoresModel(data);
    return await nuevoProveedor.save();
  }

  async obtenerTodos(): Promise<IProvedores[]> {
    return await this.provedoresModel.find().exec();
  }

  async obtenerPorCedula(cedula: number): Promise<IProvedores | null> {
    return await this.provedoresModel.findOne({ cedula }).exec();
  }

  async actualizarProveedor(cedula: number, datos: Partial<IProvedores>): Promise<IProvedores | null> {
    return await this.provedoresModel.findOneAndUpdate({ cedula }, datos, { new: true }).exec();
  }

  async eliminarProveedor(cedula: number): Promise<IProvedores | null> {
    return await this.provedoresModel.findOneAndDelete({ cedula }).exec();
  }
}
