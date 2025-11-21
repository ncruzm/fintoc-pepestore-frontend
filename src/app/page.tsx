
import AppNavbar from "./(components)/Navbar";
import ProductsCatalog from "./(components)/ProductsCatalog";


export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center">
       <ProductsCatalog />
    </div>
  );
}
