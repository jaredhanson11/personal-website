class FooterItem {
  constructor(img, to) {
    this.img = img
    this.to = to
  }
}

export default [
  new FooterItem('linkedin-logo.png', 'https://linkedin.com/in/jared-hanson/'),
  new FooterItem('github-logo.png', 'https://github.com/jaredhanson11'),
  new FooterItem('instagram-logo.png', 'https://instagram.com/jaredhanson11/')
]
