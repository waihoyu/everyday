// ajax 带上时间戳去请求服务器， 保证安全

// 时间戳 + uid md5 值

function generateTime() {
    // 年份，月份少于两位加0
    // 时间也是两位
    let time = new Date()
    let timeStamp = ''
    let year = time.getFullYear();
    let month = (time.getUTCMonth() < 10) ? '0' + (time.getUTCMonth() + 1) :
        time.getUTCMonth() + 1;
    let day = (time.getDate() < 10) ? '0' + time.getDate() :
        time.getDate();
    let hours = (time.getHours() < 10) ? '0' + time.getHours() :
        time.getHours();
    let minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() :
        time.getMinutes();
    let seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() :
        time.getSeconds();
    timeStamp = year + month + day + hours + minutes + seconds;
    console.log(timeStamp);
}
generateTime()