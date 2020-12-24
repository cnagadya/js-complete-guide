const arr = [3, 4, 1, 19, 12, 14, 17];

const onTask1 = () =>
  alert(
    `Initial array: ${arr} \n
    Filtered array:  ${arr.filter((value) => value > 5)} \n
    Map into array of objects: ${JSON.stringify(
      arr.map((value) => ({ num: value }))
    )} \n
    Multiplication result: ${arr.reduce((acc, curr) => acc * curr, 1)}`
  );

const onTask2 = () => {
  const findMax = (...inputs) => {
    inputs.sort((a, b) => b - a);
    return inputs[0];
  };
  alert(`Max value is ${findMax(...arr)}`);
};

const onTask3 = () => {
  const findMinMax = (...inputs) => {
    inputs.sort((a, b) => b - a);
    return [inputs[inputs.length - 1], inputs[0]];
  };

  const [min, max] = findMinMax(...arr);
  alert(`
        Min value is ${min}
        Max value is ${max}`);
};

const onTask4 = () => {
  const result = new Set();
  const times = prompt('How many values do you want to provide? ');

  if (!parseInt(times)) {
    alert('Please enter a number');
    return;
  }
  for (let i = 1; i <= times; i++) {
    const value = prompt(`Enter value ${i}: `);
    console.log(result.add(value));
  }
  alert(`Your inputs without duplicates: ${[...result]}`);
};

document.getElementById('task-1').addEventListener('click', onTask1);
document.getElementById('task-2').addEventListener('click', onTask2);
document.getElementById('task-3').addEventListener('click', onTask3);
document.getElementById('task-4').addEventListener('click', onTask4);
