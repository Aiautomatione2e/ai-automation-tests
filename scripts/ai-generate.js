import { execSync } from 'child_process'
import fs from 'fs'

const prompt = fs.readFileSync('.ai/_prompt_runtime.txt', 'utf8')

// Launch Copilot Chat with injected prompt
execSync(`code . --command github.copilot.chat.open`, { stdio: 'inherit' })
execSync(`code . --command github.copilot.chat.send --args "${prompt.replace(/"/g,'\\"')}"`, { stdio: 'inherit' })
