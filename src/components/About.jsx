import User from "./User";
import UserClass from "./UserClass";

const About = () => {
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
        name={"Prateek Shukla(Class)"}
        location={"Noida"}
        contact={"Vegito2797"}
      />
    </div>
  );
};
export default About;
