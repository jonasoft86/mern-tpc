import { procedure, router } from "../utils/trpc";

export const appRouter = router({
  getUsers: procedure.query(async () => {
    return [
      {
        id: 1,
        name: "user 1"
      },
      {
        id: 2,
        name: "user 2"
      }
    ];
  }),
});



// Export the type of the router for the client
export type AppRouter = typeof appRouter;
