import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProvedoresService } from './provedores.service';
import { IProvedores } from './provedores.models';

@Controller('provedores')
export class ProvedoresController {
  constructor(private readonly provedoresService: ProvedoresService) {}

  @Post()
  async crearProveedor(@Body() data: Partial<IProvedores>) {
    return await this.provedoresService.crearProveedor(data);
  }

  @Get()
  async obtenerTodos() {
    return await this.provedoresService.obtenerTodos();
  }

  @Get(':cedula')
  async obtenerPorCedula(@Param('cedula') cedula: string) {
    return await this.provedoresService.obtenerPorCedula(Number(cedula));
  }

  @Put(':cedula')
  async actualizarProveedor(
    @Param('cedula') cedula: string,
    @Body() datos: Partial<IProvedores>,
  ) {
    return await this.provedoresService.actualizarProveedor(Number(cedula), datos);
  }

  @Delete(':cedula')
  async eliminarProveedor(@Param('cedula') cedula: string) {
    return await this.provedoresService.eliminarProveedor(Number(cedula));
  }
}
