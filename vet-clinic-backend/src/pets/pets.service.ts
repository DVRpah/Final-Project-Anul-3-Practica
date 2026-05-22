import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private petsRepository: Repository<Pet>,
  ) {}

  async create(data: Partial<Pet>): Promise<Pet> {
    const pet = this.petsRepository.create(data);
    return this.petsRepository.save(pet);
  }

  async findAll(): Promise<Pet[]> {
    return this.petsRepository.find({ relations: { owner: true } });
  }

  async findByUser(userId: number): Promise<Pet[]> {
    return this.petsRepository.find({ where: { userId } });
  }

  async findById(id: number): Promise<Pet> {
    return this.petsRepository.findOne({ where: { id }, relations: { owner: true } });
  }

  async update(id: number, data: Partial<Pet>): Promise<Pet> {
    await this.petsRepository.update(id, data);
    return this.findById(id);
  }

  async remove(id: number): Promise<void> {
    await this.petsRepository.delete(id);
  }
}