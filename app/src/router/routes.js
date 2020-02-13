
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'start', component: () => import('pages/stream/1-start') },
      { path: 'introdution', component: () => import('pages/stream/2-introdution') },
      { path: 'in-game', component: () => import('pages/stream/3-in-game/index') },
      { path: 'finish', component: () => import('pages/stream/4-finish/index') },
      { path: 'island', component: () => import('pages/stream/5-island/index') }
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
