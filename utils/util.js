function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function getTopics(content){
  var topics = content.match(/#([^#;]*?)#/g)
  if(!topics){
    return []
  }
  topics=topics.map((item)=>{
    return item.substr(1,item.length-2) //删除前后的#
  })
  //数组去重
  topics=Array.from(new Set(topics))
  return topics
}
function increase_attr(obj,opt) {
  Object.assign(obj, opt);
  return obj;
}
module.exports = {
  formatTime: formatTime,
  increase_attr: increase_attr,
  getTopics: getTopics
}
