const WebLink = (props) => {
    const {title, link} = props;
  return (
    <div>
        <h3>{title}</h3>
        <a href={link}>Link</a>
    </div>
  )
}

export default WebLink