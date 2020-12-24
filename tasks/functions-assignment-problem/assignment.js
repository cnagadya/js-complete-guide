const sayHello = (greeting = "Hi", name = "Doe") => {
  return greeting + " " + name
}

const checkInput = (cb, ...args) => {
  if (args.length === 0) {
    cb();
  } else {
    let result = ""
    for (let arg of args) {
      if (!arg) {
        cb();
        break;
      } else {
        result += ` ${arg}`
      }
    }
    console.log(result)
  }

}

const cb = () => {
  alert("No args or empty string in args")
}

console.log(sayHello());
console.log(sayHello("Bonjour", "Jane"));
checkInput(cb)
checkInput(cb, "Lorem", "Ipsum")
checkInput(cb, "", "Lorem", "Ipsum")