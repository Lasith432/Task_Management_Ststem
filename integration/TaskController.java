@RestController
@CrossOrigin
public class TaskController {
    List<String> tasks = new ArrayList<>();

    @GetMapping("/tasks")
    public List<String> getTasks() {
        return tasks;
    }

    @PostMapping("/tasks")
    public String addTask(@RequestBody String task) {
        tasks.add(task);
        return "Task added";
    }
}