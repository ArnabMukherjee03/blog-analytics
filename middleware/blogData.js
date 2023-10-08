const axios = require('axios');

exports.blogData = async (req, res, next) => {
  try {
    const response = await axios.get(
      process.env.API,
      {
        headers: {
          "x-hasura-admin-secret":
            process.env.API_SECRET,
        },
      }
    );
    req.blogData = await response.data;
    next();
  } catch (error) {
     res.status(500).json({error: error.message});
  }
};
