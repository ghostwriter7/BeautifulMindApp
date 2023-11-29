import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post } from "@nestjs/common";
import { EventService } from "@event/event.service";
import { CreateEventDto, UpdateEventDto } from "@event/data-transfer-objects";

// @Request(), @Req()	req
// @Response(), @Res()*	res
// @Next()	next
// @Session()	req.session
// @Param(key?: string)	req.params / req.params[key]
// @Body(key?: string)	req.body / req.body[key]
// @Query(key?: string)	req.query / req.query[key]
// @Headers(name?: string)	req.headers / req.headers[name]
// @Ip()	req.ip
// @HostParam()	req.hosts

// Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), @Head(), @All()

// The 'ab*cd' route path will match abcd, ab_cd, abecd, and so on. The characters ?, +, *, and ()
// may be used in a route path, and are subsets of their regular expression counterparts.
// The hyphen ( -) and the dot (.) are interpreted literally by string-based paths

// @Redirect('https://nestjs.com', 301)

@Controller("event")
export class EventController {

  constructor(private eventService: EventService) {
  }

  @Get("exception")
  getException(): void {
    // any thrown HttpException will be automatically handled by Nest.js and returned to the client
    throw new HttpException("My message", 500);
  }

  @Get(":id")
  // @HttpCode(200) specify custom HttpCode
  getEventById(/*@Res() response -> access Response object */ @Param("id") id: number): any {
    return "hello";
  }

  @Post()
  createEvent(@Body() createEventDto: CreateEventDto): any {

  }

  @Delete(":id")
  deleteEvent(@Param("id") id: number): any {

  }

  @Patch(":id")
  patchEvent(@Param("id") id: number, @Body() body: UpdateEventDto): any {

  }
}
