class NavItem {
  constructor(name, to) {
    this.name = name
    this.to = to
  }
}

export default [
  new NavItem('About Me', '#about-me'),
  new NavItem('Projects', '#projects'),
  new NavItem('Experience', '#experience')
]
