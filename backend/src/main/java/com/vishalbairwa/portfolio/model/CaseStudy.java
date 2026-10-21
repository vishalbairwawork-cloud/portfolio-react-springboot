package com.vishalbairwa.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "case_studies")
public class CaseStudy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 2000)
    private String description;

    @Column(length = 2000)
    private String approach;

    private String impact;
    private String icon;
    private String color;
    private Integer displayOrder;

    public CaseStudy() {}

    public CaseStudy(String title, String description, String approach, String impact, String icon, String color, Integer displayOrder) {
        this.title = title;
        this.description = description;
        this.approach = approach;
        this.impact = impact;
        this.icon = icon;
        this.color = color;
        this.displayOrder = displayOrder;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getApproach() { return approach; }
    public void setApproach(String approach) { this.approach = approach; }

    public String getImpact() { return impact; }
    public void setImpact(String impact) { this.impact = impact; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }

    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }

    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
