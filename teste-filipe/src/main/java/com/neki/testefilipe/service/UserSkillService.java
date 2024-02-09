package com.neki.testefilipe.service;

import com.neki.testefilipe.dto.UserSkillRequestDTO;
import com.neki.testefilipe.dto.UserSkillResponseDTO;
import com.neki.testefilipe.model.Skill;
import com.neki.testefilipe.model.SkillLevelEnum;
import com.neki.testefilipe.model.User;
import com.neki.testefilipe.model.UserSkill;
import com.neki.testefilipe.repository.SkillRepository;
import com.neki.testefilipe.repository.UserRepository;
import com.neki.testefilipe.repository.UserSkillRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserSkillService {

    @Autowired
    private UserSkillRepository userSkillRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SkillRepository skillRepository;

    @Autowired
    private ModelMapper modelMapper;

    public UserSkillResponseDTO associateSkill(UserSkillRequestDTO request) {
        User user = userRepository.findById(request.getUserId())
                        .orElseThrow(() -> new RuntimeException("User not found"));
        Skill skill = skillRepository.findById(request.getSkillId())
                        .orElseThrow(() -> new RuntimeException("Skill not found"));

        UserSkill userSkill = new UserSkill();
        userSkill.setUser(user);
        userSkill.setSkill(skill);
        userSkill.setLevel(request.getLevel());

        userSkill = userSkillRepository.save(userSkill);
        return modelMapper.map(userSkill, UserSkillResponseDTO.class);
    }

    public UserSkillResponseDTO updateSkill(Long userSkillId, SkillLevelEnum newLevel) {
        UserSkill userSkill = userSkillRepository.findById(userSkillId)
                        .orElseThrow(() -> new RuntimeException("UserSkill not found"));
        userSkill.setLevel(newLevel);

        userSkill = userSkillRepository.save(userSkill);
        return modelMapper.map(userSkill, UserSkillResponseDTO.class);
    }

    public void deleteSkill(Long userSkillId) {
        userSkillRepository.deleteById(userSkillId);
    }

    public List<UserSkillResponseDTO> getUserSkills(Long userId) {
        List<UserSkill> userSkills = userSkillRepository.findUserSkillsByUserId(userId);
        return userSkills.stream().map(userSkill -> {
            UserSkillResponseDTO dto = modelMapper.map(userSkill, UserSkillResponseDTO.class);
            dto.setName(userSkill.getSkill().getName());
            dto.setImageUrl(userSkill.getSkill().getImageUrl());
            dto.setDescription(userSkill.getSkill().getDescription());
            return dto;
        }).collect(Collectors.toList());
    }
}
