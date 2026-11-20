
const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-2 px-8 flex items-center justify-between">
      <h2>Next blog</h2>

      <ul className="flex items-center gap-6">
        <li>
          <a href="/blogs">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">signup</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
