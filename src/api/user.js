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
 * 获取用户信息
 * @returns {*}
 */
export function getUserInfo() {
  return request({
    url: '/user/editUserInfo'
  })
}

export function getCaptcha() {
  return request({
    url: '/user/verify'
  })
}
