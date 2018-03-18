import Syncano from 'syncano-server'

export default (ctx) => {
  const {response, data} = Syncano(ctx)

  data.topics.create({
    trainers: [],
    ...ctx.args,
    likes: 0,
  })
  .then(topic => {
    response.json(topic)
  })
}
