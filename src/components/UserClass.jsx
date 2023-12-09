import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "default",
        location: "default",
        login: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Vegito271997");
    const jsonData = await data.json();
    console.log(jsonData.location);
    this.setState({
      userInfo: jsonData,
    });
  }
  render() {
    // const { name, location, contact } = this.props;
    const { name, location, login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-class">
        <img style={{ height: 100, width: 100 }} src={avatar_url}></img>
        <h2>Name: {name ? name : "Prateek Shukla"}</h2>
        <h3>Location: {location ? location : "India"}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
