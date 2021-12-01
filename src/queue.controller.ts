import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { QueueService } from './queue.service';
import { PublishMessageDto } from './dto/publish-message.dto';
import { PublishMessageResponseDto } from './dto/publish-messge-respnse.dto';
import { ApiResponse } from '@nestjs/swagger';
import { PublishedMessagesListResponse } from './dto/published-messeges-list-response.dto';
import { ConsumeMessageResponseDto } from './dto/consume-message-response.dto';
import { ConsumeMessageResponseInterface } from './interface/consume-message-response.interface';
import { AcknowledgeMessageDto } from './dto/acknowledge-message.dto';
import { AcknowledgeMessageResponseInterface } from './interface/acknowledge-message-response.interface';
import { AcknowledgeMessageResponseDto } from './dto/acknowledge-message-response.dto';
import { PublishMessageResponseInterface } from './interface/publish-message-response.interface';
import { EntityToJsonInterface } from './interface/entity.interface';
import { ConsumeMessageDto } from './dto/consume-message.dto';

@Controller()
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Post('/messages')
  @ApiResponse({
    status: 201,
    description: 'Message published to the queue successfully',
    type: PublishMessageResponseDto,
  })
  publishMessages(
    @Body() data: PublishMessageDto,
  ): PublishMessageResponseInterface {
    return this.queueService.create(data.message);
  }

  @Get('/messages')
  @ApiResponse({
    status: 201,
    description: 'List of all messages',
    type: PublishedMessagesListResponse,
    isArray: true,
  })
  messages(): EntityToJsonInterface[] {
    return this.queueService.all();
  }

  @Get('/consumes')
  @ApiResponse({
    status: 201,
    description: 'Get messages to consume',
    type: ConsumeMessageResponseDto,
    isArray: true,
  })
  consume(@Query() data: ConsumeMessageDto): ConsumeMessageResponseInterface[] {
    return this.queueService.consume(data.take);
  }

  @Post('/acknowledges')
  @ApiResponse({
    status: 201,
    description: 'Acknowledged successfully',
    type: AcknowledgeMessageResponseDto,
  })
  acknowledge(
    @Body() data: AcknowledgeMessageDto,
  ): AcknowledgeMessageResponseInterface {
    return this.queueService.acknowledge(data.id);
  }
}
