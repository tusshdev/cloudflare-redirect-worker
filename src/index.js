export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.hostname === 'bookdubaihome.pages.dev') {
      return Response.redirect(
        `https://bookdubaihome.com${url.pathname}${url.search}`,
        301
      );
    }
    return fetch(request);
  }
}
