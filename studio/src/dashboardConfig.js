export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e8baa70f3780ceeca4bb57b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-example-studio-ua2o62af',
                  apiId: '5afd45ec-4964-4eaa-84a3-9d178902baf0'
                },
                {
                  buildHookId: '5e8baa708149e670ad7124b5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-example-web-vvbgwgvp',
                  apiId: '7b95ff70-938c-4d86-b0d6-1b8b1e109733'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/luistak/sanity-gatsby-blog-example',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-example-web-vvbgwgvp.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
