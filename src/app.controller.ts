import { Controller, Get, Query, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index.hbs')
  index(@Query() query): object {
    return { title: 'K-Stack', body: { mastheadBrand: 'Tech-Stack' }, query: `Hello ${query.name || 'world'}` };
  }
}
