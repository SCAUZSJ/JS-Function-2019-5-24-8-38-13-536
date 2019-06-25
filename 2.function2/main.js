//## 要求 
    
//- 新建main.js文件，编写一个函数，实现以下功能：判断一个字符串是否是回文串。（回文，一个字符串从前面读和从后面读都一样，例如：abcba就是回文串。）

//上一小题的方法
function reverseString(message){
    return message.split('').reverse().join('');
}

function palindrome(message){
  let reverse = reverseString(message);
  return message === reverseString(message);
}

console.log(palindrome('hello'));
console.log(palindrome('abcba'));
