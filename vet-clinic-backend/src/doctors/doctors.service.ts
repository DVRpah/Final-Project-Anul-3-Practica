import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './doctor.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private doctorsRepository: Repository<Doctor>,
  ) {}

  async create(data: Partial<Doctor>): Promise<Doctor> {
    const doctor = this.doctorsRepository.create(data);
    return this.doctorsRepository.save(doctor);
  }

  async findAll(): Promise<Doctor[]> {
    return this.doctorsRepository.find({ where: { isActive: true } });
  }

  async findById(id: number): Promise<Doctor> {
    return this.doctorsRepository.findOne({ where: { id } });
  }

  async update(id: number, data: Partial<Doctor>): Promise<Doctor> {
    await this.doctorsRepository.update(id, data);
    return this.findById(id);
  }

  async remove(id: number): Promise<void> {
    await this.doctorsRepository.delete(id);
  }
}