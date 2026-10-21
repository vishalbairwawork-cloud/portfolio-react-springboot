package com.vishalbairwa.portfolio.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "experience_points")
public class ExperiencePoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 2000)
    private String description;

    private String icon;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "experience_id")
    @JsonIgnore
    private Experience experience;

    public ExperiencePoint() {}

    public ExperiencePoint(String title, String description, String icon, Experience experience) {
        this.title = title;
        this.description = description;
        this.icon = icon;
        this.experience = experience;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }

    public Experience getExperience() { return experience; }
    public void setExperience(Experience experience) { this.experience = experience; }
}
