let promise = Promise.resolve('Hello');

function sayHello(arg) {
  return arg;
}

const arr = [sayHello];

console.log('promise', promise);

promise = promise.then(arr.shift());
// 相当于：promise = promise.then(res => sayHello(res));

console.log('promise', promise);

promise.then((res) => {
  console.log('res', res);
});
