// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    plugins: {
      prettier,
    },
    rules: {
      // 在单行元素的内容前后不需要换行符
      'vue/singleline-html-element-content-newline': 'off',
      // 模板中每行的属性数量最大值
      'vue/max-attributes-per-line': 'off',
      // 使用prettier
      'prettier/prettier': 'error',
      // 允许在代码中出现未使用的表达式
      '@typescript-eslint/no-unused-expressions': 'off',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
  },
  // todo 似乎没有生效 不确定怎么改
  eslintConfigPrettier,
).overrideRules({
  '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
})
