import Banner from "@/Components/Banner/Banner";
import Categories from "@/Components/Categories/Categories";
import ChefSection from "@/Components/ChefSection/ChefSection";
import DeliciousRecipe from "@/Components/DeliciousRecipe/DeliciousRecipe";
import InstagramFoodie from "@/Components/FoodieLandInstagram/InstagramFoodie";
import NewsLetter from "@/Components/NewsLetter/NewsLetter";
import TastyRecipes from "@/Components/TastyRecipes/TastyRecipes";


export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <Categories></Categories>
     <TastyRecipes></TastyRecipes>
     <ChefSection></ChefSection>
     <InstagramFoodie></InstagramFoodie>
     <DeliciousRecipe></DeliciousRecipe>
     <NewsLetter></NewsLetter>
    </div>
  );
}
