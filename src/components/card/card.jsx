import '../../styles/card-style/card.css';

function Card ({src, link}) {

    return (
        <div className='card'>
            <a className='bod' href={link} target='_blank'>
                <img src={src} alt="error" />
            </a>
            <div className='description'>
                <p>blablablasdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf</p>
            </div>
        </div>
    ) 
}

export default Card