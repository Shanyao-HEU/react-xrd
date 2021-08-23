/**
 * 用于定义面包屑
 * 将路由的名称一一对应
 */

export const routeArr = [
  {
    key:'sub1',
    name: '第一个下拉',
    children: [
      {
        path: '/no1',
        name: '管理1',
      },
      {
        path: '/no2',
        name: '管理2',
      },
    ]
  },
  {
    key:'sub2',
    name: '第二个下拉',
    children: [
      {
        path: '/no3',
        name: '管理3',
      },
      {
        path: '/no4',
        name: '管理4',
      },
    ]
  },
  {
    key:'sub3',
    name: '第三个下拉',
    children: [
      {
        path: '/no5',
        name: '管理5',
      },
      {
        path: '/no6',
        name: '管理6',
      },
    ]
  },
  {
    key:'sub4',
    name: '第四个下拉',
    children:[
      {
        path: '/no7',
        name: '管理7',
      },
      {
        path: '/no8',
        name: '管理8',
      },
    ]
  },
]

//写明每个路由对应的页面route的页面配置


