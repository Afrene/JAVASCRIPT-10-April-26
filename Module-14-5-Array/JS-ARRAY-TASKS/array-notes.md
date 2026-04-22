# 📘 JavaScript Array Notes

---

## 🔹 What is an Array?
An array allows you to store multiple values in a single variable.

---

## 🔹 Declare Array

```js
const numbers = [12, 34, 55, 56];
const names = ['Abul', 'Kabul', 'Babul'];
const isPassed = [true, false, false, true];
const mixedArray = [21, 'Agrabad', true, 34.345];
```

---

## 🔹 Length (Array Size)

```js
const fruits = ['Mango', 'Apple', 'Orange'];
console.log(fruits.length);
```

👉 Output:
```
3
```

---

## 🔹 Change Array Value

```js
const fruits = ['Mango', 'Apple', 'Orange'];

fruits[0] = 'Lichi';

console.log(fruits);
```

👉 Output:
```
['Lichi', 'Apple', 'Orange']
```

---

## 🔹 Index

- Index starts from **0**

```js
const numbers = [12, 34, 54, 12, 44, 34];

// index 0 → 12
// index 1 → 34
// index 2 → 54
// index 3 → 12
// index 4 → 44
// index 5 → 34
```

---

## 🔹 Access Array Elements

```js
const numbers = [33, 44, 21, 45, 65];

console.log(numbers);      // full array
console.log(numbers[0]);   // first element

const fourth = numbers[3];
console.log(fourth);
```

👉 Output:
```
[33, 44, 21, 45, 65]
33
45
```

---

## 🔹 Update Value by Index

```js
const numbers = [33, 44, 21, 45, 65];

numbers[1] = 899;

console.log(numbers);
```

👉 Output:
```
[33, 899, 21, 45, 65]
```

---

## 🔹 push() → Add to End

```js
const numbers = [34, 4, 23, 45, 22];

numbers.push(90);

console.log(numbers);
```

👉 Output:
```
[34, 4, 23, 45, 22, 90]
```

---

## 🔹 pop() → Remove Last Element

```js
const friends = ['balam', 'kalam', 'salam'];

friends.pop();

console.log(friends);
```

👉 Output:
```
['balam', 'kalam']
```

---

## 🔹 shift() → Remove First Element

```js
const friends = ['balam', 'kalam', 'salam'];

friends.shift();

console.log(friends);
```

👉 Output:
```
['kalam', 'salam']
```

---

## 🔹 unshift() → Add to Start

```js
const friends = ['balam', 'kalam', 'salam'];

friends.unshift('hello');

console.log(friends);
```

👉 Output:
```
['hello', 'balam', 'kalam', 'salam']
```

---

## 🔹 includes() → Check Value (case-sensitive)

```js
const friends = ['balam', 'kalam', 'salam'];

console.log(friends.includes('balam'));
```

👉 Output:
```
true
```

---

## 🔹 indexOf() → Find Index

```js
const weather = ['rainy', 'sunny'];

console.log(weather.indexOf('sunny')); // 1
console.log(weather.indexOf('funny')); // -1
```

---

## 🔹 Array.isArray()

```js
const weather = ['rainy', 'sunny'];
const num = [];
const food = 'rosogolla';

console.log(Array.isArray(weather)); // true
console.log(Array.isArray(num));     // true
console.log(Array.isArray(food));    // false
```

---

## 🔹 slice() → Get Part of Array

```js
const fruits = ['apple', 'orange', 'mango', 'lichi'];

console.log(fruits.slice(2, 4));
```

👉 Output:
```
['mango', 'lichi']
```

---

## 🔹 concat() → Merge Arrays

```js
const a = [1, 2];
const b = [3, 4];

const result = a.concat(b);

console.log(result);
```

👉 Output:
```
[1, 2, 3, 4]
```

---

## 🔹 join() → Convert to String

```js
const fruits = ['apple', 'banana', 'mango'];

console.log(fruits.join(', '));
```

👉 Output:
```
apple, banana, mango
```

---

## 🔹 splice() → Add/Remove Elements

```js
const numbers = [1, 2, 3, 4];

// remove 2 elements from index 1
numbers.splice(1, 2);

console.log(numbers);
```

👉 Output:
```
[1, 4]
```

---

## 💡 Key Notes

- Array index starts from **0**
- `push()` → add end
- `pop()` → remove end
- `shift()` → remove start
- `unshift()` → add start
- `slice()` does NOT change original array
- `splice()` changes original array