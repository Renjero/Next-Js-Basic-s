// Server side Render 



// making props in next js 
type CardProps   = {
    title : String;
    description : String;

}



export default function Card ({title, description}:CardProps){
    return(
        <>
        <div className="Card p-4 border-amber-500 shadow-2xl border-2">

        <h1 className="text-2xl bg-amber-300 text-gray-900 p-4 my-2">{title = "Robin"}</h1>
        <p className="text-2xl bg-green-300 text-gray-900 p-4 my-2">{description}</p>
        
        </div>
        </>
    )
} 