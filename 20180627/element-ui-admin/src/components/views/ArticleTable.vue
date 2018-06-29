<template>
    <div class="app-container">
        <div class="filter-container">
        </div>
        <el-table :data="list" v-loading="listLoading">
            <el-table-column label="序号" align="center" width="65">
                <template slot-scope="scope">
                    <span>{{scope.row.id}}</span>
                </template>
            </el-table-column>
            <el-table-column label="日期" align="center" width="150">
                <template slot-scope="scope">
                    <span>{{scope.row.timestamp}}</span>
                </template>
            </el-table-column>
            <el-table-column label="标题" align="center" min-width="150">
                <template slot-scope="scope">
                    <span>{{scope.row.title}}</span>
                </template>
            </el-table-column>
            <el-table-column label="作者" align="center" width="110">
                <template slot-scope="scope">
                    <span>{{scope.row.author}}</span>
                </template>
            </el-table-column>
            <el-table-column label="阅读数" align="center" width="95">
                <template slot-scope="scope">
                    <span>{{scope.row.pageviews}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
                <template slot-scope="scope">
                    <el-button type="primary" @click="handleUpdate(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="修改" :visible.sync="dialogFormVisible">
            <el-form :model="dataModal" label-position="left" label-width="70" style="width:400px;margin-left:50px">
                <el-form-item prop="title" label="标题">
                    <el-input v-model="dataModal.title"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible=false">取消</el-button>
                <el-button @click="updateData">保存</el-button>
            </div>
        </el-dialog>
        <div class="pagination-container">
        </div>
    </div>
</template>
<script>
import { fetchList } from '@/api/article.js'
export default {
  data() {
    return {
      listLoading: false,
      dialogFormVisible: false,
      dataModal: {
        id: null,
        importance: undefined,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      list: [],
      listQuery: {
        title: undefined,
        importtance: undefined,
        type: undefined,
        sort: '+id',
        page: 1,
        limit: 20
      }
    }
  },
  created() {
    // this.listLoading = true
    this.getList()
  },
  methods: {
    updateData() {},
    getList() {
      // title:
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        console.log(response.data.items)
        this.list = response.data.items
        this.total = response.data.total
        setTimeout(() => {
          this.listLoading = false
        }, 2000)
      })
    },
    handleUpdate(row) {
      this.dialogFormVisible = true
      this.dataModal = Object.assign({}, row)
      //this.dataModal = {}
      console.log(row)
    }
  }
}
</script>
<style>
</style>