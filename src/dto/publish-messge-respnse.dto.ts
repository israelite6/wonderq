import { ApiProperty } from '@nestjs/swagger';

export class PublishMessageResponseDto {
  @ApiProperty({ example: '342341314123', type: 'string' })
  id: string;
}
