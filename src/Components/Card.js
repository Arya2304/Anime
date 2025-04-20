export default function Card({title,image,description}){
    return(
        <>
            <div class="card">
                <div class="card-header">
                    <div class="header-title">{title}</div>
                    <div class="header-img"><img src={image} height={50} width={50}/></div>
                </div>
                <div class="card-body">
                    <p>{description}</p>
                </div>
            </div>
        </>
    );

}