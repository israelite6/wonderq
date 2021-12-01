import { ApiProperty } from '@nestjs/swagger';

export class PublishedMessagesListResponse {
  @ApiProperty({ example: '342341314123', type: 'string' })
  id: string;

  @ApiProperty({
    example: JSON.stringify({ to: 'israel@gmail.com' }),
    type: 'string',
  })
  message: string;

  @ApiProperty({
    example: '143123412',
    type: 'string',
  })
  timestamp: string;

  @ApiProperty({
    example: false,
    type: 'boolean',
  })
  processing: boolean;
}
