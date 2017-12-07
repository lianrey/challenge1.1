import React from 'react';
class BaseComponent extends React.Component{
  constructor(props){
    super(props);
  }

  bind(method){
    if (typeof method === 'string') {
      this[method] = this[method].bind(this);
    } else {
      method.map((method) => {
        this[method] = this[method].bind(this);
        return this[method];
      });
    }
    return this[method];
  }

  find_with_key_and_value(array, key, value) {
    return array.filter(function(a){ return a[key] == value });
  };

  find_with_key(array, key) {
    return array[0][key];
  };

  generateUIKey(prependValue = 'key'){
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return prependValue + s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  stripHTMLtags(str) {
    if ((str === null) || (str === ''))
      return false;
    else
      str = str.toString();

    return str.replace(/<[^>]*>/g, '');
  }

  truncate(str, max) {
    if (str.length === 0 && str.constructor === Object)
      return '';

    return str.length > max ? str.replace(/^(.{205}[^\s]*).*/, "$1") + '... ' : str;
  }

  dedupeByKey(arr, key) {
    const temp = arr.map(el => el[key]);
    return arr.filter((el, i) =>
      temp.indexOf(el[key]) === i
    );
  }

  isEmpty(obj) {
    // Speed up calls to hasOwnProperty
    const hasOwnProperty = Object.prototype.hasOwnProperty;

    // checking for empty obj to avoid rendering error
    if (obj == null)             return true;
    if (obj.length > 0)          return false;
    if (obj.length === 0)        return true;
    if (typeof obj !== "object") return true;

    for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
  }

  getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    return document.cookie = `"${cname}"=" ${cvalue} ";" ${expires } ";path=/"`;
  }

  deleteCookie(cname) {
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  };

  render() {
    return <div className={this.props.className}>foo</div>;
  }
}

export default BaseComponent
