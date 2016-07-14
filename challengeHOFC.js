console.log('-=-=-=-=Q1-=-=-=-=')
console.log(surprise('surprise')('!'))
console.log('-=-=-=-=Q2-=-=-=-=')
console.log(any([8, 9, 10, 11], greaterThan10))
console.log('-=-=-=-=Q3-=-=-=-=')
console.log(filter([1, 2, 3, 4], onlyOdd))
console.log('-=-=-=-=Q4-=-=-=-=')
console.log(sumTwoNumbers(3)(9))
// any([8,9,10,11], greaterThan10) | to Equal true | hint: greaterThan10 is a callback

function any (arr, callBack) {
  for (var i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      return true
    }
  } return false
}

function greaterThan10 (num) {
  if (num > 10) {
    return true
  } else {
    return false
  }
}
// surprise()() | to Equal 'surprise!' | hint: return a function

function surprise (str) {
  return function (punctuation) {
    return str + punctuation
  }
}

// filter([1,2,3,4], onlyOdd) | to Equal [1,3] | hint: onlyOdd is a callback

function filter (num, callback) {
  var result = []
  for (var i = 0; i < num.length; i++) {
    if (callback(num[i])) {
      result.push(num[i])
    }
  } return result
}

function onlyOdd (num) {
  if (num % 2 !== 0) {
    return true
  } else {
    return false
  }
}

// sumTwoNumbers(3)(9) | to Equal 12 | hint: return a function

function sumTwoNumbers (num1) {
    return function (num2) {
      return num1 + num2
    }
}

// console.log(map(myArray, addOne))
