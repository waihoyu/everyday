<template>
  <div>
    <comment-form @addComment="addComment" />
    <comment-list :list="list">
    </comment-list>
    <pagination :totalCount="totalCount" :currentPage="currentPage" :pagesize="pagesize" @turnPage="turnPage" />
  </div>
</template>

<script>
import CommentForm from './CommentForm.vue'
import CommentList from './CommentList.vue'
import Pagination from './Pagination.vue'

export default {
  data() {
    return {
      list: [],
      pagesize: 3,
      totalData: [],
      totalCount: 0,
      currentPage: 1
    }
  },

  methods: {
    turnPage(curr) {},
    addComment(msg) {
      console.log(msg)
      this.totalData.push({ text: msg })
      this.totalCount = this.totalData.length
      if (this.totalCount < this.pagesize) {
        this.list = this.totalData
      } else {
        this.list = this.totalData.slice(this.totalCount - this.pagesize)
      }
      this.currentPage = 1
      this.list.reverse()
      // this.$
    }
  },

  components: {
    CommentForm,
    CommentList,
    // CommentItem,
    Pagination
  }
}
</script>

<style>
.input-area {
  color: #000;
  font-size: 15px;
  margin: 10px auto;
  width: 300px;
}
.input-area .user {
  border: 1px solid blue;
  width: 100px;
  display: block;
  margin-bottom: 10px;
}
.input-area .textarea {
  border: 1px solid blue;
  width: 100px;
  height: 100px;
  display: block;
  margin-bottom: 10px;
}
</style>