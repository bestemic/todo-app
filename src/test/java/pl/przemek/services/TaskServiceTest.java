package pl.przemek.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import pl.przemek.models.Task;
import pl.przemek.repositories.TaskRepository;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class TaskServiceTest {

    private static final String TEST_TITLE = "TEST";
    private static final String TEST_DESCRIPTION = "TEST DESCRIPTION";

    @Mock
    private TaskRepository taskRepository;

    @InjectMocks
    private TaskService taskService;

    private Task testTask;

    @BeforeEach
    void init() {
        testTask = new Task();
        testTask.setId(1L);
        testTask.setTitle(TEST_TITLE);
        testTask.setDescription(TEST_DESCRIPTION);
    }

    @Test
    void saveTaskTest() {
        //given
        when(taskRepository.save(Mockito.any(Task.class))).thenReturn(testTask);

        //when
        Task savedTask = taskService.saveTask(testTask);

        //then
        assertThat(savedTask).isNotNull();
        assertThat(savedTask.getId()).isEqualTo(1L);
        assertThat(savedTask.getTitle()).isEqualTo(TEST_TITLE);
        assertThat(savedTask.getDescription()).isEqualTo(TEST_DESCRIPTION);
    }

    @Test
    void getAllTasksTest() {
        //given
        Task testTask1 = new Task();
        testTask1.setId(2L);
        testTask1.setTitle(TEST_TITLE + 1);
        testTask1.setDescription(TEST_DESCRIPTION);

        when(taskRepository.findAll()).thenReturn(List.of(testTask, testTask1));

        //when
        List<Task> taskList = taskService.getAllTasks();

        //then
        assertThat(taskList).isNotNull();
        assertThat(taskList.size()).isEqualTo(2);
        assertThat(taskList.get(0).getId()).isEqualTo(1L);
        assertThat(taskList.get(0).getTitle()).isEqualTo(TEST_TITLE);
        assertThat(taskList.get(1).getId()).isEqualTo(2L);
        assertThat(taskList.get(1).getTitle()).isEqualTo(TEST_TITLE + 1);
    }
}