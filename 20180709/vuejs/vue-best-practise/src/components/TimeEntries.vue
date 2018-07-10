<template>
    <div>TimeEntries
        <router-view>
            <div class="time-entries">
                <p v-if="!plans.length">
                    <strong>还没有任何计划</strong>
                </p>
                <div class="list-group">
                    <a href="" v-for="(plan, index) in plans" class="list-group-item" :key="index">
                        <div class="row">
                            <div class="col-sm-2 user-details">
                                <img :src="plan.avatar" class="avatar img-circle img-responsive" alt="">
                                <p class="text-center">
                                    <strong>
                                        {{plan.name}}
                                    </strong>
                                </p>
                            </div>
                            <div class="col-sm-2 text-center time-block">
                                <h3 class="list-group-item-text totao-time">
                                    <i class="glyphicon glyphicon-tiem"></i>
                                    {{plan.totalTime}}
                                </h3>
                                <p class="label label-primary text-center">
                                    <i class="glyphicon glyphicon-calendar">
                                        {{plan.date}}
                                    </i>
                                </p>
                            </div>
                            <div class="col-sm-7 comment-section">
                                <p>{{plan.comment}}</p>
                            </div>
                            <div class="col-sm-1">
                                button.btn.btn-xs.btn
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </router-view>
    </div>
</template>

<script>
export default {
    name: 'TimeEntries',
    computed: {
        plans () {
            return this.$store.state.list
        }
    },
    methods: {
    deletePlan (idx) {
            
    }
}
}
</script>

<style>
.avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>
