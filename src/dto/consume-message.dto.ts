import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ConsumeMessageDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '2',
    type: 'number',
  })
  take: number;
}
