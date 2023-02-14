import * as dotenv from 'dotenv'
import {
  createDeliveryClient,
  camelCasePropertyNameResolver
} from '@kontent-ai/delivery-sdk'
import {CMP} from "../generated-output/content-types/cmp"

dotenv.config({path: '.env'})
const {projectId} = process.env;

const deliveryClient = createDeliveryClient({
  projectId,
  propertyNameResolver: camelCasePropertyNameResolver
});

(async () => {
  const campaignId = 'CMP#GB1#WGV#c633e8ba-2042-4c06-9db6-a3e5f9324105'.replace(/#/g, '%23')
  const request = deliveryClient.items<CMP>().equalsFilter('elements.wgv_cmp_id', campaignId).type('cmp').depthParameter(2)
  console.debug('request - ', request.getUrl())
  const response = await request.toPromise()
  console.log('wgvCmpId:', response.data.items[0].elements.wgvCmpId.value)
  console.log('parentCmp:', response.data.items[0].elements.parentCmp.value)
  // console.debug('items', JSON.stringify(response.data.items[0], null, 2))
})()
