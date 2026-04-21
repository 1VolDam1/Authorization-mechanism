const styles = {
  container: { padding: '0 16px', textAlign: 'center' as const },
  hero: {
    padding: '48px 24px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    marginBottom: '24px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  title: { margin: '0 0 16px', fontSize: '2.5rem', color: '#343a40' },
  subtitle: { margin: '0', fontSize: '1.25rem', color: '#6c757d' },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
  },
  featureCard: {
    padding: '24px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  featureTitle: { margin: '0 0 8px', color: '#007bff' },
};

export function HomePage() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Добро пожаловать в Колледж!</h1>
        <p style={styles.subtitle}>Ваша платформа для обучения и преподавания.</p>
      </div>

      <div style={styles.features}>
        <div style={styles.featureCard}>
          <h3 style={styles.featureTitle}>Для Студентов</h3>
          <p>Получите доступ к учебным материалам, отслеживайте свой прогресс и будьте на связи с преподавателями.</p>
        </div>
        <div style={styles.featureCard}>
          <h3 style={styles.featureTitle}>Для Преподавателей</h3>
          <p>Управляйте своими курсами, публикуйте материалы и взаимодействуйте со студентами.</p>
        </div>
        <div style={styles.featureCard}>
          <h3 style={styles.featureTitle}>Для Администраторов</h3>
          <p>Полный контроль над платформой: управляйте пользователями, ролями и контентом.</p>
        </div>
      </div>
    </div>
  );
}