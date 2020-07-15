import { AddInquireMutationArgs, AddInquireResponse } from '../../../types/graphql';
import Inquire from '../../../entities/Inquire';
import { Resolvers } from '../../../types/resolvers';

const resolvers: Resolvers = {
  Mutation: {
    AddInquire: async (_, args: AddInquireMutationArgs): Promise<AddInquireResponse> => {
      try {
        console.log('add inquire :', args);

        await Inquire.create({ ...args }).save();
        return {
          ok: true,
          error: null,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        };
      }
    },
  },
};

export default resolvers;
