import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PublishMessageDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: JSON.stringify({
      to: 'example@email.com',
      subject: 'Test program',
    }),
    type: 'string',
  })
  message: string;
}
