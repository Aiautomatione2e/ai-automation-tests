import { execSync } from 'child_process'
execSync('node scripts/mcp-start.js', { stdio: 'inherit' })
execSync(`npx playwright codegen ${process.env.APP_URL} --output=tests/regression/auto.spec.ts`, { stdio: 'inherit' })
