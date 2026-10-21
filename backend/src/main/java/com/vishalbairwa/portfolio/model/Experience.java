package com.vishalbairwa.portfolio.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "experiences")
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String company;
    private String role;
    private String period;
    private String logoUrl;
    private Integer displayOrder;

    @OneToMany(mappedBy = "experience", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<ExperiencePoint> points = new ArrayList<>();

    public Experience() {}

    public Experience(String company, String role, String period, String logoUrl, Integer displayOrder) {
        this.company = company;
        this.role = role;
        this.period = period;
        this.logoUrl = logoUrl;
        this.displayOrder = displayOrder;
    }

    public void addPoint(String title, String description, String icon) {
        ExperiencePoint point = new ExperiencePoint(title, description, icon, this);
        this.points.add(point);
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getPeriod() { return period; }
    public void setPeriod(String period) { this.period = period; }

    public String getLogoUrl() { return logoUrl; }
    public void setLogoUrl(String logoUrl) { this.logoUrl = logoUrl; }

    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }

    public List<ExperiencePoint> getPoints() { return points; }
    public void setPoints(List<ExperiencePoint> points) { this.points = points; }
}
