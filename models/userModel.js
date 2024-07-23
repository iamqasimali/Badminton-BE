const { models } = require("./index");

module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });

      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  updateUser: async ({ userId, ...body }) => {
    try {
      const user = await models.users.update(
        { ...body },
        {
          where: {
            userId: userId,
          },
        }
      );
      return {
        response: user,
      };
    } catch (error) {
      console.log("Model Error: ", error);
      return {
        error: error,
      };
    }
  },

  resetPassword: async ({ email, ...body }) => {
    try {
      const user = await models.users.update(
        { ...body },
        {
          where: {
            email: email,
          },
        }
      );
      return {
        response: user,
      };
    } catch (error) {
      console.log("Model Error: ", error);
      return {
        error: error,
      };
    }
  },

  findUser: async (userId) => {
    try {
      const user = await models.users.findOne({ where: { userId: userId[0] } });

      return {
        response: user,
      };
    } catch (error) {
      console.log("Model Error:", error);
      return {
        error: error,
      };
    }
  },

  findByEmail: async (email) => {
    try {
      const user = await models.users.findOne({ where: { email: email } });
      return {
        response: user,
      };
    } catch (error) {
      console.log("Model Error:", error);
      return {
        error: error,
      };
    }
  },

  deleteUser: async (userId) => {
    try {
      const user = await models.users.destroy({ where: { userId: userId } });

      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getAllUsers: async () => {
    try {
      const users = await models.users.findAll({
        // attributes: ["id", "userName", "email", "password"],
        attributes: {
          exclude: ["password"],
        },
        // paranoid: false
      });
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
