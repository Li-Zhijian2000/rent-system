const base = 'home'

const tenantMenu = [
  {
    name: 'public',
    meta: {

    },
    sub: [
      {
        index: '/userinfo',
        component: () => import('@/views/Userinfo'),
        hidden: true
      }
    ],
    hidden: true
  },
  {
    name: 'room',
    meta: {
      title: '房间',
      icon: 'fa fa-camera-retro'
    },
    sub: [
      {
        index: '/rms/room',
        component: () => import('@/views/rms/Room'),
        meta: {
          title: '房间列表',
          icon: 'fa fa-camera-retro',
          type: 'menu',
          active: false
        }
      },
      {
        index: '/rms/apply/list',
        component: () => import('@/views/rms/Apply'),
        meta: {
          title: '我的申请',
          icon: 'fa fa-camera-retro',
          type: 'menu',
          active: false
        }
      }
    ]
  },
  {
    name: 'ticket',
    meta: {
      title: '工单',
      icon: 'fa fa-camera-retro'
    },
    sub: [
      {
        index: '/tms/addTicket',
        component: () => import('@/views/tms/AddTicket'),
        meta: {
          title: '提交工单',
          icon: 'fa fa-camera-retro',
          type: 'menu',
          active: false
        }
      },
      {
        index: '/tms/ticket',
        component: () => import('@/views/tms/Ticket'),
        meta: {
          title: '我的工单',
          type: 'menu',
          active: false
        }
      },
      {
        index: '/tms/ticketDetails',
        component: () => import('@/views/tms/TicketDetails'),
        hidden: true
      }]
  }]

const staffMenu = [

]

const menu = []

export { tenantMenu, staffMenu, menu }