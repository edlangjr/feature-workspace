# Feature Shared Components

Library project that demonstrates efficient packaging of custom components that can be used in the applications within the same workspace, or exported to an NPM Package for use in other applications.

NOTE: Components are packaged into their own modules with secondary entry points to assist in tree-shaking.

NOTE: Components cannot be added to an npm repository twice with the same version information.  You need to increment the version by `npm version` command or for local development only, delete the package from the npm repository file system 
located at %APPDATA%/Roaming/verdaccio/storage/feature-shared-components/ before running the publish command.

## Available Components 

`fsc-button` - Feature Shared Component - Button (barebone component e.g. 'component works!' message only)

`fsc-textbox` - Feature Shared Component - Textbox (barebone component e.g. 'component works!' message only)

## Available Schematics

`ng add feature-shared-components --registry http://localhost:4873`:
Adds the feature-shared-components package stored in the local npm repository to a project, adds a file to the workspace folder, and defines some dummy scripts and sets up the `husky` npm package in the workspacce package.json file.

`ng generate feature-shared-components:feature-starter-service --name doStuff --path services`:
Generates a feature-starter-service service as from the feature-shared-component collection with the specified name and path based on a predetermined template. (e.g. src/app/services/do-stuff.service.ts)


