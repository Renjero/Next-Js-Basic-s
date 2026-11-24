
const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-300">

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Sign up to get started
        </p>

        <form>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-800">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border-2 border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-800">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-800">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full border-2 border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-800">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full border-2 border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold p-3 rounded-lg hover:bg-blue-800 transition duration-200"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6 text-gray-700">
          Already have an account?
          <a
            href="/login"
            className="text-blue-700 font-semibold ml-1 hover:underline"
          >
            Login
          </a>
        </p>

      </div>
    </div>
  );
};

export default Signup;
