import { defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react'

import * as path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            {
                find: './runtimeConfig',
                replacement: './runtimeConfig.browser',
            },
        ],
    },
})
