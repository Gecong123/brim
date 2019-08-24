/* @flow */
const packager = require("electron-packager")

let opts = {
  dir: ".",
  out: "dist/packages",
  overwrite: true,
  name: "Brim"
}

module.exports = {
  darwin: function() {
    return packager({
      ...opts,
      platform: "darwin",
      icon: "dist/static/AppIcon.icns"
    }).then(() => {
      console.log("Built package for darwin in " + opts.out)
    })
  },
  win32: function() {
    return packager({
      ...opts,
      platform: "win32",
      icon: "dist/static/AppIcon.ico",
      asar: true
    }).then(() => {
      console.log("Built package for win32 in " + opts.out)
    })
  }
}
