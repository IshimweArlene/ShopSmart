import TopBar from "../components/topBar";
import SearchNav from "../components/searchBar";
import MealCard from "../components/mealCard";
import {japanese } from "../meals/japanese";

const Japanese = () => {
    return (
        <div className="min-h-screen bg-gray-900 w-full">
            <div className="relative w-full bg-white min-h-screen overflow-hidden">
              <TopBar />      
              <SearchNav />
              <div className="px-8 py-4 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  {japanese.map((meal, i) => (
                      <MealCard
                      key={i}
                      name={meal.name}
                      rating={meal.rating}
                      description={meal.description}
                      image={meal.image}
                      />
                  ))}
                </div>
              </div>
            </div>
        </div>
    );
}
 
export default Japanese;