import '../../styles/card-style/card.css';

function Card ({src, link, desc}) {

    return (
        <div className='card' >
            <a className='bod' href={link} rel='noreferrer' target='_blank'>
                <img src={src} alt="error" />
            </a>
            <div className='description'>
                <p>{desc}</p>
            </div>
        </div>
    ) 
}

export default Card