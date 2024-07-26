package org.example.ddm.controller;

import org.example.ddm.entity.AuthRequest;
import org.example.ddm.entity.Employee;
import org.example.ddm.entity.Post;
import org.example.ddm.service.EmployeeServiceImpl;
import org.example.ddm.service.JwtService;
import org.example.ddm.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", allowCredentials = "true")
public class DdmController {

    @Autowired
    private EmployeeServiceImpl employeeService;
    @Autowired
    private PostService postService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;


    @PostMapping("/addNewEmployee")
    public String addNewEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }

    @PostMapping("/authAndGenerateToken")
    public String authAndGenerateToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            Employee employeeDetails = employeeService.loadEmployeeByUsername(authRequest.getUsername()).orElseThrow();
            return jwtService.generateToken(employeeDetails.getUsername(), employeeDetails.getName(), employeeDetails.getSurname(), employeeDetails.getRoles());
        } else {
            throw new UsernameNotFoundException("Invalid user request");
        }
    }

    @GetMapping("/pageJoy")
    @PreAuthorize("hasAuthority('ROLE_JOY')")
    public String employeeProfile() {
        return "Welcome to JOY main page";
    }

    @PostMapping("/addPost")
    @PreAuthorize("hasAuthority('ROLE_JOY')")
    public String addPost(@RequestBody Post post) {
        return postService.save(post);
    }

    @GetMapping("/allPostByClub")
    public List<Post> allPostByClub(@RequestParam String club) {
        return postService.getAllByClub(club);
    }
}
