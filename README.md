# Feature Workspace

## Purpose

The purpose of this set of Angular workspaces is to give developers a playground and example to use in developing
their own component libraries.  It is important that the examples do not confuse the issue (or new developer) 
by introducing any 3rd party tools.  It only uses Angular.  An accompanying Angular workspace contains 
another Micro Front-End to consume the library created here and hosted on a private local npm repository.

This is the workspace that will house an example micro front-end web site for a generic feature and 
any feature specific custom components that need to be shared to other projects.  Optionally, another 
web site within the workspace can be added to demonstrate the usage of our shared custom components.  

NOTE: While Github Repositories can be made private, Github Pages are going to be public, so consider
this before placing any demonstration web site on Github Pages - you may expose sensitive information.


## Terminology

**Feature** - A specific domain of functionality.  This could be a Blog, a shopping cart, or an image 
catalog, to name a few possibilities

**Micro Front-End** - A web site dedicated to executing a specific feature and only that, passing control
to another Micro Front-End in order to perform a different domain of functionality.

**Custom Components** - Angular Components, Services, Pipes, Directives, or other useful tools that are
created for use by angular applications.  Usually developed as part of a web site, as a lazy loaded 
module, or an exportable library.

**Schematics** - A code generation and automation tooling system used to simplify and standardize common
tasks in project creation and development.  If you have used `ng generate component` you have used schematics.

**NPM Package** - A specific format of library that can be imported from a central repository of components
and used inside of another project.  Node Package Manager (npm) is based on NodeJS.


## Feature Micro Front-End

**Project Name**: feature-micro-front-end

**Purpose**: Simple front-end that demonstrates usage of components from shared component library built in this 
same workspace.

**Prefixes**: fmfe - Feature Micro Front-End

**Add Schematics tooling**

`npm install -g @angular-devkit/schematics`

`npm install -g @angular-devkit/schematics-cli`

`npm install -g @schematics/angular`


**Run web front-end**: `npm install` and then `ng serve --port 4201` will run the application on port 4201, showing the implemented components work.


## Feature Shared Components

**Project Name**: feature-shared-components

**Purpose**: Library project that demonstrates efficient packaging of custom components that can be used in the
applications within the same workspace, or exported to an NPM Package for use in other applications.

**Prefixes**: fsc - Feature Shared Components

**Notes**: the **pack/** directory was added to the project as a destination for built packages and the folder was added to the .gitignore file (similar to the **dist/** folder).  The acompanying **pack/history/** subfolder keeps the previous package.

**Build and Publish library (no schematics)**: 

`npm run build:lib && ` *build the library*

`npm run pack:lib && ` *pack the library into a .tgz file*

`npm run create:pack:dir && ` *if it does not exist, create a pack directory*

`npm run move:pack && ` *move the .tgz file into the pack directory*

`npm run publish:lib` *publish the library to an npm repository*

**Build and Publish library (with schematics)**: 

`npm run build:lib && ` *build the library*

`npm run build:schemas && ` *build the schemas*

`npm run copy:schemas && ` *copy the schema files to the library (in preparation for packaging)*

`npm run copy:files && ` *copy additional files to the library (in preparation for packaging)*

`npm run copy:collection && ` *copy the collection to the library (in preparation for packaging)*

`npm run pack:lib && ` *pack the library into a .tgz file*

`npm run create:pack:dir && ` *if it does not exist, create a pack directory*

`npm run move:pack && ` *move the .tgz file into the pack directory*

`npm run publish:lib` *publish the library to an npm repository*


NOTE: The following scripts are just helpers, not required.

`watch:lib` *will rebuild the library on saving changes*

`schemas:postbuild` *will do the three copy commands for schemas*

`build:nopub` *will do all of the steps except for publish to an npm repository*


## Private NPM Repository - Verdaccio

**Setup locally**

NOTE: Requires NodeJS 10.0+

`npm install --global verdaccio` *install verdaccio globally on local file system %APPDATA%/Roaming/verdaccio/*

`verdaccio` *start server in terminal - default port 4873*

`npm adduser --registry http://localhost:4873` *supply user, password, email address for local server user*
 
Navigate to `http://localhost:4873` to see installed packages

**Use locally**

`npm install --registry http://localhost:4873 --save my-component-library` *install my-component-library from local repository*

`npm publish --registry http://localhost:4873 ./my-component-library-1.0.0.tgz` *publish my-component-library to local registry*

NOTE: If you forget to use the --registry parameter, you will be hitting the official npm repository, in which the
component library will not have been published and therefore, not available.

NOTE: The publish workflow for the libraries will need to be reworked to include semantic versioning to increment version numbers of the package prior to publishing.

### Optionally

You may also set your local repository to the default by either setting up an .npmrc file pointing at the registry or
by setting npm configuration globally.  Doing so, you no longer need to set --registry parameter on all npm calls.

`npm set registry http://localhost:4873/` *Setup npm globally to use Verdaccio local repository*

`npm set registry https://registry.npmjs.org` *Return npm globally to use only official repository*



## Additional Links

Resources that may assist you...

- [Verdaccio (official)](https://verdaccio.org) | [github](https://github.com/verdaccio/verdaccio) | [npm](https://npmjs.com/package/verdaccio)
- [Verdaccio - SitePoint walkthrough](https://sitepoint.com/private-npm-packages-verdaccio)


Additional sources for inspiration... (include attribution, as applicable)
- [@angular/cli - schematics](https://github.com/angular/angular-cli/tree/master/packages/schematics)
- [@angular/cli - devkit/schematics](https://github.com/angular/angular-cli/tree/master/packages/angular_devkit/schematics)
- [@angular/components (Material Design) - schematics](https://github.com/angular/components/tree/master/src/cdk/schematics)

