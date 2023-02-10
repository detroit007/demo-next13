import Link from "next/link";
const Index = () =>{
    return(
        <div>
            Hello There! 123
            <Link href={"/second"}>Go to Second Page</Link>
        </div>
    )
}

export default Index