import * as dotenv from 'dotenv'
import {generateModelsAsync} from '@kontent-ai/model-generator'

dotenv.config({path: '.env'})
const {projectId, apiKey} = process.env;

(async () => {
  await generateModelsAsync({
    addTimestamp: true,
    apiKey,
    elementResolver: 'camelCase',
    formatOptions: {
      singleQuote: false
    },
    isEnterpriseSubscription: false,
    outputDir: 'generated-output',
    projectId,
    sdkType: 'delivery'
  })
  // …
})()
