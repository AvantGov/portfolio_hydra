// depends 
import {Link} from 'react-router-dom';

// css 
import "../../CSS/Library/PortfolioCard.css";

const PortfolioCard = (props) => {

    const pf = props.props;
    var count = 0;

    return(
        <Link className='PortfolioCard_link' to={`/${pf.title}`}>
        <div className="PortfolioCard" id="PortfolioCard">
            <div className="PC__introContainer">
                <h1 className="introContainer__title">{pf.title} &#8702;</h1>
                <p className="introContainer__desc">{pf.desc}</p>
            </div>
            {/* <div className="PC__cardContainer">
                {pf.list.map((item) => {
                    if (count < 2) {
                        count += 1
                        return(
                            <div className="PC__linkCard" key={item.key}>
                                <div className="linkCard__image"><img id={item.key} src={item.cover} className='linkCard__photo'/></div>
                                <p className="linkCard__title">{item.title}</p>
                                <p className="linkCard__year">{item.year}</p>
                            </div>
                        )
                    }
                })}
            </div> */}
            {/* <Link className='PC__PageLink' to={`/${pf.title}`}>
                <div className='PageLink__block'>See more</div>
            </Link> */}
        </div>
        </Link>
    )
}

export default PortfolioCard;