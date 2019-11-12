<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">

## รวมคำสั่งที่น่าสนใจ

```bash
$ nest new your-project-name
```
สำหรับสร้าง project

```bash
$ nest g controller your-controller-name
```
สำหรับสร้าง controller

```bash
$ nest g service your-service-name
```
สำหรับสร้าง service

อ่านเพิ่มเติมได้ที่ [nest-cli](https://docs.nestjs.com/cli/usages)

## เปลี่ยน engine จาก Express เป็น Fastify

### Installation

```bash
$ npm i --save @nestjs/platform-fastify
```

### Adapter

```javascript
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    ApplicationModule,
    new FastifyAdapter()
  );
  await app.listen(3000);
}
bootstrap();
```
แก้ที่ไฟล์ src/main.ts

อ่านเพิ่มเติมได้ที่ [nest-fastify](https://docs.nestjs.com/techniques/performance)

## เพิ่ม view engine ด้วย Handlebars

### Installation

```bash
$ npm install --save hbs
```

### Adapter

```javascript
import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views'),
  });
  await app.listen(3000);
}
bootstrap();
```
แก้ที่ไฟล์ src/main.ts

```bash
$ mkdir public views
```
เพิ่ม folder public, views


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>App</title>
  </head>
  <body>
    {{ message }}
  </body>
</html>
```
เพิ่มไฟล์ index.hbs ที่ views/

```javascript
import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index.hbs')
  root() {
    return { message: 'Hello world!' };
  }
}
```
แก้ที่ไฟล์ src/app.controller.ts

อ่านเพิ่มเติมได้ที่ [nest-mvc](https://docs.nestjs.com/techniques/mvc)

### Docker

```shell script
$ docker build -t tech-profile
$ docker run -p 3000:3000 -network="host" -d tech-profile:lasted
```
