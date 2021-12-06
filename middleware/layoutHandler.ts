export default function (context: any) {
  const userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  context.isMobile = /mobile/i.test(userAgent)
}
