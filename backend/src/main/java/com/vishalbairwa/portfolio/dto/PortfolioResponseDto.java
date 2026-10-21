package com.vishalbairwa.portfolio.dto;

import com.vishalbairwa.portfolio.model.*;
import java.util.List;

public class PortfolioResponseDto {
    private Profile profile;
    private List<Stat> stats;
    private List<Experience> experiences;
    private List<Education> education;
    private List<CaseStudy> caseStudies;
    private List<Article> articles;

    public PortfolioResponseDto() {}

    public PortfolioResponseDto(Profile profile, List<Stat> stats, List<Experience> experiences,
                                List<Education> education, List<CaseStudy> caseStudies, List<Article> articles) {
        this.profile = profile;
        this.stats = stats;
        this.experiences = experiences;
        this.education = education;
        this.caseStudies = caseStudies;
        this.articles = articles;
    }

    public Profile getProfile() { return profile; }
    public void setProfile(Profile profile) { this.profile = profile; }

    public List<Stat> getStats() { return stats; }
    public void setStats(List<Stat> stats) { this.stats = stats; }

    public List<Experience> getExperiences() { return experiences; }
    public void setExperiences(List<Experience> experiences) { this.experiences = experiences; }

    public List<Education> getEducation() { return education; }
    public void setEducation(List<Education> education) { this.education = education; }

    public List<CaseStudy> getCaseStudies() { return caseStudies; }
    public void setCaseStudies(List<CaseStudy> caseStudies) { this.caseStudies = caseStudies; }

    public List<Article> getArticles() { return articles; }
    public void setArticles(List<Article> articles) { this.articles = articles; }
}
