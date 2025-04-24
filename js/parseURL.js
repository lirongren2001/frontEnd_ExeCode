function parseUrlParams(url) {
  const params = {};
  const queryString = url.split('?')[1] || '';
  
  queryString.split('&').forEach(pair => {
    const [key, value] = pair.split('=');
    if (!key) return;

    const decodedKey = decodeURIComponent(key);
    const decodedValue = value ? decodeURIComponent(value) : '';

    if (params.hasOwnProperty(decodedKey)) {
      // 处理数组参数（如 skills=js&skills=css）
      params[decodedKey] = Array.isArray(params[decodedKey]) 
        ? [...params[decodedKey], decodedValue]
        : [params[decodedKey], decodedValue];
    } else {
      params[decodedKey] = decodedValue;
    }
  });

  return params;
}



function parseUrl(urlString) {
    const url = new URL(urlString);
    return {
        protocol: url.protocol,   // 协议（如 "https:"）
        hostname: url.hostname,   // 域名（如 "example.com"）
        pathname: url.pathname,   // 路径（如 "/path"）
        searchParams: Object.fromEntries(url.searchParams) // 查询参数对象
    };
}

// 示例解析
const result = parseUrl("https://example.com/path?name=John&age=30");
console.log(result.searchParams); // 输出：{ name: "John", age: "30" }


function parseURL(url) {
    const result = {
      protocol: '',
      hostname: '',
      port: '',
      path: '/',
      query: {},
      hash: ''
    };
  
    // 解析协议 (protocol)
    const protocolEnd = url.indexOf('://');
    if (protocolEnd !== -1) {
      result.protocol = url.slice(0, protocolEnd);
      url = url.slice(protocolEnd + 3); // 移除协议部分
    }
  
    // 解析哈希 (hash)
    const hashIndex = url.indexOf('#');
    if (hashIndex !== -1) {
      result.hash = url.slice(hashIndex + 1);
      url = url.slice(0, hashIndex);
    }
  
    // 解析查询参数 (query)
    const queryIndex = url.indexOf('?');
    if (queryIndex !== -1) {
      const queryStr = url.slice(queryIndex + 1);
      url = url.slice(0, queryIndex);
      result.query = parseQuery(queryStr);
    }
  
    // 解析路径 (path)
    const pathIndex = url.indexOf('/');
    if (pathIndex !== -1) {
      result.path = url.slice(pathIndex);
      url = url.slice(0, pathIndex);
    }
  
    // 解析主机名和端口 (hostname & port)
    const [hostname, port = ''] = url.split(':');
    result.hostname = hostname;
    result.port = port;
  
    return result;
  }
  
  // 解析查询参数为对象
  function parseQuery(queryStr) {
    return queryStr.split('&').reduce((query, pair) => {
      const eqIndex = pair.indexOf('=');
      const key = eqIndex !== -1 ? pair.slice(0, eqIndex) : pair;
      const value = eqIndex !== -1 ? pair.slice(eqIndex + 1) : '';
      query[decodeURIComponent(key)] = decodeURIComponent(value);
      return query;
    }, {});
  }
  
  // 示例
  const url = 'https://www.example.com:8080/path/to/page?name=Alice&age=25#section';
  console.log(parseURL(url));

