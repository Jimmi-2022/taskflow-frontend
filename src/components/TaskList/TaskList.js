import React from 'react';
import './TaskList.scss';

const tasks = [
    'Shop for groceries',
    'Finalize portfolio',
    'Prepare goals for January',
    'Buy Christmas presents',
];

const TaskList = () => {
    return (
        <div className="task-list">
            <h3>This week</h3>
            <ul className="task-list__items">
                {tasks.map((task, index) => (
                    <li key={index} className="task-list__item">
                        <input type="checkbox" id={`task-${index}`} />
                        <label htmlFor={`task-${index}`}>{task}</label>
                    </li>
                ))}
            </ul>
            <button className="task-list__add-button">+ Add Task</button>
        </div>
    );
};

export default TaskList;
