import Mock from 'mockjs'
let arr=["张三","李四","王五","赵六"]


Mock.mock("/api/acd","post",(options)=>{
    console.log("acd",options);
    return {
        status:200,
        message:"success",
        data:arr
    }
})