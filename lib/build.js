const { default: nextExport } = require('next/dist/server/export')
const { default: build } = require('next/dist/server/build')
const path = require('path')

const defaultConfig = require('./defaultConfig')

module.exports = async (dir) => {
  const inpressPath = path.resolve(dir, '.inpress')

  const nextConfig = defaultConfig

  await build(inpressPath, nextConfig)
  await nextExport(
    inpressPath,
    { outdir: path.resolve(inpressPath, 'dist') },
  )
}
