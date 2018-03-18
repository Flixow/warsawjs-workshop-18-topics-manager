import Syncano from 'syncano-server'

export default async (ctx) => {
  const {data, users, response} = Syncano(ctx)
  if(!ctx.meta.user) return response.json({error: "Set token to the request"}, 400);

  const {id} = ctx.args
  const topicToUpdate = await data.topics.find(id)
  console.log(topicToUpdate.trainers)
  if ((topicToUpdate.trainers || []).includes(ctx.meta.user.id)) {
    response.json({error: "You are reported as a trainer aleady"}, 400)
    return
  }

  data.topics.update(id, {
    trainers: [...(topicToUpdate.trainers || []), ctx.meta.user.id]
  })
  .then(async topic => {
    topic.trainers = await Promise.all((topic.trainers || []).map(async trainerId => await users.find(trainerId)))
    response.json(topic);
  })
  .catch(e => console.log(e))
}
