import styles from './CoursesPage.module.css';
import { mockCoursesDB } from '@/data/courses';

export function CoursesPage() {
  const publishedCourses = mockCoursesDB.filter(course => course.active);
  const handleGoToCourse = (title: string) => {
    alert(`Переход к курсу "${title}"... (в разработке)`);
  };

  return (
    <div>
      <h1>Список курсов</h1>
      <p>Здесь представлены все доступные на платформе курсы.</p>
      {publishedCourses.length > 0 ? (
        <ul className={styles.courseList}>
          {publishedCourses.map((course) => (
            <li key={course.id} className={styles.courseItem}>
              <div>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseTeacher}>Преподаватель: {course.teacher}</p>
              </div>
              <button onClick={() => handleGoToCourse(course.title)}>Перейти к курсу</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>На данный момент нет опубликованных курсов.</p>
      )}
    </div>
  );
}