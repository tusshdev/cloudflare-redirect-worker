export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Redirect ONLY bookdubaihome.pages.dev traffic
    if (url.hostname === 'bookdubaihome.pages.dev') {
      return Response.redirect(
        `https://bookdubaihome.com${url.pathname}${url.search}`,
        301 // Permanent redirect
      );
    }
    
    // For all other requests (including bookdubaihome.com), proceed normally
    return fetch(request);
  }
};
