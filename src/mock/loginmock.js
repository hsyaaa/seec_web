let Mock=require("mockjs")
Mock.mock("/api/login","post",(config)=>{
    let body=JSON.parse(config.body)

    console.log(body);
    if(body.username==="admin"&&body.password==="123456"){
        return {
            status:200,
            message:"success",
            data:{
                username:body.username,
                password:body.password,
                token:"asdsadasd"
            }
        }
    }else{
        return {
            status:501,
            message:"fail"
        }
    }
})