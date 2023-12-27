import { useState } from 'react';

const BlogPostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    article: '',
    images: [],
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imagesArray = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: imagesArray,
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">Post a Blog</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter the title of your blog"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="article" className="block text-sm font-medium text-gray-700">
            Article
          </label>
          <textarea
            id="article"
            name="article"
            value={formData.article}
            onChange={handleChange}
            rows="5"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Write your blog post here..."
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="images" className="block text-sm font-medium text-gray-700">
            Images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter the category of your blog"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-300"
          >
            Post Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostForm;
