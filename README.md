# Transfinder Web Toolkit for Angular 8

## Check local Environment via
```bash
node -v
```
Recommend as v12.*<br>
Download nodejs from here [click here to download node v12](https://nodejs.org/dist/latest-v12.x/)

## Install
```bash
git clone http://bitbucket.hq.transfinder.com:7990/scm/~jie.xi/tf-toolkit.git
npm install
```

## Build

```bash
npm run build
```

## Clean

```bash
npm run clean:build
```

## Run

```bash
npm start
```

## Import Toolkit to Remote Angular Project
package.json
```bash
  "dependencies": {
    ...
    "tf-toolkit": version number | git address | address
    ...
  }
```

Add peer dependencies
```bash
  "peerDependencies": {
    "@angular/core": ">=8.0.0",
    "@angular/common": ">=8.0.0",
    "@angular/forms": ">=8.0.0"
  }
```

Import Toolkit packaged style
angular.json
```bash
"styles": [
    ...
    "node_modules/tf-toolkit/lib.theme.scss",
    ...
]
```

Import TFLibModule into app.modules
```bash
import { TFLibModule } from 'tf-toolkit';

imports: [
  ...
  TFLibModule.forRoot()
  ...
],
```

If you are using Typescript, update tsconfig.json to avoid using duplicated node_modules
```bash
  "paths": {
    "@angular/*": [
      "node_modules/@angular/*"
    ]
  }
```

Use Toolkit component
example.html
```bash
<div>
  <tf-input></tf-input>
</div>
```
