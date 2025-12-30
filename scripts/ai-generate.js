import fs from 'fs'
import { execSync } from 'child_process'

const ac = fs.readFileSync('.ai/current.txt','utf8')
let prompt = fs.readFileSync('.ai/autogen-prompt.txt','utf8')
prompt = prompt.replace('{{AC}}', ac)

fs.writeFileSync('.ai/_prompt_runtime.txt', prompt)

// Ask Copilot Agent to generate code
execSync(`code . --command github.copilot.chat.generate --args .ai/_prompt_runtime.txt`, { stdio:'inherit' })
