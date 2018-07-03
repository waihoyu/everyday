class Promise {
    constructor (executor) {
      this.status = 'pending';
      this.value = undefined;
      this.reason = undefined;
      // value ? executor 调用时传过来的结果
      let resolve = (value) => {
        if (this.status == 'pending') {
          this.status = 'resolved';
          this.value = value
        }
      }
      let reject = (reason) => {
        if (this.status == 'pending') {
          this.status = 'rejected';
          this.reason = reason
        }
      }
      // resolve, reject
      executor(resolve, reject);
      // ajax setTimeout, node 数据库处理 fs file
    }
  
    then (onFullFilled, onRejected) {
      if (this.status == 'resolved') {
        onFullFilled(this.value);
      }
      if (this.status == 'rejected') {
        onRejected(this.reason);
      }
    }
}
  
  const p = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        resolve('hello world1')
        reject('我的天啊');
    },1000)  
  })
  
  p.then((data) => {
    console.log(data);
  }, (err) => {
    console.log(err);
  })