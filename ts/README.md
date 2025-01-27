# eslint-config-streamr-ts

A shared `eslint` config between Streamr TypeScript projects. See
[`.eslintrc.js`](./.eslintrc.js) for the ruleset.

### Usage

#### Setup
First install the package with
```
npm i -D eslint-config-streamr-ts
```

Then install the peer dependencies. The easiest way to do this is with `npx` (`npm` > 5.2.0):
```
npx install-peerdeps [-d] eslint-config-streamr-ts
```
`-d` is to install them as `devDependencies`


#### Config
In your `.eslintrc.json` (or `.js`) file you must extend `eslint-config-streamr-ts`:
```
{
  extends: 'eslint-config-streamr-ts'
}
```
OR use alias
```
{
  extends: 'streamr-ts'
}
```

### Release

1) `git checkout master`
2) `git pull`
3) Increase the version number in `package.json`
4) `npm install`
5) Commit changes
6) `npm publish`
7) `git push`

### Resources
[Rules for eslint-plugin-promise and their reasoning](https://github.com/xjamundx/eslint-plugin-promise/tree/development/docs/rules)
