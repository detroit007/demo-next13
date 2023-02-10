import Link from "next/link";
const Index = () =>{
    return(
        <div>
            Hello There!
            <Link href={"/second"}>Go to Second Page</Link>
        </div>
    )
}

export default Index