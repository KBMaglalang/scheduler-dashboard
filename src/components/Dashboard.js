import React, { Component } from "react";
import classnames from "classnames";
import Loading from "./Loading";
import Panel from "./Panel";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6,
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm",
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday",
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3",
  },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.selectPanel = this.selectPanel.bind(this);
  }

  state = {
    loading: false,
    focused: null,
  };

  /* Instance Method */
  selectPanel(id) {
    this.setState({
      focused: this.state.focused === id ? null : id,
    });
  }

  /* Class Property with Arrow Function */
  // selectPanel = (id) => {
  //   this.setState({
  //     focused: id,
  //   });
  // };

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused,
    });

    if (this.state.loading) {
      return <Loading />;
    }

    const panels = (
      this.state.focused
        ? data.filter((panel) => this.state.focused === panel.id)
        : data
    ).map((e) => (
      <Panel
        key={e.id}
        label={e.label}
        value={e.value}
        onSelect={(event) => this.selectPanel(e.id)}
      />
    ));

    return <main className={dashboardClasses}>{panels}</main>;
  }
}

export default Dashboard;
