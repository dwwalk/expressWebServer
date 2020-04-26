This file is just for notes during the build process.


module 4y dynamic pages with Templates

npm modules
handlebars


npm install handlebars

restarting nodemon to restart when hbs and js files are updated
nodemon ../src/app.js -e js,hbs

This is the __dirname D:\dww\career\aws\nodejs\expressWebSerever\src
This is the __filename D:\dww\career\aws\nodejs\expressWebSerever\src\app.js



// see the readme file for problems with this command.
hbs.registerPartials(publicPartialPath)
At the time of this writing 4/14/2020 the above command caught me chasing my tail for an hour.  The reason,

I forgot the "s" in hbs.registerPartials.  

The  hbs.registerPartials does have an auto complete and there is 
a  hbs.registerPartial but the instructions in the video are clear.
This wasted time could have been avoided.  All the time I took writing
this and reviewing the mistake will be wasted as well if I don't 
pay more attention.

lecture 56 talks about paramenter default values.
lecture 57

