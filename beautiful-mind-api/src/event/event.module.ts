import { Module } from '@nestjs/common';
import { EventController } from '@event/event.controller';
import { EventService } from "@event/event.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Event } from "@event/event.entity";

// @Global() -> if you want to make this module global and its exported providers without a need to import the module elsewhere
@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [EventController],
  providers: [EventService],
  // exports: [public providers]
})
export class EventModule {
}
