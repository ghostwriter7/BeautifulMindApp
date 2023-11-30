import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from "@event/event.module";
import { LoggerMiddleware } from "./logger.middleware";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "@user/user.module";
import { User } from "@user/user.entity";
import { Event } from "@event/event.entity";

@Module({
  imports: [EventModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'beautifulmind_user',
      password: 'password',
      database: 'beautifulmind',
      entities: [User, Event],
      synchronize: true,
    }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(LoggerMiddleware)
      // .exclude()
      .forRoutes('event');
  }

}
