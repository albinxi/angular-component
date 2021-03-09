CREATE A LIB COMPONENT WORKFLOW
-------------------------------

### Where to add the new component?
 * `PATH:` src > lib > src > lib (Component folder)
 * `IMPORTANT:` When component needs to declare its related stylesheet, refer to this combined stylesheet `lib.theme.scss`. 
 * Component self stylesheet should define in its self stylesheet but export to the global file for building.

### Define the new component in exporting related files
 * `lib.theme.scss`   this is the global stylesheet file
 * `public-api.ts`    this is the importing interface
 * `lib.module.ts`    this is the global component module
 * `lib.export.ts`    this is for web example related importing interface

### Global stylesheet definition
`Path:` src > shared-styles > partials
  * `_lib.scss` major export, for entire library and build process
  * `_colors.scss` global color and theme
  * `_font.scss` global font and font family
  * `_variables.scss` global variables like size, media screen
  * `_ease.scss` global shortcut class name definition
  * `_core.scss` global tag style definition
  * `_app.scss` web example major

### Implement customized component or updating the component
`SCSS:` To easily update the combined stylesheet, update component stylesheet path to itself:
```bash
EXAMPLE: checkbox component

styleUrls: ['../../lib.theme.scss'] // original

to

styleUrls: ['checkbox.component.theme.scss']

and add below import for loading global variables:
@import 'partials/core';
@import 'partials/lib';

add what you need for the dependencies
```
And revert the path back to `lib.theme.scss` once complete


`Export:` 
All files or declaration in `lib.theme.scss` and `_lib.scss` will be generated into one file named `lib.theme.scss` (output: dist/) by run below script
```bash
npm run build
```
By checking output in terminal, can also figure out if new added component has been added or not

