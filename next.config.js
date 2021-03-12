module.exports = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/ohaka/pref-:prefecture([a-z]+)/list/',
        destination: '/ohaka/pref/:prefecture/list',
      },
      {
        source: '/ohaka/pref-:prefecture([a-z]+)/city-:city(\\d+)/list/',
        destination: '/ohaka/pref/:prefecture/city/:city/list',
      },
      {
        source: '/ohaka/pref-:prefecture([a-z]+)/cond-:condition([a-z_]+-[a-z_]+)/list/',
        destination: '/ohaka/pref/:prefecture/cond/:condition/list',
      },
      {
        source: '/ohaka/pref-:prefecture([a-z]+)/city-:city(\\d+)/cond-:condition([a-z_]+-[a-z_]+)/list/',
        destination: '/ohaka/pref/:prefecture/city/:city/cond/:condition/list',
      },
      {
        source: '/ohaka/pref-:prefecture([a-z]+)/st-:station(\\d+)/list/',
        destination: '/ohaka/pref/:prefecture/st/:station/list',
      },
      {
        source: '/ohaka/pref-:prefecture([a-z]+)/st-:station(\\d+)/cond-:condition([a-z_]+-[a-z_]+)/list/',
        destination: '/ohaka/pref/:prefecture/st/:station/cond/:condition/list',
      },
    ]
  },
}
