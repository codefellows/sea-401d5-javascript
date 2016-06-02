
#### Install travis
Create an account on https://travis-ci.org/ and login  


(need ruby 2.0)  
more information https://github.com/travis-ci/travis.rb#installation  
`gem install travis -v 1.8.2 --no-rdoc --no-ri`   

If you ahve permission errors with the above command use sudo:   
`sudo gem install travis`  

`travis version`  
"Shell completion not installed. Would you like to install it now? |y| y"  

should be 1.8.2


#### create a travis config 'travis.yml'
create .travis.yml (not ignored)  
The "addons" sections is needed for mongo. There is an addon for bcrypt. See the 'travis.yml.bak' file for this addon.  

```
language: node_js
node_js:
  - 4
services:
  - mongodb
addons:
  apt:
    sources:
    - mongodb-3.2.4-precise
    packages:
    - mongodb-org-server
sudo: required
before_script: npm install
script:
  - npm run test
  - npm run lint
```
`travis lint`   checks that your travis file is OK  
"Hooray, .travis.yml looks valid :)"  

known issue with travis lint when you have addons:  
https://github.com/travis-ci/travis-ci/issues/3694

#### Login
`travis login`  use github login  


#### Enable travis for this repo
`travis enable`  
"detected repository is xxxx, is this correct yes|no
triggering sync"  


`travis open`   
like heroku open - if you're logged in to the browser you'll get to this repo

You can add status image to your README.md - will tell if you're passing tests on most recent push
click on "unknown" next to "build" and choose markdown 9:22
copy to your README.md

`git push`  pushing to git should activate a build on travis  
`travis open`  go watch the build  - click on branches to see the build in process  

Duncan made a video on using travis: https://www.youtube.com/watch?v=n9fgZad0TIo&feature=youtu.be
