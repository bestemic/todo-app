package pl.przemek.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.przemek.models.Task;
import pl.przemek.services.TaskService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/tasks")
public class TasksController {

    private final TaskService taskService;

    @Autowired
    public TasksController(TaskService taskService) {
        this.taskService = taskService;
    }

    // get all tasks
    @GetMapping("/getAll")
    public List<Task> getAllTasks() {
        return taskService.findAll();
    }

    // create task
    @PostMapping("/create")
    public Task createTaks(@RequestBody Task task) {
        return taskService.save(task);
    }
}
