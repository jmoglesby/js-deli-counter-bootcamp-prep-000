function takeANumber(line, newPerson) {
  line.push(newPerson);
  return `Welcome ${newPerson}. You are number ${line.length} in line.`;
}