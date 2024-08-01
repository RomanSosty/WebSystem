package org.example.ddm.service;

import org.example.ddm.entity.Employee;
import org.example.ddm.entity.Post;
import org.example.ddm.mapper.PostMapper;
import org.example.ddm.repository.EmployeeRepository;
import org.example.ddm.repository.PostRepository;
import org.example.ddm.requestDto.PostRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private EmployeeRepository employeeRepository;

    public String save(PostRequest postRequest) {
        Employee employee = employeeRepository.findByUsername(postRequest.getUsername()).orElse(null);

        if (employee == null) {
            throw new RuntimeException("Employee not found");
        }

        Post post = PostMapper.postRequestToPost(postRequest, employee);
        postRepository.save(post);
        return "Post saved";
    }

    public List<Post> getAllByClub(String club) {
        return postRepository.findAllByClub(club);
    }
}
