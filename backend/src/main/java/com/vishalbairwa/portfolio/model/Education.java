package com.vishalbairwa.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "education")
public class Education {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String degree;
    private String institution;
    private String period;
    private String logoUrl;

    @Column(length = 2000)
    private String description;

    private Integer displayOrder;

    public Education() {}

    public Education(String degree, String institution, String period, String logoUrl, String description, Integer displayOrder) {
        this.degree = degree;
        this.institution = institution;
        this.period = period;
        this.logoUrl = logoUrl;
        this.description = description;
        this.displayOrder = displayOrder;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDegree() { return degree; }
    public void setDegree(String degree) { this.degree = degree; }

    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }

    public String getPeriod() { return period; }
    public void setPeriod(String period) { this.period = period; }

    public String getLogoUrl() { return logoUrl; }
    public void setLogoUrl(String logoUrl) { this.logoUrl = logoUrl; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
