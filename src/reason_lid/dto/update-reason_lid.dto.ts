import { PartialType } from '@nestjs/swagger';
import { CreateReasonLidDto } from './create-reason_lid.dto';

export class UpdateReasonLidDto extends PartialType(CreateReasonLidDto) {}
