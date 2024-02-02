import React, { useEffect, useState } from "react";
import ProjectList from './ProjectList';

const ProjectsSection = () => {
  const URL = "https://api.github.com/users/hkarimm/repos"; // Det här är GitHub API URL som hämtas från GitHub

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <section className= "project-section">
      <h2>Mina projekt</h2>
      <ProjectList projects={data} />
    </section>
  );
};

export default ProjectsSection;
