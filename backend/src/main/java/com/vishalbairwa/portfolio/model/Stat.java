package com.vishalbairwa.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "portfolio_stats")
public class Stat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String label;
    private String value;
    private String icon;
    private String color;
    private Integer displayOrder;

    public Stat() {}

    public Stat(String label, String value, String icon, String color, Integer displayOrder) {
        this.label = label;
        this.value = value;
        this.icon = icon;
        this.color = color;
        this.displayOrder = displayOrder;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getLabel() { return label; }
    public void setLabel(String label) { this.label = label; }

    public String getValue() { return value; }
    public void setValue(String value) { this.value = value; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }

    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }

    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
