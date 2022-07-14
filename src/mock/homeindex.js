import Mock from 'mockjs'
import dayjs from "dayjs"

let arr=[
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    },
    {
      date: "2016-05-04",
      name: "张小虎",
      address: "上海市普陀区金沙江路 1517 弄",
    },
    {
      date: "2016-05-01",
      name: "李小虎",
      address: "上海市普陀区金沙江路 1519 弄",
    },
    {
      date: "2016-05-03",
      name: "赵小虎",
      address: "上海市普陀区金沙江路 1516 弄",
    },
  ]
  //查
Mock.mock("/api/all","get",(options)=>{
    // console.log(10,options);
    return {
        status:200,
        message:"success",
        data:arr
    }
})
  //增
Mock.mock("/api/add","post",(options)=>{
    console.log(36,options);
    let body=JSON.parse(options.body)
    body.date=dayjs(new Date(body.date)).format("YYYY-MM-DD")
    console.log(body);
    arr.push(body)
    return {
        status:200,
        message:"success",
        data:arr
    }
})


//删
Mock.mock(/\/api\/delete\?index=\d/,"delete",(options)=>{
    // console.log(10,options);
    let url=options.url
    let index=url.split('=')[1]
    console.log(index);
    let newArr=arr.splice(index,1)
    console.log(newArr);
    return {
        status:200,
        message:"删除成功",
        data:arr
    }
})

//改
Mock.mock("/api/update","put",(options)=>{
    console.log(10,options);
    let body=JSON.parse(options.body)
    console.log(body);
    let {date,name,address,index}=body

    arr[index].date=date
    arr[index].name=name
    arr[index].address=address
    
    return {
        status:200,
        message:"success",
        data:arr
    }
})


