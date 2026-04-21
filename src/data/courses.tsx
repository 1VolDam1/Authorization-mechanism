export interface Course {
  id: number;
  title: string;
  teacher?: string;
  active: boolean;
}

export const mockCoursesDB: Course[] = [
  { id: 1, title: 'Введение в React', teacher: 'Анна Петровна', active: true },
  { id: 2, title: 'Основы JavaScript', teacher: 'Анна Петровна', active: true },
  { id: 3, title: 'Продвинутый TypeScript', teacher: 'Анна Петровна', active: false },
  { id: 4, title: 'Математический анализ', teacher: 'Иван Сидоров', active: true },
  { id: 5, title: 'Философия', teacher: 'Мария Смирнова', active: false },
];