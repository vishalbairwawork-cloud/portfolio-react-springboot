package com.vishalbairwa.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "profiles")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String headline;

    @Column(length = 2000)
    private String bio;

    private String email;
    private String linkedin;
    private String github;
    private String leetcode;
    private String medium;
    private String resumeUrl;
    private String statusBadge;

    public Profile() {}

    public Profile(String name, String headline, String bio, String email, String linkedin, String github, String leetcode, String medium, String resumeUrl, String statusBadge) {
        this.name = name;
        this.headline = headline;
        this.bio = bio;
        this.email = email;
        this.linkedin = linkedin;
        this.github = github;
        this.leetcode = leetcode;
        this.medium = medium;
        this.resumeUrl = resumeUrl;
        this.statusBadge = statusBadge;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getHeadline() { return headline; }
    public void setHeadline(String headline) { this.headline = headline; }

    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getLinkedin() { return linkedin; }
    public void setLinkedin(String linkedin) { this.linkedin = linkedin; }

    public String getGithub() { return github; }
    public void setGithub(String github) { this.github = github; }

    public String getLeetcode() { return leetcode; }
    public void setLeetcode(String leetcode) { this.leetcode = leetcode; }

    public String getMedium() { return medium; }
    public void setMedium(String medium) { this.medium = medium; }

    public String getResumeUrl() { return resumeUrl; }
    public void setResumeUrl(String resumeUrl) { this.resumeUrl = resumeUrl; }

    public String getStatusBadge() { return statusBadge; }
    public void setStatusBadge(String statusBadge) { this.statusBadge = statusBadge; }
}
