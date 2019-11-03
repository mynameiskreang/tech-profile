import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { AppDto } from './app.dto';

@Injectable()
export class AppService {
  getData(): AppDto {
    const rawdata = fs.readFileSync('public/data.json');
    return JSON.parse(rawdata.toString());
  }
}
