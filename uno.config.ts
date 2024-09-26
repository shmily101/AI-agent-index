import { defineConfig } from 'unocss'
import { presetAttributify } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetRemToPx({
      baseFontSize: 4 // 设置为4，实现w-1=1px
    }),
    presetAttributify()
  ],
  theme: {
    colors: {
      primary: '#326CF9', // 设置主色调
      gray: '#383838'
    },
  },
})