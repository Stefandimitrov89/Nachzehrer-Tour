class MyRouter {
  constructor() {
    this._routes = [];
  }

   on(targetUrl, callback) {
    //  console.log(targetUrl);
       this._routes.push({
       targetUrl,
       callback
    });

    return this;
  }

  navigate() {
    const currentUrl = location.hash.slice(1);
    console.log("---->>> MyRouter - navigate - currentUrl = " + currentUrl);
    
    for (const {targetUrl, callback} of this._routes) {
      const params = MyRouter.matchUrls(currentUrl, targetUrl);
      if (params) {
        // console.log("---->>> MyRouter ++++++ navigate - this.params = " + params);
        callback(params);
        break;
      }
    }
  }

  static matchUrls(currentUrl, targetUrl) {
    const currentUrlParts = currentUrl.split(/\//g);
    const targetUrlParts = targetUrl.split(/\//g);

    if (targetUrlParts.length !== currentUrlParts.length) {
      console.log('length');
      return false;
    }

    const params = {};

    const len = currentUrlParts.length;
    // console.log("---->>> ================00000000000000==========");
    // console.log("---->>> MyRouter - matchUrls - len: " + len);
    for (let i = 0; i < len; i += 1) {
      if (targetUrlParts[i][0] !== ':') {
        // console.log("---->>> ==================================");
        // console.log("---->>> currentUrlParts[i]: " + currentUrlParts[i]);
        // console.log("---->>> targetUrlParts[i]: " + targetUrlParts[i]);
        if (currentUrlParts[i] !== targetUrlParts[i]) {
          // console.log("---->>> MyRouter - matchUrls - false");
          // console.log('false');
          // console.log(params);
          return false;
        }
      } else {
        console.log('true');
        const paramName = targetUrlParts[i].slice(1);
        params[paramName] = currentUrlParts[i];
      }
    }
    // console.log("---->>> MyRouter - matchUrls - params = " + params);
    return params;
  }
}

export {
  MyRouter
};