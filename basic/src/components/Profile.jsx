export default function Profile({ image, name, title, isNew }) {
  return (
    <div className='profile'>
      <img className='photo' src={image} alt='avatar'/>
      {isNew && <span className='new'>NEW</span>}
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}