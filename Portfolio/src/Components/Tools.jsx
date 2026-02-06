import React from 'react';

const tools = [
  {
    name: 'VSCODE',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  },
  {
    name: 'ECLIPSE',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg',
  },
  {
    name: 'JUPYTER',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg',
  },
 
];

const Tools = () => {
  return (
    <div className="skill-container d-flex">
      {tools.map((tool) => (
        <div className="skilll" key={tool.name}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img className="l-icon" src={tool.icon} alt={tool.name} />
            <p className="l-name">{tool.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tools;
