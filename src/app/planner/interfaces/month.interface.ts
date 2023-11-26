import { Event } from "@planner/interfaces/event.interface";

export interface Month {
  events: Map<Date, Event[]>;
  month: number;
  year: number;
}
