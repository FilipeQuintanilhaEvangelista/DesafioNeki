import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export const registerUser = (username, password) => {
  return api.post("users/register", {
    username: username,
    password: password,
  });
};

export const postLogin = (username, password) => {
  return api.post("auth/login", {
    username: username,
    password: password,
  });
};

export const getUsers = (config) => {
  return api.get("users", config);
};

export const getSkillsByUserId = (userId, config) => {
  return api.get(`user-skills/user/${userId}`, config);
};

export const deleteUserSkill = (userSkillId, config) => {
  return api.delete(`user-skills/${userSkillId}`, config);
};

export const getSkills = (config) => {
  return api.get("skills", config);
};

export const addUserSkill = (userId, skillId, config) => {
  return api.post(
    "user-skills",
    {
      userId: userId,
      skillId: skillId
    },
    config
  );
};

export const updateUserSkillLevel = (userSkillId, newLevel, config) =>{
  return api.put(`user-skills/${userSkillId}?newLevel=${newLevel}`, null, config)
}
