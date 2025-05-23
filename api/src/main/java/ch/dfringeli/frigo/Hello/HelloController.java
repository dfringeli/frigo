package ch.dfringeli.frigo.Hello;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/hello")
    @CrossOrigin()
    public String index() {
        return "Hello Frigo!";
    }
}