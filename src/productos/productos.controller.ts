import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { IProductos } from './Productos.models';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  async crear(@Body() data: Partial<IProductos>) {
    return await this.productosService.crearProducto(data);
  }

  @Get()
  async obtenerTodos() {
    return await this.productosService.obtenerTodos();
  }

  @Get(':id')
  async obtenerPorId(@Param('id') id: string) {
    return await this.productosService.obtenerPorId(Number(id));
  }

  @Put(':id')
  async actualizar(@Param('id') id: string, @Body() data: Partial<IProductos>) {
    return await this.productosService.actualizarProducto(Number(id), data);
  }

  @Delete(':id')
  async eliminar(@Param('id') id: string) {
    return await this.productosService.eliminarProducto(Number(id));
  }
}
