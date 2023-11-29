export class CreateEventDto {
  id: number;
  dateId: Date;
  title: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  location: string;
}
