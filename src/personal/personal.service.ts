import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPersonal } from './Personal.models';

@Injectable()
export class PersonalService {
  constructor(
    @InjectModel('Personal') private readonly personalModel: Model<IPersonal>,
  ) {}

  async crearPersonal(data: Partial<IPersonal>): Promise<IPersonal> {
    const nuevo = new this.personalModel(data);
    return await nuevo.save();
  }

  async obtenerTodos(): Promise<IPersonal[]> {
    return await this.personalModel.find().exec();
  }

  async obtenerPorId(id: number): Promise<IPersonal | null> {
    return await this.personalModel.findOne({ id }).exec();
  }

  async actualizarPersonal(id: number, datos: Partial<IPersonal>): Promise<IPersonal | null> {
    return await this.personalModel.findOneAndUpdate({ id }, datos, { new: true }).exec();
  }

  async eliminarPersonal(id: number): Promise<IPersonal | null> {
    return await this.personalModel.findOneAndDelete({ id }).exec();
  }
}
