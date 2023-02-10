import Link from "next/link";
const Index = () =>{
    return(
        <div>
            Hello There!
            <Link href={"/second"}>Go Back to Home Page.</Link>
            <br></br>
            <Link href={"/"}>Go to Third Page</Link>
        </div>
    )
}

export default Index