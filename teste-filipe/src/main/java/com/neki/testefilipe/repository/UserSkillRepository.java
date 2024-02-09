package com.neki.testefilipe.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.neki.testefilipe.model.UserSkill;
import java.util.List;

public interface UserSkillRepository extends JpaRepository<UserSkill, Long> {
    List<UserSkill> findUserSkillsByUserId(Long userId);
}
