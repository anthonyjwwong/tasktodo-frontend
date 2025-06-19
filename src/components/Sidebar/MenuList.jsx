import MenuItem from "./MenuItem.jsx";
import { useApp } from "../../context/AppContext.jsx";
const MenuList = () => {
  const { categories, selectedCategory, setCategory } = useApp();

  return (
    <ul className="py-9 flex flex-wrap md:flex-col">
      {categories.map((category) => {
        return (
          <MenuItem
            key={category.id}
            category={category}
            isActive={selectedCategory === category.id}
            onClick={() => setCategory(category.id)}
          />
        );
      })}
    </ul>
  );
};

export default MenuList;
