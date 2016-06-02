## Project Setup
### Linting
+ use the class `.eslintrc` and `.eslintignore` files
+ put the files in your project and don't gitignore  
+ The class lint file rules include Single quotes, 2 spaces for tabs  
+ good practice to copy `.eslintrc` and `.eslintignore`  into ~/ - this allows eslint to find them if they're not in the project

#### Testing Lint  
TA's and graders will be testing lint in your homework from now on. If you don't pass lint, you'll receive points and be asked to fix lint errors and resubmit.  

You can run the lint test yourself by first installing npm's eslint package.

```npm install -g eslint```   

Then call ```eslint *``` in the root of your project. If there are lint errors correct and retest.  

 You can find packages for Sublime and Atom to help with fixing lint errors while coding.  

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

  We never actually make a call with 'watch' as we are using 'gulp.watch'.  You may not be using 'gulp-watch' if you're using the watch built into gulp, so you can just remove the require.  It will cause a lint error if you are declare a reference variable and don't use it.


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


This project is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).

#### Mongo running in background can prevent starting an new instance

Sometimes when you close computer or close window, mongod can be running in background. You need to find the OSX process and kill it.

###### To Find the Process from CLI

`ps aux|grep mongo`  
The `ps aux` command finds all processes and the pipe to `grep mongo` shows just the mongo processes which might look like the output below.  The first process is the mongod that we want to stop and the second is just our command to search for these processes.    
`becky          14191   1.3  0.1  2570380   4916   ??  S    Sun07PM  12:01.62 mongod`  
`becky          20343   0.0  0.0  2423376    212 s000  R+    9:58AM   0:00.00 grep mongo`  

###### To Kill it
To actually terminate the process, find the id (the number after the  owner, in this case 14191) of the process and call  
`kill -9 14191`

[![Build Status](https://travis-ci.org/rebeccapeltz/node-project.svg?branch=master)](https://travis-ci.org/rebeccapeltz/node-project)
