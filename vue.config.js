module.exports = {
    pwa: {
      manifestOptions: {
        background_color: '#000000'
      },
      name: 'My portfolio',
        themeColor: '#4DBA87',      
        workboxOptions: {
            runtimeCaching: [
              {
                handler: 'NetworkFirst',
                options: {
                  networkTimeoutSeconds: 5
                },
                urlPattern: 'https://api.publicapis.org/entries?category'
                },
                {
                    handler: 'NetworkFirst',
                    options: {
                      networkTimeoutSeconds: 5
                    },
                    urlPattern: 'https://www.boredapi.com/api/activity/'
                    },
                    
                
            ]
          }
      
    }
}

