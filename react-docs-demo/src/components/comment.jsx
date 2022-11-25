function Avatar(props) {
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name}
    />
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user}></Avatar>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
{/*      <div className="UserInfo">
        <Avatar user={props.author}></Avatar>
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>*/}
      <UserInfo user={props.author}></UserInfo>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}