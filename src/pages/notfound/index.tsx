import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="space-y-3 rounded border border-gray-200 bg-white/25 p-5 text-xl">
      <p className="block text-radial">Not found, please try another URL.</p>
      <Link to="/" className="mr-6 flex flex-1">
        <span className="text-blue-500">Click here to go back!</span>
      </Link>
    </div>
  );
};

export default NotFound;
