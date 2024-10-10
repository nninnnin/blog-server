import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from '@/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}

@Controller('cats')
export class CatsController {
  @Get('all')
  findAll() {
    return 'All Cats are founded';
  }

  @Post()
  create() {
    return 'A cat is created';
  }
}
