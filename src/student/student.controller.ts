import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  CreateStudentsDto,
  UpdateStudentsDto,
  FindStudentResponseDto,
  StudentResponseDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentsService: StudentService) {}
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return this.studentsService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): FindStudentResponseDto {
    // console.log(studentId);
    return this.studentsService.getStudentById(studentId);
  }
  @Post()
  createStudent(@Body() body: CreateStudentsDto): FindStudentResponseDto {
    return this.studentsService.createStudent(body);
  }
  @Put('/:studentId')
  updateStudents(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentsDto,
  ): StudentResponseDto {
    return this.studentsService.updateStudent(body, studentId);
  }
}
