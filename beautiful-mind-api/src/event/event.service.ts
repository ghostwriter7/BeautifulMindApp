import { Injectable } from "@nestjs/common";
import { CreateEventDto } from "@event/data-transfer-objects";
import { InjectRepository } from "@nestjs/typeorm";
import { Event } from "@event/event.entity";
import { Repository } from "typeorm";

@Injectable()
export class EventService {

  constructor(@InjectRepository(Event) private eventRepository: Repository<Event>) {
  }

  async create(event: CreateEventDto): Promise<Event> {
    const newEvent = this.eventRepository.create(event);
    return await this.eventRepository.save(newEvent);
  }


}
