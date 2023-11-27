

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from react"
);
console.log(heading); // **** heading here is the javascript object
// to create root we use reactdom

                        // nested structure in react

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "hi i'm h1 tag"),
    React.createElement("h2", {}, "hi i'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hi i'm h1 tag"),
    React.createElement("h2", {}, "hi i'm h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// to render root we use render()
root.render(parent); // .render() converts js object to the html tag
