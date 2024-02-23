const path = require('path')
const IconGenerator = require('{project-root}/IconGenerator/IconGenerator')

const inputDir = path.join(__dirname, './raw')
const outputDir = path.join(__dirname, '../lib/icons')
const generator = new IconGenerator(inputDir, outputDir)

generator.generate()
