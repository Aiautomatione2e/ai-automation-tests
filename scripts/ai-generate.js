import fs from 'fs'
import { execSync } from 'child_process'

// Ensure .ai folder exists
if (!fs.existsSync('.ai')) fs.mkdirSync('.ai', { recursive: true })

// Load acceptance + template
const ac = fs.readFileSync('.ai/current.txt','utf8')
let template = fs.readFileSync('.ai/autogen-prompt.txt','utf8')

// Build runtime prompt
const runtimePrompt = template.replace('{{AC}}', ac)
fs.writeFileSync('.ai/_prompt_runtime.txt', runtimePrompt)

// Launch Copilot Chat with injected prompt
execSync(`code . --command github.copilot.chat.open`, { stdio:'inherit' })
execSync(`code . --command github.copilot.chat.send --args "${runtimePrompt.replace(/"/g,'\\"')}"`, { stdio:'inherit' })
