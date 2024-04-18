import { Injectable } from '@nestjs/common';
import { CreateLidStatusDto } from './dto/create-lid_status.dto';
import { UpdateLidStatusDto } from './dto/update-lid_status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LidStatus } from './entities/lid_status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LidStatusService {
  constructor(
    @InjectRepository(LidStatus)
    private readonly lidStatusRepo: Repository<LidStatus>,
  ) {}

  create(createLidStatusDto: CreateLidStatusDto) {
    return this.lidStatusRepo.save(createLidStatusDto);
  }

  findAll() {
    return this.lidStatusRepo.find({ relations: { lids: true } });
  }

  findOne(id: number) {
    return this.lidStatusRepo.findOneBy({ id });
  }

  update(id: number, updateLidStatusDto: UpdateLidStatusDto) {
    return this.lidStatusRepo.update({ id }, updateLidStatusDto);
  }

  remove(id: number) {
    return this.lidStatusRepo.delete({ id });
  }
}
