import React from "react";
import axios from "axios";
import Moment from "react-moment";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
export default class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {},
      taskDetail: [],
      error: {},
    };
  }
  componentDidMount() {
    let urlId = this.props.match.params.id;
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "token"
    );
    axios
      .get("http://localhost:9000/api/task-detail/" + urlId)
      .then((res) => {
        if (res.data.success)
          this.setState({
            taskDetail: res.data.taskDetails,
            task: res.data.tasks,
          });
        console.log(this.state.task.userId.name);
      })
      .catch((error) => {
        if (error.response.status && error.response.status === 400)
          NotificationManager.error("Bad Request");
        else NotificationManager.error("Something Went Wrong");
        this.setState({ errors: error });
      });
  }
  render() {
    return (
      <div className="content">
        <NotificationContainer />
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card">
                <div className="card-header text-center">
                  View Storage Details
                </div>
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Maximum Storage(ft2)</th>
                        <th>Available Storage(ft2)</th>
                        <th>Notes</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.taskDetail.map((data, idx) => (
                        <tr key={data._id}>
                          <td>{data.projectName}</td>
                          <td>{data.task}</td>
                          <td>{data.taskNotes}</td>
                          <td>{data.taskStatus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </form>
      </div>
    );
  }
}
