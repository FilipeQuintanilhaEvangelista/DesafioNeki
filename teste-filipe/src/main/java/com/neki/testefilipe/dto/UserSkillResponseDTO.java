package com.neki.testefilipe.dto;

import com.neki.testefilipe.model.SkillLevelEnum;
import lombok.Data;

@Data
public class UserSkillResponseDTO {
    private Long id;
    private Long userId;
    private Long skillId;
    private SkillLevelEnum level;
    private String name;
    private String imageUrl;
    private String description;
}
