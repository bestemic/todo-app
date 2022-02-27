package pl.przemek.controller;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.przemek.TestService;

@Slf4j
@Controller
public class TestController {

    private final TestService testService;

    @Autowired
    public TestController(TestService testService) {
        this.testService = testService;
    }

    @GetMapping("test")
    public String test(Model model){
        log.info("test method called in controller ");
        model.addAttribute("message", testService.getMessage());
        return "test";
    }

}
