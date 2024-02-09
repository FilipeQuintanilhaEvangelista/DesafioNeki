import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  addUserSkill,
  deleteUserSkill,
  getSkills,
  getSkillsByUserId,
  updateUserSkillLevel,
} from "../../service/api";
import Header from "./../../components/Header/Header";
import "./home.scss";
import SkillContainer from "../../components/SkillContainer";
import AddSkillModal from "../../components/AddSkillModal";
import EditLevelModal from "../../components/EditLevelModal";

const Home = () => {
  const userLogged = localStorage?.getItem("userLogged");
  const user = JSON?.parse(userLogged);
  const [userSkills, setUserSkills] = useState([]);
  const [allSkills, setAllSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSkillForEdit, setSelectedSkillForEdit] = useState(null);

  const acessToken = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${acessToken}`,
    },
  };

  useEffect(() => {
    pegaSkills();
    getUserSkills();
  }, []);

  const pegaSkills = async () => {
    const response = await getSkills(config);
    setAllSkills(response.data);
  };

  const getUserSkills = async () => {
    try {
      const response = await getSkillsByUserId(user?.id, config);
      setUserSkills(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSkill = async (userSkillId) => {
    try {
      const response = await deleteUserSkill(userSkillId, config);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    getUserSkills();
  };

  const handleSaveSkill = async () => {
    if (selectedSkill) {
      try {

        const response = await addUserSkill(
          user?.id,
          selectedSkill,
          config
        );
        console.log(response.data);
        getUserSkills();

        setSelectedSkill("");
        setIsModalOpen(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEditLevel = (skill) => {
    setSelectedSkillForEdit(skill);
    setIsEditModalOpen(true);
  };

  const handleSaveEditedLevel = async () => {
    if (selectedSkillForEdit && selectedLevel) {
      try {
        const response = await updateUserSkillLevel(
          selectedSkillForEdit.id,
          selectedLevel,
          config
        );
        console.log(response.data);
        setSelectedLevel("");
        setIsEditModalOpen(false);
        getUserSkills();
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!userLogged) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <main className="home">
        <section>
          <h1 className="title">Sistema de gerenciamento de skills</h1>
        </section>

        <section className="addSkills-container">
          <button
            className="addSkills-button"
            onClick={() => setIsModalOpen(true)}
          >
            Adicionar Skill
          </button>

          {isModalOpen && (
            <AddSkillModal
              allSkills={allSkills}
              handleSaveSkill={handleSaveSkill}
              selectedSkill={selectedSkill}
              setIsModalOpen={setIsModalOpen}
              setSelectedSkill={setSelectedSkill}
            />
          )}

          {isEditModalOpen && selectedSkillForEdit && (
            <EditLevelModal
              handleSaveEditedLevel={handleSaveEditedLevel}
              selectedLevel={selectedLevel}
              setIsEditModalOpen={setIsEditModalOpen}
              setSelectedLevel={setSelectedLevel}  
            />
          )}
        </section>

        <section className="skills-container">
          {userSkills.map((skill) => (
            <SkillContainer
              skill={skill}
              handleEditLevel={handleEditLevel}
              deleteSkill={deleteSkill}
              key={skill.id}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
