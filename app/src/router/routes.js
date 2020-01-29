
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'start', component: () => import('pages/stream/1-start') },
      { path: 'set-role', component: () => import('pages/stream/2-choose-role') },
      { path: 'in-game', component: () => import('pages/stream/3-in-game') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
