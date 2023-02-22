import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    /* ... */
  },
  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    // btn激活样式
    'btn-active': 'text-white bg-green-500 hover:bg-green-700',
  },
})
