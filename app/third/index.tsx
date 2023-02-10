import Link from "next/link"

const Index = () =>{
    return(
        <div>
            Hello There!
            <Link href={"/"}>Go Back to Home Page</Link>
            <br></br>
            <Link href={"/second"}>Go Back.</Link>
        </div>
    )
}

export default Index