import Syncano from 'syncano-server'

export default async (ctx) => {
  const {users, response, socket} = Syncano(ctx)

  if(!ctx.meta.user) return response.json({error: "Set token to the request"}, 400);

  users.find(ctx.meta.user.id)
    .then(user => response.json(user))
    .catch(e => console.log(e))

}
