package org.example.ddm.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String content;
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;
    private String club;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id")
    private Employee employee;

    @PrePersist
    protected void onCreate() {
        createdAt = new Date();
    }
}
