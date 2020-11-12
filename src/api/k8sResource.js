import request from '@/utils/request'

export function createResource(data) {
  return request({
    url: '/kube/createOrUpdateResource',
    method: 'post',
    data
  })
}

export function updateResource(data) {
  return request({
    url: '/kube/updateResource',
    method: 'post',
    data
  })
}

export function deleteResource(data) {
  return request({
    url: '/kube/deleteResource',
    method: 'post',
    data
  })
}

export function getResource(params) {
  return request({
    url: '/kube/getResource',
    type: 'get',
    params
  })
}

export function listResources(data) {
  return request({
    url: '/kube/listResources',
    method: 'post',
    data
  })
}

export function getMeta(params) {
  return request({
    url: '/kube/getMeta',
    type: 'get',
    params
  })
}

export function getScheduleData(data) {
  var res = request({
    url: 'networkFlow/solveBase',
    method: 'post',
    data
  })
  return res
}

// export function validateRes(res) {
//   if (res.code === 20000) {
//     return true
//   } else {
//     this.$notify({
//       title: 'error',
//       message: res.data,
//       type: 'warning',
//       duration: 3000
//     })
//     return false
//   }
// }
