package com.vishalbairwa.portfolio.controller;

import com.vishalbairwa.portfolio.dto.PortfolioResponseDto;
import com.vishalbairwa.portfolio.model.*;
import com.vishalbairwa.portfolio.repository.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    private final ProfileRepository profileRepository;
    private final StatRepository statRepository;
    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final CaseStudyRepository caseStudyRepository;
    private final ArticleRepository articleRepository;

    public PortfolioController(ProfileRepository profileRepository,
                               StatRepository statRepository,
                               ExperienceRepository experienceRepository,
                               EducationRepository educationRepository,
                               CaseStudyRepository caseStudyRepository,
                               ArticleRepository articleRepository) {
        this.profileRepository = profileRepository;
        this.statRepository = statRepository;
        this.experienceRepository = experienceRepository;
        this.educationRepository = educationRepository;
        this.caseStudyRepository = caseStudyRepository;
        this.articleRepository = articleRepository;
    }

    @GetMapping("/portfolio")
    public ResponseEntity<PortfolioResponseDto> getFullPortfolio() {
        Profile profile = profileRepository.findAll().stream().findFirst().orElse(null);
        List<Stat> stats = statRepository.findAllByOrderByDisplayOrderAsc();
        List<Experience> experiences = experienceRepository.findAllByOrderByDisplayOrderAsc();
        List<Education> education = educationRepository.findAllByOrderByDisplayOrderAsc();
        List<CaseStudy> caseStudies = caseStudyRepository.findAllByOrderByDisplayOrderAsc();
        List<Article> articles = articleRepository.findAllByOrderByDisplayOrderAsc();

        PortfolioResponseDto response = new PortfolioResponseDto(profile, stats, experiences, education, caseStudies, articles);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/profile")
    public ResponseEntity<Profile> getProfile() {
        return profileRepository.findAll().stream().findFirst()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/profile")
    public ResponseEntity<Profile> updateProfile(@RequestBody Profile updated) {
        Profile profile = profileRepository.findAll().stream().findFirst().orElse(new Profile());
        profile.setName(updated.getName());
        profile.setHeadline(updated.getHeadline());
        profile.setBio(updated.getBio());
        profile.setEmail(updated.getEmail());
        profile.setLinkedin(updated.getLinkedin());
        profile.setGithub(updated.getGithub());
        profile.setLeetcode(updated.getLeetcode());
        profile.setMedium(updated.getMedium());
        profile.setResumeUrl(updated.getResumeUrl());
        profile.setStatusBadge(updated.getStatusBadge());
        return ResponseEntity.ok(profileRepository.save(profile));
    }

    @GetMapping("/stats")
    public ResponseEntity<List<Stat>> getStats() {
        return ResponseEntity.ok(statRepository.findAllByOrderByDisplayOrderAsc());
    }

    @PostMapping("/stats")
    public ResponseEntity<Stat> addStat(@RequestBody Stat stat) {
        return ResponseEntity.ok(statRepository.save(stat));
    }

    @GetMapping("/experiences")
    public ResponseEntity<List<Experience>> getExperiences() {
        return ResponseEntity.ok(experienceRepository.findAllByOrderByDisplayOrderAsc());
    }

    @PostMapping("/experiences")
    public ResponseEntity<Experience> addExperience(@RequestBody Experience exp) {
        return ResponseEntity.ok(experienceRepository.save(exp));
    }

    @GetMapping("/education")
    public ResponseEntity<List<Education>> getEducation() {
        return ResponseEntity.ok(educationRepository.findAllByOrderByDisplayOrderAsc());
    }

    @GetMapping("/case-studies")
    public ResponseEntity<List<CaseStudy>> getCaseStudies() {
        return ResponseEntity.ok(caseStudyRepository.findAllByOrderByDisplayOrderAsc());
    }

    @PostMapping("/case-studies")
    public ResponseEntity<CaseStudy> addCaseStudy(@RequestBody CaseStudy cs) {
        return ResponseEntity.ok(caseStudyRepository.save(cs));
    }

    @GetMapping("/articles")
    public ResponseEntity<List<Article>> getArticles() {
        return ResponseEntity.ok(articleRepository.findAllByOrderByDisplayOrderAsc());
    }

    @PostMapping("/articles")
    public ResponseEntity<Article> addArticle(@RequestBody Article article) {
        return ResponseEntity.ok(articleRepository.save(article));
    }
}
