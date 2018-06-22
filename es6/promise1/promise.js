 function GetPromise(resolve, reject) {
     let pr = new Promise(function(resolve, reject) {
         setTimeout(resolve, 2000);
     });
     return pr;
 }

 class Promise {
     constructor(executor) {
         //成功的值
         this.value = undefined;
         this.reason = undefined;
         //  promise 状态有几种
         //  pending
         //  resolved
         //  rejected
         this.status = 'pending';
         let resolve = (value) => {
             if (this.status === 'pending') {
                 this.status = 'resolved';
                 this.value = value;
             }
         }
         let reject = (reason) => {
             console.log('++');
             if (this.status === 'pending') {
                 this.status = 'rejected';
                 this.reason = reason;
             }
         }
         executor(resolve, reject);
     }
     then(onFullfilled, onRejected) {
         if (this.status === 'resolved') {
             onFullfilled(this.value);
         }
         if (this.status === 'rejected') {
             onRejected(this.reason);
         }
     }
 }

 module.exports = Promise