
Package.describe({
  summary: "Nodetime"
});

Npm.depends({nodetime: "0.8.12"});

Package.on_use(function (api) {
  api.add_files("main.js", "server");
});
