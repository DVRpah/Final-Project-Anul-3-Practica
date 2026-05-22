import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {
  constructor(private petsService: PetsService) {}

  @Get()
  findAll() {
    return this.petsService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: number) {
    return this.petsService.findByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.petsService.findById(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.petsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.petsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.petsService.remove(id);
  }
}