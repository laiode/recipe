

const List = (loading, error,recipes,frecipe,keyword) => {
    if(loading){
        return (<p>p</p>)
        }
   
        return(
            <div class="row  py-5" style="background-color: #F2F2F2 !important;">
            <div class="col-md-10 offset-md-1">
              <h3 style="margin-bottom:30px;" class="text-center">Recipes</h3> 
              <div class="row">

              {
               keyword.length==0 ?
               recipes.length > 0 ? recipes.map((recipe)=>{
                   return(
                       <div class="col-md-4 my-4">
                        <img src={recipe.image} class="img-fluid"/>
                        <div class="descriptions pix">
                            <h6>{recipe.name}</h6>
                            <p><b>Ingredients</b>: {recipe.ingredients}</p>
                        </div>
                        </div>
                   )
               }) : 
               <p>Recipes not Available at the moment</p>  

               :frecipe.length > 0? frecipe.map((recipe)=>{
                <div class="col-md-4 my-4"> key={recipe.id}
                <img src={recipe.image} class="img-fluid"/>
                <div class="descriptions pix">
                  <h6>{recipe.name}</h6>
                  <p><b>Ingredients</b>: {recipe.ingredients}</p>
                </div>
            </div>




            }):
            
            }
  
        
        
                
              
               
                
               
              
                
                
               
               
              
              
              
             
               
            </div>
          </div> 
        </div>
    
    )

}
export default List