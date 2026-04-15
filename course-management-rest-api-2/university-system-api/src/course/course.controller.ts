import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CourseService } from './course.service';


@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}


@Get()
getAllCourses() {
  return this.courseService.getAllCourses();
}
@Get(':id')
getCourseById(@Param('id') id: string) {
  return this.courseService.getCourseById(id);
}

@Post()
createCourse(@Body() body: any) {

    const {name, code} = body;
  return this.courseService.createCourse(name, code);
}
}


