import Feed from '@components/Feed';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">
                    {" "}
                    AI-Powered Prompts
                </span>
            </h1>
            <p className="desc text-center">
                Promptify is a dynamic and responsive website crafted with the
                cutting-edge technology of Next.js. Promptify is designed to
                provide a seamless and engaging user experience, leveraging the
                power of server-side rendering and efficient client-side
                navigation.
            </p>

        <Feed />
        </section>
    );
};

export default Home;
