export default (context: any, inject: any) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('pageHandler', () => {
    const userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
    let device = ''
    if (/mobile/i.test(userAgent)) {
      device = 'mobile'
    } else {
      device = 'desktop'
    }
    return device
  })
}
