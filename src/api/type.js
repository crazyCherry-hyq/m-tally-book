import request from "@/utils/request.js";

/**
 * 获取账单类型列表
 * @returns {*}
 */
export function getTypeList() {
  return request({
    url: '/type/list'
  })
}
