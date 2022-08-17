import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { v4 as uuid } from 'uuid';
import {
  CreateStudentsDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentsDto,
} from './dto/student.dto';
import { FindTeacherResponseDto } from 'src/teacher/dto/teacher.dto';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentResponseDto {
    return this.students.find((student) => {
      return student.id === studentId;
    });
  }
  createStudent(payload: CreateStudentsDto): StudentResponseDto {
    let newStudent = {
      id: uuid(),
      ...payload,
    };

    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(payload: UpdateStudentsDto, studentId: string) {
    let updatedStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
      } else return student;
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }

  getStudentByTeacherId(teacherId: string): FindStudentResponseDto[] {
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          teacher: teacherId,
        };
      } else return student;
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }
}
