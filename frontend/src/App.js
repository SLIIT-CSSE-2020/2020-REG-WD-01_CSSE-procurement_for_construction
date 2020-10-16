import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskList from "./components/TaskList/taskList";
import TaskDetail from "./components/TaskList/taskDetail";
import TaskForm from "./components/Task/taskForm";
import AuthRoute from "./components/AuthRoute";
import Layout from "./components/Layout";
import "react-notifications/lib/notifications.css";

function App() {
  return (
    <Router>
      <Layout>
        <div>
          <AuthRoute path="/task" component={TaskForm} />
          <AuthRoute path="/taskList" component={TaskList} />
          <AuthRoute path="/task-detail/:id" component={TaskDetail} />
        </div>
        <Route path="/" exact component={TaskForm} />
      </Layout>
    </Router>
  );
}

export default App;
