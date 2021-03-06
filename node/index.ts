import * as Bluebird from 'bluebird'

global.Promise = Bluebird

import { dataSources } from './dataSources'
import { resolvers } from './resolvers'

export default {
  graphql: {
    dataSources,
    resolvers,
  },
}
