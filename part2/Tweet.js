//component with 4 Props
//Style using a CSS class
const Tweet=({name,username,date,message})=>
    <div className="tweet">
        <span>{name}</span>
        <span className="username">{username}</span>
        <span className="date">{date}</span>
        <p>{message}</p>
    </div>
