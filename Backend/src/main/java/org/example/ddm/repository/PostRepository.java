package org.example.ddm.repository;

import org.example.ddm.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {

    @Query("SELECT p FROM Post p WHERE p.club = :club ORDER BY p.createdAt DESC")
    List<Post> findAllByClub(String club);
}
