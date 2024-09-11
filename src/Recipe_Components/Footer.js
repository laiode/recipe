const Footer = () => {
    return (
        <>
        <div class="row footer" id="footer"> 
    <div class="col-md-4">
     <h5 class="section-title ps-3">Restaurants around me</h5>
     <ul style="list-style-type: none;">
      <li><a href=""><i class="fa fa-arrow-right"></i> Mama Put</a></li>
      <li><a href=""><i class="fa fa-arrow-right"></i> Street Delight</a></li>
      <li><a href=""><i class="fa fa-arrow-right"></i> ABC Restaurant</a></li>
      <hr/>
      <li><a href=""><i class="fa fa-arrow-right"></i> Home Away from Home</a></li>
      <li><a href=""><i class="fa fa-arrow-right"></i> Mama's Kitchen</a></li>
      <li><a href=""><i class="fa fa-arrow-right"></i> Street Tables</a></li>
      
      
     </ul>
    </div> 
    <div class="col-md-2">
     
    </div> 
    <div class="col-md-6">
      <h5 class="section-title">Contact Us</h5>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Fullname</label>
          <input type="text" class="form-control noround" id="exampleInputEmail1" aria-describedby="emailHelp"/>
         
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Message</label>
         <textarea class="form-control noround"></textarea>
        </div>
        
        <button type="submit" class="btn btn-success col-12 noround">Submit</button>
      </form>
    </div> 
</div>
        
        </>
    )

}
export default Footer