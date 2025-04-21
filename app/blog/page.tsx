import { blogPosts } from "@/constants/index";

const blog = () => {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <h1 className="lg:text-8xl text-3xl font-extrabold text-emerald-700 from-neutral-500">
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-2">{post.description}</p>
                <p className="text-sm text-gray-500 mt-4">
                  By {post.author} on {post.date}
                </p>
                <a
                  href={post.link}
                  className="text-emerald-700 font-semibold mt-4 inline-block"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default blog;
