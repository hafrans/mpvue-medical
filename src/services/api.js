import { Ajax } from '../utils/index'
// 上传
// export const upload = async (params, url) => {
//   return this.$ajax({
//     url: url || '/api/v2/user/drafts',
//     type: 'POST',
//     params
//   })
// }
//  获取消息通知数量
export const getComments = async (params) => {
  return Ajax({ url: `/api/comment/list/${params.category}/${params.id}` })
}
// // 查询企业
// export const searchMerchant = async (name) => {
//   return fetch({ url: `/api/claim/searchMerchantList?name=${name}` })
// }
// // 获取企业详情
// export const getMerchant = async () => {
//   return fetch({ url: '/api/v2/merchant/summary' })
// }
// // 获取企业基本资料（暂时助贷时用）
// export const getMerchantDetail = async () => {
//   return fetch({ url: '/api/v2/merchant' })
// }
// // 获取企业授信时间
// export const getValidCreding = async (params) => {
//   return fetch({ url: '/api/v2/merchant/valid_crediting', params })
// }

// // 获取授信状态
// export const getCreditStatus = async () => {
//   return fetch({ url: '/api/v2/merchant/pending_crediting' })
// }
// // 授信资料提交
// export const creditSubmit = async (params) => {
//   return fetch({
//     url: '/api/v2/merchant/pending_crediting/status',
//     type: 'PUT',
//     params
//   })
// }