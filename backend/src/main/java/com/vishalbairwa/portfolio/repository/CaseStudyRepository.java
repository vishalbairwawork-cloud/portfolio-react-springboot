package com.vishalbairwa.portfolio.repository;

import com.vishalbairwa.portfolio.model.CaseStudy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CaseStudyRepository extends JpaRepository<CaseStudy, Long> {
    List<CaseStudy> findAllByOrderByDisplayOrderAsc();
}
