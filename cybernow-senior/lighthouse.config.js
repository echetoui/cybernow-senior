module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/fr', 'http://localhost:3000/en'],
      settings: {
        chromeFlags: '--no-sandbox'
      }
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};