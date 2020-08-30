import express from 'express';
import { ExpressAdapter } from 'ask-sdk-express-adapter';
import * as Alexa from 'ask-sdk';

const app = express();
const skillBuilder = Alexa.SkillBuilders.custom();
const skill = skillBuilder.create();
const adapter = new ExpressAdapter(skill, true, true);

const PORT = process.env.PORT || 3000;

app.post('/', adapter.getRequestHandlers());
app.listen(PORT, () => {
  console.log(`⚡️ Server is running at http://localhost:${PORT}`)
});
