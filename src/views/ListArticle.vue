<template>
  <div>
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="140"></el-table-column>
      <el-table-column prop="body" label="内容"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row._id)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.$http.get('articles').then(res => {
        this.articles = res.data
      })
    },
    remove(id) {
      console.log('remove id: ', id)
      this.$http.delete(`articles/${id}`).then(res => {
        this.$message({
          type: 'success',
          message: '文章删除成功'
        })
        this.fetch()
      })
    },
    edit(id) {
      console.log('edit id: ', id)
      this.$router.push(`/articles/${id}/edit`)
    }
  }
}
</script>
