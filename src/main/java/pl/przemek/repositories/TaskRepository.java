package pl.przemek.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.przemek.models.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
