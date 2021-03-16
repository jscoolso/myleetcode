describe('insert', () => {
  it('测试说明1', async () => {
    getQuerys('http://sample.com/?a=1&e&b=2&c=xx&d#hash');
  });
});

/**
 * 处理url上面的query参数
 * @param url
 */
const getQuerys = (url?: string): Map<string, string> => {url = url || location.href;
  const regex = /[?&]([^=#]+)=([^&#]*)/g;
  const paramsMap = new Map<string, string>();
  let match;
  while ((match = regex.exec(url))) {
    paramsMap.set(match[1], match[2]);
  }
  return paramsMap;
};
