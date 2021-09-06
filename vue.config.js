module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/text-vue/" : "/",
  devServer: {
    host: 'localhost'
  },
};