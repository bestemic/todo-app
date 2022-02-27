package pl.przemek;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class TestService {

    public String getMessage(){
        log.info("Test Service method called");
        return "testing message";
    }
}
