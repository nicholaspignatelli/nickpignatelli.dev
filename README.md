## How its Done


#### `components/`
each component will have: 

- a nested `components/` folder
    * this components folder is meant to be semantic only js + html (no styles)

- a `styled/` folder
    * has only the css-in-js styles for the component + styled exports for *semantic html components as well*

*.styled.js files import the semantic & plain components (.jsx) files, add some styles, and export them for usage.

#### `pages/`
each page is a main section of the site. main sections get a button up in the navbar (so About, Experience, Projects, and Contact... and the landing page is an edge case, but kind of included)

#### `data/`
data is intended to mirror the structure of pages, and provide all the content hydration for everything. Gotta separate church and state!

#### `shared/`
this folder is for the components that everything wants to use. well come back to this, because current justifications maybe don't make sense.

#### `App.js`
app.js simply imports the pages components, plus the navbar and other "always there" type components (so sidebar as well)



