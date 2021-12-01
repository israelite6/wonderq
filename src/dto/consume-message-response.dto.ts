import { ApiProperty } from '@nestjs/swagger';

export class ConsumeMessageResponseDto {
  @ApiProperty({ example: '342341314123', type: 'string' })
  id: string;

  @ApiProperty({ example: '{email: examples@mail.com}', type: 'string' })
  message: string;

  @ApiProperty({ example: '1431234123', type: 'string' })
  timestamp: string;
}
