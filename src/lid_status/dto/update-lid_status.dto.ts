import { PartialType } from '@nestjs/swagger';
import { CreateLidStatusDto } from './create-lid_status.dto';

export class UpdateLidStatusDto extends PartialType(CreateLidStatusDto) {}
