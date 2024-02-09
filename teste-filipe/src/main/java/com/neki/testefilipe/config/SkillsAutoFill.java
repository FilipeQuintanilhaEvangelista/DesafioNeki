package com.neki.testefilipe.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import com.neki.testefilipe.model.Skill;
import com.neki.testefilipe.model.SkillData;
import com.neki.testefilipe.repository.SkillRepository;

@Component
public class SkillsAutoFill {

    @Autowired
    private SkillRepository skillRepository;

    @EventListener(ApplicationReadyEvent.class)
    public void populateSkills() {
        for (SkillData skillData : SkillData.values()) {
            Skill skill = new Skill();
            skill.setName(skillData.getName());
            skill.setDescription(skillData.getDescription());
            skill.setImageUrl(skillData.getImageUrl());

            skillRepository.findByName(skill.getName()).orElseGet(() -> skillRepository.save(skill));
        }
    }
}
