import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { DataSource, getRepository, Repository } from 'typeorm';
import { Session } from './utils/typeorm/entities/Session';
import { TypeormStore } from 'connect-typeorm/out';
import { entities } from 'src/utils/typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const dataSource = new DataSource({
    type: 'mysql',
    host: process.env.MYSQL_DB_HOST,
    port: 3306,
    username: process.env.MYSQL_DB_USERNAME,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_DATABASE,
    //only true in development, updates entities on every request
    synchronize: true,
    entities: entities,
  });

  /* const sessionRepository = Repository<Session>; */
  /* const sessionRepository = getRepository(Session); */
  const sessionRepository = dataSource.getRepository(Session);

  /* Prefix every route with /api */
  app.setGlobalPrefix('api');

  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 6000 * 60 * 24,
      },
      store: new TypeormStore().connect(sessionRepository),
    }),
  );

  try {
    await app.listen(process.env.PORT);
    console.log(`Running on port ${process.env.PORT}!`);
  } catch (error) {}
}
bootstrap();
