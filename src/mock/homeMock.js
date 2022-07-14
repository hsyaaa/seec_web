import Mock from 'mockjs'
let arr=["张三","李四","王五","赵六"]
Mock.mock(/\/api\/asd/,"get",(options)=>{
    // console.log(options);
})