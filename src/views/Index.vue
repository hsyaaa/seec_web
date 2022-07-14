<template>
  <div>
    <h3>数据的增删改查</h3>
    <el-table style="width: 100%" :data="tableData">
      <el-table-column width="100px" align="center" label="日期" prop="date">
      </el-table-column>
      <el-table-column width="100px" align="center" label="姓名" prop="name">
      </el-table-column>

      <el-table-column width="400px" align="center" label="地址" prop="address">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
      </el-table-column>
      <el-table-column width="200px" align="right" label="修改">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div>
      <button @click="addfn">增加新用户 </button>
    </div>
    <!-- 表单 -->
    <myDialog 
    :form="form" 
    :dialogFormVisible="dialogFormVisible" 
    :formLabelWidth="formLabelWidth"
    @confirmfn_my="confirmfn"
    @myCancle="canclefn"
    ></myDialog>
    <!-- 增加的弹窗 -->

    <AddDialog
      :addform="addform"
      :incrementform="incrementform"
    :formLabelWidth="formLabelWidth"
    @my_addconfirm="addconfirmfn"
    @my_addcancle="addcanclefn"
    ></AddDialog>


  </div>
</template>
<script>
import instance from "../api/api";
import myDialog from "@/components/MyDialog.vue"
import AddDialog from "@/components/addDialog.vue"
import dayjs from "dayjs"
export default {
  name: "Index",
  data() {
    return {
      search: "",
      formLabelWidth:"120px",
      incrementform:false,//决定增加表单的显示隐藏
      tableData: [],
      dialogFormVisible:false,
      addform:{
        name:"",
        address:"",
        date:null
      },
      form:{
        index:0,
        name:"",
        address:"",
        date:null,
      }
    };
  },
  components:{
    myDialog,
    AddDialog
  },
  created() {
    this.getAll();
  },
  methods: {
    //增加的确定功能
    addconfirmfn(){
      this.incrementfn().then(()=>{
        this.$message({
          type:"success",
          message:"添加成功",
          duration:3000,
          onClose:()=>{
            this.incrementform=false
            this.getAll()
          }
        })
      }).catch(()=>{

      })
    },
    //增加的取消功能
    addcanclefn(){
      this.incrementform=false
    
    },
    addfn(){
      
      this.incrementform=true
    },
    canclefn(){
      this.dialogFormVisible=false
    },
    //修改业务
    confirmfn(form){
      this.dialogFormVisible=false
      this.form.date=dayjs(new Date(this.form.date)).format("YYYY-MM-DD")
      console.log(this.form.date)
      this.updatefn()
    },
    async updatefn(){
      let {date,name,address,index}=this.form
      let {data} = await instance.put("/update",{date,name,address,index})
    },
    //增加业务
    async incrementfn(){
      let {date,name,address}=this.addform
      let {data} =await instance.post("/add",{date,name,address})
      console.log(data)
    },
    //
    getkan(){
      instance.get("/all").then(res=>console.log(res))
    },
    handleEdit(scope) {
      this.form=scope.row
      this.form.index=scope.$index
      this.dialogFormVisible=true
    },
    handleDelete(scope) {
      console.log(scope);
      this.$confirm("确定删除吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.deletefn(scope.$index).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
      // this.deletefn(scope.$index)
    },
    //请求数据的业务
    async getAll() {
      let { data } = await instance.get("/all");
      console.log(data);
      this.tableData = data.data;
    },

    async deletefn(index) {
      let { data } = await instance.delete("/delete", { params: { index } });
      console.log(data);
      this.getAll();
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
