module.exports = {
  apps: [
    {
      name: "raxor",
      script: "node_modules/.bin/next",
      args: "start --port 3003 --hostname 127.0.0.1",
      cwd: "/home/fernando/ecosistema-webs-nextjs",
      instances: 1,
      autorestart: true,
      restart_delay: 3000,
      max_restarts: 10,
      max_memory_restart: "450M",
      env: {
        NODE_ENV: "production",
        NEXT_PUBLIC_BRAND_SLUG: "raxor",
        NEXT_PUBLIC_SITE_URL: "https://raxor.co",
        PORT: "3003",
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      error_file: "/home/fernando/logs/raxor-error.log",
      out_file: "/home/fernando/logs/raxor-out.log",
      merge_logs: false,
    },
  ],
};
