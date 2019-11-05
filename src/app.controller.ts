import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { AppDto } from './app.dto';

@Controller()
export class AppController {
  infoData: AppDto;

  constructor(private readonly appService: AppService) {
  }

  @Get()
  @Render('index.hbs')
  index(@Query() query): object {
    this.infoData = this.appService.getData();
    return {
      title: 'K-Stack',
      body: { mastheadBrand: 'Tech-Stack' },
      frontend: this.infoData.frontend,
      backend: this.infoData.backend,
      database: this.infoData.database,
      tools: this.infoData.tools,
      query: `Hello ${query.name || 'world'}`,
    };
  }
}
