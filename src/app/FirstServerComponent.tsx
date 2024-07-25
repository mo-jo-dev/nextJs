import ClientButton from "./ClientButton";
import Link from "next/link";

const getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');   
    const content = await res.json();
    console.log(content);
    return content;
}

interface Product {
    id: string;
    title: string;
    price: string;
    description: string;
}

export default async function FirstServerComponent() {
    const products = await getProducts();
    return (
        <>
            {/* <h1>Welcome to NextJS... I am a server component</h1>
            <Link href="/blog/5">
                Click to go to blog
            </Link>
            <ClientButton/> */}
            {products.map((product: Product) => <div key = {product.id}>{product.title}</div>)}
        </>
    )
}