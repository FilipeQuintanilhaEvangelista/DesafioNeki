/* eslint-disable react/prop-types */

const AddSkillModal = ({selectedSkill, setSelectedSkill, allSkills, handleSaveSkill, setIsModalOpen}) => {
  return (
    <div className="modal">
              <div className="modal-content">
                <h2 className="addSkill-title">Adicionar Skill</h2>
                <select
                  value={selectedSkill}
                  onChange={(e) => setSelectedSkill(e.target.value)}
                >
                  <option value="">Selecione uma skill</option>
                  {allSkills.map((skill) => (
                    <option key={skill.id} value={skill.id}>
                      {skill.name}
                    </option>
                  ))}
                </select>
                <div className="botoes">
                  <button className="modal-button" onClick={handleSaveSkill}>
                    Salvar
                  </button>
                  <button
                    className="modal-button close"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
  )
}

export default AddSkillModal
