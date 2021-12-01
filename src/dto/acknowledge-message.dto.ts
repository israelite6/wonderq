import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AcknowledgeMessageDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '314134134',
    type: 'string',
  })
  id: string;
}
