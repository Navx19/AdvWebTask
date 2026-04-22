import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

    @Post('send')
    send(@Body() Body: any) {
        return this.notificationService.sendNotification(
            Body.studentName,
            Body.message
        );
    }
     @Post('check')
  check(@Body() body: any) {
    return this.notificationService.checkEnrollmentAndNotify(
      body.studentName,
      body.courseId,
    );
    }
}
