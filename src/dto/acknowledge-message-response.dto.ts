import { ApiProperty } from '@nestjs/swagger';

export class AcknowledgeMessageResponseDto {
  @ApiProperty({ example: '342341314123', type: 'string' })
  id: string;

  @ApiProperty({ example: true, type: 'boolean' })
  acknowledged: boolean;
}
