import path from 'path'

export default {
  server: {
    port: 5173,
  },
  alias: {
    '/@/': path.resolve(__dirname, 'src'),
  }
}

