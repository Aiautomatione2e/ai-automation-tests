import { execSync } from 'child_process'
execSync(`npx playwright codegen ${process.env.APP_URL} --output=tests/regression/auto.spec.ts`, { stdio: 'inherit' })
