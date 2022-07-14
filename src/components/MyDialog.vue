<template>
    <div>
         <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="日期" :label-width="formLabelWidth">
         <el-date-picker
      v-model="form.date"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmfn(form)"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- <button @click="getkan">查看你</button> -->
    </div>
</template>
<script>

export default {
    name:"MyDialog",
    props:["form","dialogFormVisible","formLabelWidth"],
    methods:{
        canclefn(){
            this.$emit('myCancle')//事件名
        },
        confirmfn(){
            this.$emit('confirmfn_my')//事件名
        }
    }
}
</script>
