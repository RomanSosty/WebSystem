package org.example.ddm.service;

import org.example.ddm.entity.Post;
import org.example.ddm.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public String save(Post post) {
        postRepository.save(post);
        return "Post saved";
    }
}
