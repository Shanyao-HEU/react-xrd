import ajax from './ajax'

export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST')

//获取所有角色列表
export const reqRoles = () => ajax('./manage/role/list')

export const reqAddRole = (roleName) => ajax('/manage/role/add', {roleName}, 'POST')

export const reqUpdateRole = (role) => ajax('/manage/role/update', role, 'POST')
//获取一级或某个二级分类列表po

export const reqCategorys = (parentId) => ajax('/manage/category/list', {parentId})
//添加分类

export const reqAddCategory = (parentId, categoryName) => ajax('/manage/category/add',
  {
    parentId,
    categoryName
  }, 'POST')
//更新品类名称
export const reqUpdateCategory = ({categoryId, categoryName}) =>
  ajax('/manage/category/update', {
    categoryId,
    categoryName
  }, 'POST')