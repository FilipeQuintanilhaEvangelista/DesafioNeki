package com.neki.testefilipe.dto;

import com.neki.testefilipe.model.SkillLevelEnum;
import lombok.Data;

@Data
public class UserSkillRequestDTO {
    private Long userId;
    private Long skillId;
    private SkillLevelEnum level;
}
