import request from "@/utils/request.js";

/**
 *
 * @param params
 * @returns {*}
 */
export function getBillList(params) {
  return request({
    url: '/bill/list',
    params
  })
}
