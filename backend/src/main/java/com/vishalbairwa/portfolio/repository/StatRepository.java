package com.vishalbairwa.portfolio.repository;

import com.vishalbairwa.portfolio.model.Stat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatRepository extends JpaRepository<Stat, Long> {
    List<Stat> findAllByOrderByDisplayOrderAsc();
}
