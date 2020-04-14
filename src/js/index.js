import '../style/iconfont.css'
import '../style/index.less'
import '../style/index.css'

function add(x, y) {
  return x + y
}

document.querySelector('#link').addEventListener('click',() => {
  window.location.href = `http://app.dxy.cn/drugs/advisor_dtl/${2}?fieldId=${3}&title=肺部感染`
},false)

console.log(add(3, 4))