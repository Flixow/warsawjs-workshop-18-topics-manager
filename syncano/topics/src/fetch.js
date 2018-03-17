import Syncano from 'syncano-server'

export default async (ctx) => {
  const {response, data} = Syncano(ctx)

  try {
    const topics = await data.topics.list()

    response.json(topics.reverse())
  } catch (e) {
    response.json(e, 400)
  }
}
