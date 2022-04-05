package pl.przemek.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.przemek.models.Task;
import pl.przemek.services.TaskService;

import java.util.List;

@CrossOrigin
@RestController
@Api(tags = "Tasks")
@RequestMapping("/api/tasks")
public class TasksController {

    private final TaskService taskService;

    @Autowired
    public TasksController(TaskService taskService) {
        this.taskService = taskService;
    }

    // get all tasks
    @GetMapping("/getAll")
    @ApiOperation("Get all tasks")
    public List<Task> getAllTasks() {
        return taskService.findAll();
    }

    // create task
    @PostMapping("/create")
    @ApiOperation("Create task")
    public Task createTaks(@RequestBody Task task) {
        return taskService.save(task);
    }
}
