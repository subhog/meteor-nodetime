
Package.describe({
  summary: "Performance profiler and monitor"
});

Npm.depends({nodetime: "0.8.13"});

Package.on_use(function (api) {
  api.add_files("main.js", "server");
});
