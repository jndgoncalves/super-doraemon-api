import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 6000 * 60 * 24,
    }
  }))

  try {
    await app.listen(process.env.PORT);
    console.log(`Running on port ${process.env.PORT}!`)
  } catch (error) {

  }
}
bootstrap();
