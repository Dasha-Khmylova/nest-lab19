import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): any[] {
    return this.catsService.findAll();
  }

  @Post()
  create(@Body() cat: any) {
    this.catsService.create(cat);
    return { message: 'Cat successfully added' };
  }
}