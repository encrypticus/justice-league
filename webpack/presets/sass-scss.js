const cssLoader = require('../loaders/css-loader');
const sassScssLoader = require('../loaders/sass-scss-loader');
const styleLoader = require('../loaders/style-loader');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssLoader = require('../loaders/postcss-loader');

// Объект настроек по умолчанию
const defaultOptions = {
  styleLoader: {},
  cssLoader: {},
  sassScssLoader: {},
  postcssLoader: {},
  settings: {
    test: /\.s[ac]ss$/
  }
};

/** @description module - это свойство объекта конфига сборщика, в котором задаются правила, по которым
 * сборщик будет обрабатывать файлы с тем или иным расширением (модули), а также указываются лоадеры,
 * которые будут обрабатывать эти файлы.
 * @param {Object} options настройки для пресета
 * @returns {Object} свойство объекта конфига сборщика, пресет для scss/sass-файлов
 */
module.exports = (options = {}) => {
  return {
    module: {
      rules: [
        {
          ...{ ...defaultOptions.settings, ...options.settings },
          use: [
            process.env.mode === 'development' ? styleLoader(options.styleLoader) : miniCssExtractPlugin.loader,
            cssLoader(options.cssLoader),
            postcssLoader(options.postcssLoader),
            {
              loader: 'resolve-url-loader'
            },
            sassScssLoader(options.sassScssLoader)
          ]
        }
      ]
    }
  }
};
