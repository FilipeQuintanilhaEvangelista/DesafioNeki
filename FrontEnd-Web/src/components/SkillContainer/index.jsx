/* eslint-disable react/prop-types */
const SkillContainer = ({skill, handleEditLevel, deleteSkill}) => {
  return (
    <div className="skill" key={skill.skillId}>
      <img className="skill-img" src={skill.imageUrl} alt={skill.name} />
      <h2 className="skill-name">{skill.name}</h2>
      <p className="skill-level">Nível: {skill.level}</p>
      <p className="skill-description">{skill.description}</p>
      <div className="skill-buttons">
        <button className="skill-button" onClick={() => handleEditLevel(skill)}>
          Editar Level
        </button>
        <button
          className="skill-button delete"
          onClick={() => deleteSkill(skill.id)}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default SkillContainer;
