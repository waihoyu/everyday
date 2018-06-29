import Mock from 'mockjs'

export default {
    getList: () => {
        return {
            total: 2,
            items: [{
                    id: 1,
                    timestamp: '二小时前',
                    title: 'Tom',
                    author: 'jack',
                    pageviews: '9999'
                },
                {
                    id: 2,
                    timestamp: '三小时前',
                    title: 'Jack Ma',
                    author: 'jack',
                    pageviews: '8888'
                }
            ]
        }
    }
}