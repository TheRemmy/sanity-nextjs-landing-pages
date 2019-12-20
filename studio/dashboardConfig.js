export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dfd239199332eb2f2b5fe65',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vqtue6vw',
                  apiId: 'bb264bcf-6211-4396-83fb-f10acff5e350'
                },
                {
                  buildHookId: '5dfd2391e0f80a7036286a88',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yfd4wnc9',
                  apiId: '7f4b5f1e-b422-471e-9506-47f9a180032f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TheRemmy/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yfd4wnc9.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
