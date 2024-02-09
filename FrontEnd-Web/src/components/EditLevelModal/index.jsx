/* eslint-disable react/prop-types */

const EditLevelModal = ({
  selectedLevel,
  setSelectedLevel,
  handleSaveEditedLevel,
  setIsEditModalOpen,
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="addSkill-title">Editar Level</h2>
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="">Selecione o nível</option>
          <option value="BASICO">Básico</option>
          <option value="INTERMEDIARIO">Intermediário</option>
          <option value="AVANCADO">Avançado</option>
        </select>
        <div className="botoes">
          <button className="modal-button" onClick={handleSaveEditedLevel}>
            Salvar
          </button>
          <button
            className="modal-button close"
            onClick={() => setIsEditModalOpen(false)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditLevelModal;
