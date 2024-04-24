const Person=({age,name,hobbies})=>{
    return (
        <div>
            <ul>
                <li>Name: {name.slice(0,6)}</li>
                <li>Age: {age}</li>
                <ul>Hobbies:{hobbies.map(h => <li>{h}</li>)}</ul>
            </ul>
            <h3>{age>=18 ? "Can vote": "Cannot vote"}</h3>
            <hr/>
        </div>
    )
}
