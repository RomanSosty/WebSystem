package org.example.ddm.mapper;

import org.example.ddm.entity.Employee;
import org.example.ddm.entity.Post;
import org.example.ddm.requestDto.PostRequest;

public class PostMapper {

    private PostMapper() {throw new IllegalStateException("Utility class");}

    public static Post postRequestToPost(PostRequest postRequest, Employee employee) {
        Post post = new Post();
        post.setTitle(postRequest.getTitle());
        post.setContent(postRequest.getContent());
        post.setClub(postRequest.getClub());
        post.setEmployee(employee);
        return post;
    }
}
