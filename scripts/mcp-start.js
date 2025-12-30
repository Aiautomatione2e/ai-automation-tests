import { execSync } from 'child_process'
execSync('npx playwright mcp --config mcp/config.json', { stdio: 'inherit' })
