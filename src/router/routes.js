const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/IndexPage.vue') }
  //   ]
  // },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
         path: '', component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/education', name: 'education', component: () => import('pages/EducationPage.vue')
      },
      {
        path: '/skills', name: 'skills', component: () => import('pages/SkillsPage.vue')
      },
      {
        path: '/portfolio', name: 'portfolio', component: () => import('pages/ProjectsPage.vue')
      },
      {
        path: '/contact', name: 'contact', component: () => import('pages/ContactPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
