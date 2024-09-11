import { useEffect } from "react"
import Banner from "../Recipe_Components/Banner"
import Copy from "../Recipe_Components/Copy"
import Footer from "../Recipe_Components/Footer"
import List from "../Recipe_Components/List"
import Nav from "../Recipe_Components/Nav"




const RecipeApp = () => {

    const [loading, setLoading]= useState(true);
    const [error, setError] = useState (false);
    const [recipes, setRecipes] = useState ([]);
    const [frecipe, setFRecipe] = useState ([]);
    const [keyword, setKeyword] = useState("");
 

    useEffect(()=>{
        makeApiCall()
    },[])

    const handleFilter = ()=> {

        const filtered_recipes= recipes.filter((recipe)=>{
            return recipe.name.toLowerCase().includes(keyword.toLowerCase())
        })

        setFRecipe(filtered_recipes)
    }

    //make the call and get the data for us
    function makeApiCall(){
        axios.get("https://dummyjson.com/recipes")
        .then(function(resp){
            console.log(resp.data.recipes)
            setLoading(false)
            setRecipes(resp.data.recipes)
        })
        .catch(function(err){
            console.log(err)
            setLoading(false)
            setError(true)
        })

    }
    
    return(
        <div className="container-fluid">
            <Nav/>
            <Banner setKeyword={setKeyword} keyword={keyword} handleFilter={handleFilter}/>
            <List loading={loading} error={error} recipes={recipes} frecipes={frecipe} keyword={setKeyword}/>
            <Footer/>
            <Copy/>

        </div>
       
    )
}
export default RecipeApp 