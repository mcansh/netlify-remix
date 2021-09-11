module.exports = {
  apps: [
    {
      name: "Remix",
      script: "remix dev",
      ignore_watch: ["."],
      env: {
        NODE_ENV: "development",
      },
    },
    {
      name: "Netlify",
      script: "DEBUG=* netlify dev",
      ignore_watch: ["."],
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
