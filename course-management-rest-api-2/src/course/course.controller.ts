import {Controller,Get,Post,Put,Patch,Delete,Param,Body,UploadedFile, UseInterceptors} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Multer } from 'multer';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllCourses() {
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  getCourseById(@Param('id') id: string): string {
    return this.courseService.getCourseById(id);
  }

  @Post()
<<<<<<< HEAD
  createCourse(@Body() dto: CreateCourseDto) {
    return this.courseService.createCourse(dto);
  }

  @Put(':id')
  updateCourse(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
    return this.courseService.updateCourse(id, dto);
  }

  @Patch(':id')
  patchCourse(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
    return this.courseService.patchCourse(id, dto);
=======
  createCourse(CreateCourseDto: CreateCourseDto) {
    return this.courseService.createCourse(CreateCourseDto);
  }

  @Put(':id')
  updateCourse(@Param('id') id: string,updateCourseDto: UpdateCourseDto) {
    return this.courseService.updateCourse(id, updateCourseDto);
  }

  @Patch(':id')
  patchCourse(@Param('id') id: string, patchCourseDto: UpdateCourseDto) {
    return this.courseService.patchCourse(id, patchCourseDto);
>>>>>>> 966e660b872eb941a4fca54170a33cbc650ac741
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.courseService.deleteCourse(id);
  }

<<<<<<< HEAD
=======
  @Post()
create(@Body() dto: CreateCourseDto) {
return this.courseService.createCourse(dto);
}

@Put(':id')
update(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
  return this.courseService.updateCourse(id, dto);
}

@Patch(':id')
patch(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
  return this.courseService.patchCourse(id, dto);
}

>>>>>>> 966e660b872eb941a4fca54170a33cbc650ac741
@Post(':id/upload')
@UseInterceptors(
  FileInterceptor('file', {
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
    fileFilter: (req, file, cb) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)) {
        return cb(new Error('Only jpg, jpeg, png, pdf allowed'), false);
      }
      cb(null, true);
    },
  }),
)
uploadFile(
  @Param('id') id: string,
  @UploadedFile() file: Express.Multer.File,
) {
  return this.courseService.uploadCourseMaterial(id, file);
}
}




