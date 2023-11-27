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