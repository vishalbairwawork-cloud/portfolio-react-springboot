package com.vishalbairwa.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "articles")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 2000)
    private String summary;

    private String url;
    private String image;
    private Double delay;
    private Integer displayOrder;

    public Article() {}

    public Article(String title, String summary, String url, String image, Double delay, Integer displayOrder) {
        this.title = title;
        this.summary = summary;
        this.url = url;
        this.image = image;
        this.delay = delay;
        this.displayOrder = displayOrder;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }

    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public Double getDelay() { return delay; }
    public void setDelay(Double delay) { this.delay = delay; }

    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
