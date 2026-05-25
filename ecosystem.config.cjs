const CWD = "/home/fernando/ecosistema-webs-nextjs";
const LOGS = "/home/fernando/logs";

const BASE = {
  script: "node_modules/.bin/next",
  cwd: CWD,
  instances: 1,
  autorestart: true,
  restart_delay: 3000,
  max_restarts: 10,
  max_memory_restart: "450M",
  log_date_format: "YYYY-MM-DD HH:mm:ss",
  merge_logs: false,
};

function app(slug, port, domain) {
  return {
    ...BASE,
    name: slug,
    args: `start --port ${port} --hostname 127.0.0.1`,
    env: {
      NODE_ENV: "production",
      NEXT_PUBLIC_BRAND_SLUG: slug,
      NEXT_PUBLIC_SITE_URL: `https://${domain}`,
      PORT: String(port),
    },
    error_file: `${LOGS}/${slug}-error.log`,
    out_file: `${LOGS}/${slug}-out.log`,
  };
}

module.exports = {
  apps: [
    app("kyrexis", 3001, "kyrexis.co"),
    app("aelor",   3002, "aelor.co"),
    app("raxor",   3003, "raxor.co"),
    app("ixera",   3004, "ixera.co"),
    app("nixen",   3005, "nixen.co"),
    app("dextor",  3006, "dextor.co"),
    app("vaxen",   3007, "vaxen.co"),
  ],
};
