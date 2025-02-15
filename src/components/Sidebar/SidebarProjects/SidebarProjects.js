import React from "react";
import { NavLink } from "react-router-dom";
import "./SidebarProjects.scss";

const projects = [
  { id: 1, name: "Dot.shm", color: "#6A5ACD", count: 4 },
  { id: 2, name: "Pipi.ai", color: "#FF6347", count: 3 },
  { id: 3, name: "Taskflow app", color: "#FFA500", count: 2 },
  { id: 4, name: "Fininx App", color: "#00BFFF", count: 4 },
];

const SidebarProjects = () => (
  <div className="sidebar__projects">
    <h3>Pinned Projects</h3>
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <NavLink to={`/projects/${project.id}`} className="active-link">
            <span
              className="circle"
              style={{ borderColor: project.color }}
            ></span>
            {project.name}
            <span className="count">+{project.count}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default SidebarProjects;
