const Dog = (props)=>{
    return(
        <div className="card" style="width: 18rem;">
            <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.dog}</h5>
                    <div className="card-text">
                        <ul>
                            <li>{props.imdb}</li>
                        </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Pradeti</a>
                </div>
        </div>
    )
}
export default Dog