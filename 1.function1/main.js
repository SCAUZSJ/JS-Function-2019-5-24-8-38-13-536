// ## 要求 
    
// - 新建main.js文件，编写一个函数，实现以下功能：将一个字符串逆序输出。


function reverseString(message){
    return message.split('').reverse().join('');
}
console.log(reverseString('hello')); // should return 'olleh'

