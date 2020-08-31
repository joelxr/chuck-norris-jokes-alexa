import express from 'express'
import { ExpressAdapter } from 'ask-sdk-express-adapter'
import * as Alexa from 'ask-sdk'
import { LaunchRequestHandler } from './handlers/launch'

const PORT = process.env.PORT || 3000
const SKILL_ID = 'amzn1.ask.skill.e0fa6fe3-8d9c-4bef-bbbc-316050ec19d0'

const app = express()
const skillBuilder = Alexa.SkillBuilders.custom()
const skill = skillBuilder
  .withSkillId(SKILL_ID)
  .addRequestHandlers(LaunchRequestHandler)
  .create()

const adapter = new ExpressAdapter(skill, true, true)

app.post('/v1/voice', adapter.getRequestHandlers())
app.listen(PORT, () => {
  console.log(`⚡️ Server is running at http://localhost:${PORT}`)
})
