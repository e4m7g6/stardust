export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5dce423f0b8c72cb948f5c3f',
                  title: 'Sanity Studio',
                  name: 'stardust-studio',
                  apiId: '394b6b5b-2e39-418f-afc3-9e2903cd06a5'
                },
                {
                  buildHookId: '5dce423f3de0ac1eeef99f04',
                  title: 'Blog Website',
                  name: 'stardust-web',
                  apiId: '011fcc1b-817d-41e0-9d8e-0e9aac3f7fe7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/e4m7g6/stardust',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://stardust-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
