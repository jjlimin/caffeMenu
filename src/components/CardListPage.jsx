import { Link } from "react-router-dom";
import Card from "../components/Card"; // make sure Card is correctly imported

const CardListPage = ({ cards }) => {
  return (
    <div className="min-h-screen bg-pink-200 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Mamuchi Caffe Menu</h1>

      {/* Center the grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 max-w-6xl w-full">
          {cards.map(({ image, title }, index) => (
            <Card key={index} image={image} title={title} />
          ))}
        </div>
      </div>

      {/* Link to manage page */}
      <div className="mt-8 text-center">
        <Link to="/manage" className="text-blue-600 underline">
          Go to Manage Page →
        </Link>
      </div>
    </div>
  );
};

export default CardListPage;
