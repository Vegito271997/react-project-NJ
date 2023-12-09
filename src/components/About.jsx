import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h2>This is about section</h2>
        {/* <User
          name={"Prateek Shukla(Fun)"}
          location={"Noida"}
          contact={"Vegito2797"}
        /> */}
        <UserClass
          name={"Prateek Shukla"}
          location={"Noida"}
          contact={"Vegito2797"}
        />
      </div>
    );
  }
}
export default About;
