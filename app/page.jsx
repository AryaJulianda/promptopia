import Feed from "@/components/Feed";

const Home = (props) => {
  return (
    <section className="flex-col w-full flex-center">
      <h1 className="text-center head_text">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="text-center orange_gradient">AI-Powered Prompt</span>
      </h1>
      <p className="text-center desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas
        aperiam nam eligendi iusto. Sequi inventore veniam sunt non
        exercitationem!
      </p>

      <Feed />
    </section>
  );
};

export default Home;
