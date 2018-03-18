import Syncano from 'syncano-server'

export default async (ctx) => {
  const {response, data, users} = Syncano(ctx)

  try {
    const topics = await data.topics.list()
    const topicsWithtrainers = await Promise.all(topics.map(async topic => {
      topic.trainers = await Promise.all((topic.trainers || []).map(async trainerId => await users.find(trainerId)))

      return topic
    }))

    response.json(topicsWithtrainers.reverse())
  } catch (e) {
    console.log(e)
    response.json(e, 400)
  }
}
