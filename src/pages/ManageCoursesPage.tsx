import { useState } from 'react';
import styles from './CoursesPage.module.css';
import { mockCoursesDB } from '@/data/courses';
import type { Course } from '@/data/courses';

export function ManageCoursesPage() {
  const [courses, setCourses] = useState<Course[]>(mockCoursesDB);
  
  const updateCourses = (newCourses: Course[]) => {
      mockCoursesDB.length = 0;
      Array.prototype.push.apply(mockCoursesDB, newCourses);
      setCourses([...mockCoursesDB]);
  };

  const handleToggleActive = (courseId: number) => {
    const newCourses = courses.map(course =>
      course.id === courseId ? { ...course, active: !course.active } : course
    );
    updateCourses(newCourses);
  };

  const handleDelete = (courseId: number) => {
    if (window.confirm('Вы уверены, что хотите удалить этот курс?')) {
      const newCourses = courses.filter(c => c.id !== courseId);
      updateCourses(newCourses);
    }
  };
  
  const handleCreate = () => {
    const newCourseTitle = prompt("Введите название нового курса:", "Новый курс");
    if (newCourseTitle) {
      const newCourse: Course = {
        id: Math.max(...courses.map(c => c.id), 0) + 1,
        title: newCourseTitle,
        active: false,
      };
      updateCourses([...courses, newCourse]);
    }
  };

  const handleEdit = (courseId: number) => {
    const courseToEdit = courses.find(c => c.id === courseId);
    if (!courseToEdit) return;
    const newTitle = prompt("Введите новое название курса:", courseToEdit.title);
    if (newTitle && newTitle !== courseToEdit.title) {
        const newCourses = courses.map(c => 
            c.id === courseId ? {...c, title: newTitle} : c
        );
        updateCourses(newCourses);
    }
  };

  return (
    <div>
      <h1>Управление курсами</h1>
      <p>Здесь вы можете редактировать, публиковать и удалять курсы.</p>
      <ul className={styles.courseList}>
        {courses.map((course) => (
          <li key={course.id} className={styles.courseItem}>
            <div>
              <h3 className={styles.courseTitle}>{course.title}</h3>
              <span className={`${styles.status} ${course.active ? styles.activeStatus : styles.inactiveStatus}`}>
                {course.active ? 'Опубликован' : 'Черновик'}
              </span>
            </div>
            <div className={styles.actions}>
              <button onClick={() => handleEdit(course.id)}>Редактировать</button>
              <button onClick={() => handleToggleActive(course.id)}>
                {course.active ? 'Снять с публикации' : 'Опубликовать'}
              </button>
              <button className={styles.deleteButton} onClick={() => handleDelete(course.id)}>
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleCreate} style={{ marginTop: '24px' }}>+ Создать новый курс</button>
    </div>
  );
}