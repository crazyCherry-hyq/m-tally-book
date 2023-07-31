import request from "@/utils/request.js";

/**
 * 登录接口
 * @param data
 * @returns {*}
 */
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

/**
 * 登录接口
 * @param data
 * @returns {*}
 */
export function register(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}


/**
 * 获取图形验证码
 * @returns {*}
 */
export function getCaptcha() {
  return request({
    url: '/user/verify'
  })
}

/**
 * 获取用户信息
 * @returns {*}
 */
export function getUserInfo() {
  return request({
    url: '/user/editUserInfo'
  })
}

/**
 * 编辑用户信息
 * @param data
 * @returns {*}
 */
export function editUserInfo(data) {
  return request({
    url: '/user/editUserInfo',
    method: 'post',
    data
  })
}

export function upload(data) {
  return request({
    url: '/upload',
    method: 'post',
    data
  })
}

