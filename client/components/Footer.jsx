import Link from "next/link";
    

    function Footer () {
        return (
            <div className="footer mt-auto py-3">
            <footer className="text-center text-lg-start border-radius-lg bg-white text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between  border-bottom">
    
   
   
    
  </section>
  

  
  <section className="">
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
       
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>Olimpismo
          </h6>
          
        </div>
       

        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className=" fw-bold mb-4">
            
          </h6>
          <p>
            <Link href="/" className="text-reset">Pagina Principal</Link>
          </p>
          <p>
            <Link href="/blog" className="text-reset">Blog</Link>
          </p>
          <p>
            <Link href="/libros" className="text-reset">Libros</Link>
          </p>
          
        </div>
        

        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
        
          </h6>
          <p>
            <Link href="/contacto" className="text-reset">Contacto</Link>
          </p>
          <p>
            <Link href="/about" className="text-reset">Sobre mí</Link>
          </p>
         
        </div>
        

        
       </div>
      
    </div>
  </section>
  

 
 
  
 </footer>
 </div>
 )
    }
    
    export default Footer ;
