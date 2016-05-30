## Project Setup
### Linting
+ use the class `.eslintrc` and `.eslintignore` files
+ put the files in your project and don't gitignore  
+ The class lint file rules include Single quotes, 2 spaces for tabs  
+ good practice to copy `.eslintrc` and `.eslintignore`  into ~/ - this allows eslint to find them if they're not in the project

#### Testing Lint  
```npm install -g eslint```  
To test in your root as TA's will:  ```eslint *```  
* Sublime  
  sublime-linter, csslint, eslint

* Atom:  
  linter, linter-eslint (packages)

### What about variables not used?

For example in gulpfile

```javascript
  const watch = require('gulp-watch');
  gulp.watch('./**/*.js', ['lint', 'test']);
```

  We never actually make a call with watch so we could just require

```javascript
  require('gulp-watch');
```  

### Setup .gitignore
[See gitignore.io to help setup](https://www.google.com)  
Enter Node, OSX, Vim(if you use it) to git all hidden files from apps you use
Rule of thumb: ignore generated or data files as well as env variables

How to remove node-modules if accidentally commit:    
`echo 'node_modules' >> .gitignore`    
`$ git rm -r --cached node_modules`    
`$ git commit -am 'ignore node_modules'`  

### Setup Assignment:
Create a folder under ~/cf/401 (for example)

Fork assignment and clone in above directory

`npm init`  
`npm install <...> --save-dev`

Package.json should contain the following to all running code and test from npm.

`"scripts": {"start": "node server.js",`  
`"test": "./node_modules/mocha/bin/mocha"},`

### Directory structure:
**root:**   
server.js OR index.js OR app.js  
gulpfile.js  
.eslintrc  
.eslintignore  
.gitignore  
package.json (fill it out but it will come from npm init, set version to 0.1.0, set license to MIT)  
**folders:**  
/db  (this should be gitignored)  
/lib  
/model  
/route  
/test  

### MIT license text  
You can put this in a file named LICENSE.txt and refer to it in your README.md  
 > MIT License

 Copyright (c) 2016 <your name>

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

#### Have a Look at this when you have time:

https://devcenter.heroku.com/articles/node-best-practices

#### Recommend save exact so that changes to modules you used won't bite you  
 `npm install --save --save-dev --save-exact mocha`    `npm install --save --save-exact morgan`  

#### Naming  
Lowercase filename and upper camel var names; for exmaple   
`const MyModule = require('my-module');`


This project is licensed under the terms of the [MIT license](LICENSE.txt).
