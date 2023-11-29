import { Injectable } from "@nestjs/common";
import { CreateEventDto } from "@event/data-transfer-objects";

@Injectable()
export class EventService {

  create(event: CreateEventDto): any {

  }


}
