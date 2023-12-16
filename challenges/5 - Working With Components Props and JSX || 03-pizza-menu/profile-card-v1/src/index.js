import React from 'react';
import ReactDom from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="imgs/jonas.jpeg" alt="Jonas Schmedtmann"></img>
  );
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p style={{ fontWeight: '500' }}>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portugese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      <Skill skillName="HTML+CSS" emoji="💪" backgroundColor="#0652DD" />
      <Skill skillName="JavaScript" emoji="💪" backgroundColor="#FFC312" />
      <Skill skillName="Web Design" emoji="💪" backgroundColor="#C4E538" />
      <Skill skillName="Git and Github" emoji="👍" backgroundColor="#ED4C67" />
      <Skill skillName="React" emoji="💪" backgroundColor="#12CBC4" />
      <Skill skillName="Svelte" emoji="🤫" backgroundColor="#EA2027" />
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.backgroundColor }}>
      <span>{props.skillName}</span>
      <span>{props.emoji}</span>
    </li>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
