# Best Practices

## Linting

We use [eslint](https://eslint.org/) to lint our code. The configuration is in the `.eslintrc.js` file. To run the linter, use the following command:

```sh
npm run lint
```

### no-restricted-imports

Things from a feature can only be consumed if they’re exported from the index.ts file of that feature. This will force us to explicitly make something in a feature publicly available.

### import/no-cycle

Feature cannot import from another feature that imports from the first feature. This will prevent circular dependencies.
