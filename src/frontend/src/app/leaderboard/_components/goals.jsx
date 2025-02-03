import GoalList from "./goal-list";
import React from 'react';

function Goals() {
    return (
        <div className="py-12 grid grid-cols-3 gap-3">
            <GoalList className="bg-purple" />
            <GoalList />
            <GoalList />
            <GoalList />
            <GoalList />
            <GoalList />
            <GoalList />
            <GoalList />
            <GoalList />
        </div>
    );
}

export default Goals;