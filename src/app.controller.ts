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
    console.log(this.infoData.frontend.description);
    for (let key in this.infoData.frontend.data) {
      console.log(key, this.infoData.frontend.data[key]);
    }
    return { title: 'K-Stack', body: { mastheadBrand: 'Tech-Stack' }, query: `Hello ${query.name || 'world'}` };
  }
}
