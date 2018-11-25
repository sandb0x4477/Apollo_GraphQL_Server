import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import _ from 'lodash';


export default {
  // ===========================================================================
  // ? QUERIES
  // ===========================================================================
  Query: {
    users: async (parent, args, { models }) => {
      return await models.User.findAll();
    },
    user: async (parent, { id }, { models }) => {
      return await models.User.findByPk(id);
    },
  },

  // =============================================================================
  // ? MUTATIONS
  // =============================================================================
  Mutation: {
    register: async (parent, args, { models }) => {
      const user = args;
      user.password = await bcrypt.hash(user.password, 12);

      return await models.User.create(user);
    },

    login: async (parent, { email, password }, { models, SECRET }) => {
      const user = await models.User.findOne({ where: {email} });

      if (!user) {
        throw new Error('No user with that email');
      }

      const valid = await bcrypt.compare(password, user.password);

      if (!valid) {
        throw new Error('Incorrect password');
      }

      const token = jwt.sign({
        user: _.pick(user, ['id', 'username']),
      }, SECRET, { expiresIn: '1h' });

      return { token: token };
    }

  }
}
