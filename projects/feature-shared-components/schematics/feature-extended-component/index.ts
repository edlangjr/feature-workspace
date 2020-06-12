import { Rule, SchematicContext, Tree, chain, externalSchematic } from '@angular-devkit/schematics';
import { dasherize } from '@angular-devkit/core/src/utils/strings';
import { getWorkspace } from '@schematics/angular/utility/config';
import { buildDefaultPath } from '@schematics/angular/utility/project';
import { Schema as FeatureExtendedComponentSchema } from './schema';

const commentText = `/**
 * Custom comment - simple injection example
 */
`;

export function featureExtendedComponent(options: FeatureExtendedComponentSchema): Rule {
  return chain([
    // Here you can modify options or do any preprocessing before calling the schematic (optional)
    (tree: Tree, _context: SchematicContext) => {
      return tree;
    },

    // call the external schematic
    externalSchematic('@schematics/angular', 'component', options),

    // apply custom changes in separate rule(s)
    (tree: Tree, _context: SchematicContext) => {
      // for each item in the source directory...

      const workspace = getWorkspace(tree);
      if (!options.project) {
          options.project = Object.keys(workspace.projects)[0];
      }
      const project = workspace.projects[options.project];

      if (options.path === undefined) {
          options.path = buildDefaultPath(project);
      }

      tree.getDir(`${options.path}/${dasherize(options.name)}`)
        .visit(filePath => {
          // filter out anything that is not our component .ts file
          if (!filePath.endsWith(dasherize(options.name) + '.component.ts')) {
            return;
          }
          // read the file content... if the file is empty, do not update it
          const content = tree.read(filePath);
          if (!content) {
            return;
          }

          // Prevent from writing comment to files that already have it.
          if (content.indexOf(commentText) === -1) {
            // ...otherwise, prepend the comment to the file and overwrite the file object in the tree
            tree.overwrite(filePath, commentText + content);
          }
        });
      return tree;
    },
  ]);
}
