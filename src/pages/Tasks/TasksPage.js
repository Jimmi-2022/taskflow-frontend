import React from "react";
import "./TasksPage.scss";

const TaskPage = () => {
  const tasks = [
    {
      id: 1,
      title: "Icon design",
      project: "Dot.shm",
      priority: "High priority",
      description: "Please make a design according to the available brief",
      date: "May 1-3",
      comments: 4,
      attachments: 0,
      avatars: ["actor-3.png", "actor-4.png", "actor-5.png"],
    },
  ];

  return (
    // <div className="task-list-page">
    //     <div className="header">
    //         <h1 className="page-title">My task</h1>
    //         <button className="btn-primary">+ Add new</button>
    //     </div>
    //     <div className="tabs">
    //         <button className="tab active">Subtasks</button>
    //         <button className="tab">Me</button>
    //         <button className="tab">Assignees</button>
    //     </div>
    //     <div className="content">
    //         {tasks.map(task => (
    //             <div key={task.id} className="task-card">
    //                 <h3 className="task-title">{task.title}</h3>
    //                 <p className="task-project">{task.project}</p>
    //                 <p className="task-priority">{task.priority}</p>
    //                 <p className="task-description">{task.description}</p>
    //                 <div className="task-footer">
    //                     <span className="task-date">{task.date}</span>
    //                     <div className="task-avatars">
    //                         {task.avatars.map((avatar, idx) => (
    //                             <img key={idx} src={avatar} alt="avatar" className="avatar" />
    //                         ))}
    //                     </div>
    //                 </div>
    //                 <div className="task-icons">
    //                     <span className="task-comments">
    //                         <i className="fas fa-comments"></i>{task.comments}
    //                     </span>
    //                     <span className="task-attachments">
    //                         <i className="fas fa-paperclip"></i>{task.attachments}
    //                     </span>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // </div>
    <div>
      <div className="container">
        <h1>Welcome to Taskflow</h1>
        <p>This is the task page.</p>
      </div>
    </div>
  );
};

export default TaskPage;
