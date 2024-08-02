import React from 'react';
import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import TaskList from "../../components/TaskList/TaskList";

const SchedulePage = () => {
    return (
        <div>
            <div className="SchedulePage">
                <div className='schedule__section'>
                    <Header title="Schedule"/>
                    <div className='schedule__block'>
                        <Calendar />
                        <TaskList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchedulePage;
