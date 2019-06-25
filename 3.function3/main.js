
// ## 要求 
    
// - 新建main.js文件，编写一个函数，实现以下功能：按字母表顺序输出传入的参数字符串。



function alphabetSort(message){
    let array = message.split('');//转换成数组
    //排序
    array.sort(function(a,b){
        if(a<b){
            return -1;
        }
        if(a>b){
           return 1;
        }
        return 0;
    })
    return array.join(''); //拼接，并返回
}
console.log(alphabetSort('hello')); // should return 'ehllo'



