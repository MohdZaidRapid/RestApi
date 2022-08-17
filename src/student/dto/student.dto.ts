export class FindStudentResponseDto {
  id: string;
  name: string;
  teacher: string;
}

export class StudentResponseDto {
    id: string;
    name: string;
    teacher: string;
  }

export class CreateStudentsDto {
  name: string;
  teacher: string;
}

export class UpdateStudentsDto {
  name: string;
  teacher: string;
}
