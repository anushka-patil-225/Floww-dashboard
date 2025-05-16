import React, { useEffect, useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import TaskList from "./components/TaskList";
import Statistics from "./components/Statistics";

function App() {
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        setTasks(data.tasks);
      });
  }, []);

  const updateTaskStatus = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleLogoClick = () => setActiveTab("profile");

  return (
    <>
      <div className="logo" onClick={handleLogoClick}>
        <img src="/images/flowdash_new_logo.png" alt="FlowDash Logo" />
      </div>
      <div className="dashboard-wrapper">
        <div className="dashboard">
          <div className="tabs">
            <div
              className={activeTab === "profile" ? "tab active" : "tab"}
              onClick={() => setActiveTab("profile")}
            >
              Profile Info
            </div>
            <div
              className={activeTab === "tasks" ? "tab active" : "tab"}
              onClick={() => setActiveTab("tasks")}
            >
              Tasks
            </div>
            <div
              className={activeTab === "stats" ? "tab active" : "tab"}
              onClick={() => setActiveTab("stats")}
            >
              Statistics
            </div>
          </div>

          <div
            className={activeTab === "profile" ? "section active" : "section"}
          >
            <Profile user={user} />
          </div>
          <div className={activeTab === "tasks" ? "section active" : "section"}>
            <TaskList tasks={tasks} onToggle={updateTaskStatus} />
          </div>
          <div className={activeTab === "stats" ? "section active" : "section"}>
            <Statistics tasks={tasks} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
