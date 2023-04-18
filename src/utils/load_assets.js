export const getAssetURL = (image) => {
  // 参数一：相对路劲
  // 第二个参数：当前的路径URL
  return new URL(`../assets/img/${image}`, import.meta.url).href
}