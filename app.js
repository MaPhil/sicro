#! /usr/bin/env node

'use strict';
var sc = require('./index.js');
var pjson = require('./package.json');
var argv = require('minimist')(process.argv.slice(2));
var help = `simple-cron -option \n
general options: 
\t-v --version
\t-h --help
\t-l --list
\n
functions:
\tadd job
\t[-a --add] [-k --key] <key> [-j --job] <job>
\tremove job
\t[-r --remove] [-k --key] <key> 
`;

if(argv.v || argv.version) console.log(pjson.version);
if(argv.h|| argv.help) console.log(help);
var add = (argv.a | argv.add);
var remove = (argv.r | argv.remove);
var list = (argv.l | argv.list);
var key = (argv.k | argv.key);
var job = (argv.j | argv.job);

if(add && key && job){
  sc.add(key,job).then(function(s){
    console.log('added '+key);
  });
}
if(remove && key){
  sc.remove(key).then(function(s){
    console.log('removed '+key);
  });
}
if(list){
  sc.status();
}