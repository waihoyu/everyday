// 不可以被实例化 怎么实现
/* 
ObejctFacktory  instanceof
这个类被实例化

*/

const instance = new ClassCannotInstance()

function ClassCannotInstance() {
    if (this instanceof ClassCannotInstance) {
        throw new Error('不能被实例化')
    }
}