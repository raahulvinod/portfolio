import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto glass" id="contact">
      <div className="mx-auto max-w-[600px] text-center p-6">
        <h2 className="text-gray-500 text-3xl md:text-5xl mb-4 font-bold">
          Let's connect
        </h2>
        <p className="text-gray-500 text-xl">
          and start working on amazing things
        </p>
      </div>

      <div className="flex justify-center">
        <div className="my-auto text-purple-900">
          <a href="https://www.linkedin.com/in/raahulvinod/">
            <AiFillLinkedin className="w-[60px] h-auto mb-4" />
          </a>
          <a href="https://github.com/raahulvinod">
            <AiFillGithub className="w-[60px] h-auto mb-4" />
          </a>
          <a href="https://www.instagram.com/raahulvinod/">
            <AiFillInstagram className="w-[60px] h-auto" />
          </a>
        </div>

        <div className="p-6 max-w-6xl">
          <h2 className="mb-4 text-2xl font-bold text-gray-400">
            Ready to Get Started?
          </h2>
          <form action="https://getform.io/f/zbxdyyvb" method="POST">
            <div className="space-y-4 mb-6">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full border-gray-400 py-2 px-4 border rounded-md"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                className="w-full border-gray-400 py-2 px-4 border rounded-md"
              />
              <textarea
                type="textarea"
                name="message"
                rows="5"
                placeholder="Message"
                className="w-full border-gray-400 py-2 px-4 border rounded-md"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-purple-700 text-gray-300 max-w-md px-6 py-3 rounded-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
