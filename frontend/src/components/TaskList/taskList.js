import React from "react";
import axios from "axios";
import Moment from "react-moment";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { Link } from "react-router-dom";
export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      error: {},
    };
  }

  clickOnDelete(record_id, e) {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/task-delete", {
        userId: record_id,
      })
      .then((response) => {
        NotificationManager.success("Successfully Deleted");
        window.location.reload();
      })
      .catch((error) => {
        NotificationManager.error("Bad Request");
      });
  }
  componentDidMount() {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "token"
    );
    axios
      .get("http://localhost:9000/api/task")
      .then((res) => {
        if (res.data.success) this.setState({ taskList: res.data.tasks });
      })
      .catch((error) => {
        if (error.response.status && error.response.status === 400)
          NotificationManager.error("Bad Request");
        else NotificationManager.error("Something Went Wrong");
        this.setState({ errors: error });
      });
  }
  deteteRow = (index) => {
    this.setState({
      taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
    });
  };

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
                  View Warehouse Details
                </div>
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Location (Warehouse Address)</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.taskList.map((data, idx) => (
                        <tr key={data._id}>
                          <td>
                            <Moment format="YYYY/MM/DD">{data.date}</Moment>
                          </td>
                          <td>{data.descripition}</td>
                          <td>
                            <Link
                              className="btn btn-primary"
                              to={"/task-detail/" + data._id}
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </Link>
                            <button
                              className="btn btn-danger"
                              onClick={this.clickOnDelete.bind(this, data._id)}
                            >
                              <i className="fa fa-minus" aria-hidden="true"></i>
                            </button>
                          </td>
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
