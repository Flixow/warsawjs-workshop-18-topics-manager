import Syncano from 'syncano-server'

export default async (ctx) => {
  const {data, response} = Syncano(ctx)

  const {id} = ctx.args
  const topicToUpdate = await data.topics.find(id)

  data.topics.update(id, {
    likes: parseInt(topicToUpdate.likes) + 1
  })
  .then(topic => {
    response.json(topic);
  })
  .catch(e => console.log(e))
}
