# react project 🥅

#                             day-2 


# Parcel use
- development build,
- creates local server(hosts code in ls)
- HMR (hot module replacement) - changes code in browser immediately
- file watching algo(in c++)
- Caching code - For faster build
- Image optimization
- Bundling
- Compress file
- Consistant Hashing
- Code splitting
- Defferntial bundling - use -> supports older browser
- Diagnostics
- Error Handling
- Tree Shaking - remove unused code in production
- different dev and prod bundle

# package.json (always push to git)

- stores config for npm
- npm manages the version and many more thing for us and it manages it inside package.json
- Basically package.json holds the dependency of the project
- tilde(-) - it indicates our package can receive all the future patches of the minor version
  for example if my package version is 2.3.30 & i can receive update till 2.3. where X > 30
  & my package version is less than 2.4.0
- caret (^) - it indicates our package can receive all the future minor/patches version
  examples - 2.3.1 & then we can receive updates till 2x.y where x≥= 3 & y>1 & package version is less than 3.0.0

# package-lock.json (always push to git)

- keeps a track of exact version that is installed in the project

# bundler 
- most important package in a project
- bundles/minifies/compresses all html, css, js file together before sending to production
- e.g. webpack, parcel
- ** create-react-app uses bundle behind the scene

# node_module (never push to git)

- contains all the code that we fetch from npm
- should never be pushed in git as it can be recreated using the dependencies in package.json

# npm vs npx
- npm - installing a package
- npx - executing a package

# parcel-cache (never push to git)
- The .parcel-cache folder is used by Parcel as a temporary cache directory when building your app for development and production.
OR
- The .cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

# dist
- when we use npx parcel index.html, it generates a development build of your project and hosts it to the local server, so when it generates a development build it stores it inside the dist folder.
- when you will build a production build it will build inside the dist folder.

# browserslist (in package,json)
- used for older browser version to support the website


#                          day-3

# script (package.json)
- For start ->
       instead of using npx run parcel index.html for dev start we can add a key value for it like "start": "parcel index.html" and then use npm start to start the project
- For build ->
       add "build": "parcel build index.html" and use cmd npm run build for production build.

 # JSX
 - is a javascript syntax which is easier to write javascript elements
 - jsx is very different from react.
 - jsx just keeps it easy for developer to write react code.
 - jsx is kind of conventions which merge javascript and html.
 - jsx not HTML inside js rather jsx has html like syntax.
 - parcel transpile(converts) the jsx code in our file before the code goes to the js engine and then js engine receive the code that browser can understand.
 - JSX element should always be wrapped inside () bracket for babel to understand from where the code starts and where it ends. if the jsx code is bigger than the single line.
 - PTBN - Parcel does not do it by itself rather it gives this task to a package called BABEL.
 - JSX helps to prevent cross-site scripting attack on users computer.


 # Babel

- babel is installed along with Parcel as it's dependency.
- babel's job is to transpiler(convert) the jsx code to a code which is understandable by js engine as soon as we save the file.
- Babel is a js compiler.
- Basically( "=>"  means "converted" ) jsx => react element => object => html element(inside render()) with the help of BABEL.
- Babel also converts ES6 code to older JS code for the older browser.

# React- Component
- Everything inside react is a component.
- There are 2 types of component in react 
- 1. Class component - Old way of writing code. Uses JS classes.
- 2. Functional component - new way. Uses JS functions.
- react functional component is a js function which returns jsx.

# Important Points
- attributes in JSX follows 'camelcase'. e.g. - className, tabIndex etc.
- Component Composition - Composing 2 components inside 1 another. E.g creating a login page we create 3 component 1. login 2. button, 3. text-input. So composing button and text-input component inside login component is component composition.
