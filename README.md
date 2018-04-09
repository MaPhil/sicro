# simple-cron

### usage on the console

simple-cron -option 

general options: 

	-v --version
	-h --help
	-l --list


functions:

	add job    
	[-a --add] [-k --key] <key> [-j --job] <job>
    
	remove job
	[-r --remove] [-k --key] <key> 
  
### usage in a programm

```javascript
var sc require('simple-cron');
sc.add('key','* * * * * echo "I am a test command" >> ~/Desktop/tmp3.txt').then(function(){
  //callback
});
sc.remove('key').then(function(){
  //callback
});
sc.list().then(function(){
  //callback
});
```
