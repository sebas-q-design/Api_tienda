import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { IPersonal } from './Personal.models';

@Controller('personal')
export class PersonalController {
  constructor(private readonly personalService: PersonalService) {}

  @Post()
  async crear(@Body() data: Partial<IPersonal>) {
    return await this.personalService.crearPersonal(data);
  }

  @Get()
  async obtenerTodos() {
    return await this.personalService.obtenerTodos();
  }

  @Get(':id')
  async obtenerPorId(@Param('id') id: string) {
    return await this.personalService.obtenerPorId(Number(id));
  }

  @Put(':id')
  async actualizar(@Param('id') id: string, @Body() data: Partial<IPersonal>) {
    return await this.personalService.actualizarPersonal(Number(id), data);
  }

  @Delete(':id')
  async eliminar(@Param('id') id: string) {
    return await this.personalService.eliminarPersonal(Number(id));
  }
}
