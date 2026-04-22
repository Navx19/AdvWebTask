import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';


@Injectable()
export class CourseService {
  
  getCourseById(id: string): string {
    return `Get Course with ID: ${id} - from Service`;
  }

  createCourse(dto: CreateCourseDto) {
  return {
    message: 'Course created successfully',
    data: dto,
  };
}

getAllCourses() {
  return {
    message: 'All courses fetched successfully',
    data: [],
  };
}

updateCourse(id: string, dto: UpdateCourseDto) {
  return {
    message: 'Course updated successfully',
    id,
    data: dto,
  };
}

patchCourse(id: string, dto: UpdateCourseDto) {
  return {
    message: 'Course patched successfully',
    id,
    updatedFields: Object.keys(dto),
  };
}

deleteCourse(id: string) {
  return {
    message: 'Course deleted successfully',
    id,
  };
}
uploadCourseMaterial(id: string, file: Express.Multer.File) {
  return {
    message: 'Material uploaded successfully',
    courseId: id,
    filename: file.filename,
    path: file.path,
  };
}
}

