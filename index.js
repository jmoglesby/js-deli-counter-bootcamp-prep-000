function takeANumber(line, newPerson) {
  line.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`;
}

function nowServing (line) {
  var nextServed;
  if (line.length > 0) {
    nextServed = `Currently serving ${line.shift}.`;
  } else {
    nextServed = "There is nobody waiting to be served!";
  }
  return nextServed;
}

function currentLine(line) {
  var res = "The line is currently";
  if (line.length > 0) {
    var personList;
    for (let i = 0; i < line.length; i++) {
      var person = line[i]
      personList.concat(', ',`${i + 1}. ${person}`);
    }
    res = `${res}: ${personList}`;
  } else {
    res = `${res} empty.`;
  }
  return res;
}