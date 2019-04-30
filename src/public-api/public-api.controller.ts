import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { resolve } from 'path';
import {readFile} from 'fs';
import { PublicApiService } from './public-api.service';

@Controller('public-api')
export class PublicApiController {
    constructor(private readonly publicApiService: PublicApiService) {}

  @Get('services')
  @ApiOperation({ title: 'Get possible services' })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  root(@Param() param) {
    return this.publicApiService.getServices();
  }
}
