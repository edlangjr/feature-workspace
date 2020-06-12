import { Rule, SchematicContext, Tree, forEach, FileEntry, apply, url, chain, mergeWith } from '@angular-devkit/schematics';
//         move, Source, template, branchAndMerge, MergeStrategy
// import { strings } from '@angular-devkit/core';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

// Just return the tree
export function ngAdd(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {

    const rule: Rule = chain([
      mergeAdditionalFiles(),
      updatePackageJson()
    ]);

    // npm install the library
    context.addTask(new NodePackageInstallTask());

    // apply chained rules
    return rule(tree, context) as Rule;
  };
}

function mergeAdditionalFiles(): Rule {
  return (tree: Tree, context: SchematicContext): Tree => {
    context.logger.info(`Adding and overwriting files.`);
    mergeWith(apply(url('./files'), [
      forEach((fileEntry: FileEntry) => {
        if (tree.exists(fileEntry.path)) {
          tree.overwrite(fileEntry.path, fileEntry.content);
          return null;
        }
        return fileEntry;
      })
    ]));

    return tree;
  };
}

function updatePackageJson(): Rule {
  return (tree: Tree, context: SchematicContext): Tree => {
    context.logger.info('Updating package.json');
    const path = `package.json`;
    const file = tree.read(path);
    const json = JSON.parse(file!.toString());

    json.scripts = {
      ...json.scripts,
      'build:sample': 'ng build',
      'test:sample': 'ng test --code-coverage',
      'lint:sample': 'ng lint --fix',
    };

    json.husky = {
      hooks: {
        'pre-commit': 'pretty-quick --staged --pattern \"apps/**/**/*.{ts,scss,html}\"',
      }
    };

    json.devDependencies.husky = '^4.2.5';

    tree.overwrite(path, JSON.stringify(json, null, 2));

    return tree;
  };
}
