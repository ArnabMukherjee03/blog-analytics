const lodash = require("lodash");

exports.blogStats = async (req, res) => {
  try {
    const data = await req.blogData.blogs;

    const totalBlogs = data.length;
    const longestTitleBlog = lodash.maxBy(data, (blog) => blog.title.length);

    const privacyBlogs = lodash.filter(data, (blog) =>
      lodash.includes(blog.title.toLowerCase(), "privacy")
    ).length;

    const uniqueBlogsByTitle = lodash.uniqBy(data, "title");

    const response = {
      totalBlogs,
      longestTitle: longestTitleBlog.title,
      privacyBlogs: privacyBlogs,
      uniqueBlogsByTitle: uniqueBlogsByTitle,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.blogSearch = async (req, res) => {
  try {
    const data = await req.blogData.blogs;


    const searchTerm = await req.query.query;

    if (!searchTerm) {
      return res.status(200).json(data);
    } 


   const searchResults = lodash.filter(data, (blog) =>
      lodash.includes(blog.title.toLowerCase(), searchTerm && searchTerm.toLowerCase())
    );

   if(searchResults.length === 0){
     return res.status(400).json({error: "No Result Found"});
   }
  
   res.status(200).json(searchResults);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
