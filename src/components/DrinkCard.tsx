import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../types";

type DrinkCardProps = {
    drink: Drink;
};
export default function DrinkCard({ drink }: DrinkCardProps) {
    const selectRecipe = useAppStore((state) => state.selectRecipe);
    return (
        <div className="border border-pink-700 shadow-xl rounded-lg overflow-hidden bg-pink-300">
            <div className="overflow-hidden">
                <img 
                    src={drink.strDrinkThumb} 
                    alt={'Imagen de ' + drink.strDrink}
                    className="hover:scale-110 transition-transform hover:rotate-2 duration-300"
                />
            </div>
            <div className="p-5 text-white">
                <h2 className="text-2xl truncate font-black text-black">
                    {drink.strDrink}
                </h2>
                <button
                    type="button"
                    className="bg-purple-400 hover:bg-purple-700 mt-5 w-full p-3 font-bold text-white text-lg rounded-lg transition duration-300"
                    onClick={() => selectRecipe(drink.idDrink)}
                >
                    Ver Receta
                </button>
            </div>
        </div>
    );
}
