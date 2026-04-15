import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';
import { text } from 'stream/consumers';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private enrollmentService: EnrollmentService,
  ) {}

  sendNotification(studentName: string, message:string){
    return{
        message: 'Notification sent',
        student: studentName,
        text: message
    };
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string) {
    const enrollment = this.enrollmentService.getEnrollments();
    return{
        message: 'Enrollment checked and notification sent',
        student: studentName,
        courseId,
        enrollment,
    };
}
}
