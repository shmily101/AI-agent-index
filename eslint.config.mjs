// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from "eslint-plugin-prettier";

export default withNuxt(
  // Your custom configs here
  {
    extends: ['prettier'],
    plugins: {
      prettier
    },
    rules: {
      // 在单行元素的内容前后不需要换行符
      'vue/singleline-html-element-content-newline': 'off',
      // 模板中每行的属性数量最大值
      'vue/max-attributes-per-line': 'off',
      // 使用prettier
      'prettier/prettier': 'error'
    },
  },
)
