<<<<<<< HEAD
//takeANumber adds customer to line then returns its name and place in line
var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

/* nowServing announces who they're serving then return's names they're
serving then removes them in line */
function nowServing(line) {
 if (line.length > 0) {
    return("Currently serving " + line.shift() + ".");
  } else {
      return ("There is nobody waiting to be served!");
  }
}

/* currentLine reads people in line and then returns a list of numbered
names of all customers in line */
function currentLine(line) {
  if (line.length === 0) {
    return (`The line is currently empty.`);
  } else {

    var array = [];
    for (var i = 0; i < line.length; i++) {
      array.push(` ${ i + 1}. ${line[i]}` );
    }
  return(`The line is currently:` + array);
  }
}
=======
var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {
 if (katzDeli.length > 0) {
   var nowServing = katzDeli[0];
   katzDeli.shift();
    return(`Currently serving ${nowServing}.`);
  } else { 
  return (`There is nobody waiting to be served!`);
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return (`The line is currently empty.`);
  } else {
    
    var array = [];
    for (var i = 0; i < line.length; i++) {
      array.push(` ${i+1}. ${line[i]}` );
    }
  return(`The line is currently:` + array);
  }
}
>>>>>>> 7ae545cc8e3a984458f4fe4e0b7cefe5938884c4
