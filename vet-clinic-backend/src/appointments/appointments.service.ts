import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './appointment.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentsRepository: Repository<Appointment>,
  ) {}

  async create(data: Partial<Appointment>): Promise<Appointment> {
    const appointment = this.appointmentsRepository.create(data);
    return this.appointmentsRepository.save(appointment);
  }

  async findAll(): Promise<Appointment[]> {
    return this.appointmentsRepository.find({
      relations: { user: true, pet: true, doctor: true, service: true },
    });
  }

  async findByUser(userId: number): Promise<Appointment[]> {
    return this.appointmentsRepository.find({
      where: { userId },
      relations: { pet: true, doctor: true, service: true },
    });
  }

  async findByDoctor(doctorId: number): Promise<Appointment[]> {
   return this.appointmentsRepository.find({
     where: { doctorId },
     relations: { user: true, pet: true, service: true },
    });
  }

  async findById(id: number): Promise<Appointment> {
    return this.appointmentsRepository.findOne({
      where: { id },
      relations: { user: true, pet: true, doctor: true, service: true },
    });
  }

  async update(id: number, data: Partial<Appointment>): Promise<Appointment> {
    await this.appointmentsRepository.update(id, data);
    return this.findById(id);
  }

  async remove(id: number): Promise<void> {
    await this.appointmentsRepository.delete(id);
  }
}