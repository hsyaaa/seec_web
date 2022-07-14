//统一管理开发接口
import axios from 'axios'
let instance = axios.create({
	baseURL:"/api",//基准地址
	timeout:5000//最大响应时间
})
//请求响应拦截
instance.interceptors.request.use((config)=>{
	//请求拦截
	console.log(config);
	return config
})
//响应拦截
instance.interceptors.response.use(response=>{
	console.log(response);
	//后台发回的响应数据
	return response
})
export default instance