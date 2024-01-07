import user from './video';

export default async(fastify) => {
    fastify.register(user, { prefix: "/video" });
  // fastify.register(user, { prefix: "/api/user" });

};
