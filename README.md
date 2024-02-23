# SVG To React Icon Converter

The `IconGenerator` takes a path of svg assets and coverts them into working React components that mimics the same folder structure. It also passes `size` and `color` variables into the svg for dynamic size and colors. By default stroke is set to `currentColor` to inherit the font color.

Input 

```
assets/
    raw/
        notification/
            notification-01.svg
            notification-02.svg
            notification-03.svg
        user/
            user-circle.svg
            user-outline.svg
            users.svg
```

Output 

```
assets/
    /raw
        ... Raw assets still exist
    /lib
        notification/
            Notification01Icon.icon.tsx
            Notification02Icon.icon.tsx
            Notification03Icon.icon.tsx
        user/
            UserCircle.icon.tsx
            UserOutline.icon.tsx
            Users.icon.tsx
```

### Limitations 

- Hardcoded variable injection
    - Color only works for stroke icons
    - Size only works for `width="24"` `height="24"` svgs
- Hardcoded icon template


### Example

Add the IconGenerator file to the root of your project. In the root of your project create a generate.js file and add the correct input and output folders.

```
const path = require('path')
const IconGenerator = require('{project-root}/IconGenerator/IconGenerator')

const inputDir = path.join(__dirname, './raw')
const outputDir = path.join(__dirname, '../lib/icons')
const generator = new IconGenerator(inputDir, outputDir)

generator.generate()
```