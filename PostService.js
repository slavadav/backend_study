class PostService {
  async create(post) {
    const createPost = await Post.create(post);
    
    return createPost;
  }

  async getAll() {
    const posts = await Post.find();

    return posts;
  }

  async get(id) {
    if (!id) {
      throw new Error('ID undefined');
    }
    const post = await Post.findById(id);

    return post;
  }

  async update(post) {
    if (!post._id) {
      throw new Error('ID undefined');
      // res.status(400).json({ message: 'ID undefined' });
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });

    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error('ID undefined');
    }
    const post = await Post.findByIdAndDelete(id);

    return post;
  }
}

module.exports = new PostService();