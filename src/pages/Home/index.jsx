import '../../styles/home-style/home.css';
import htmlLogo from '../../images/html5.png';
import cssLogo from '../../images/css.png';
import jsLogo from '../../images/JavaScript-logo.png';
import reactLogo from '../../images/react-logo-1000-transparent.png';
import webflowLogo from '../../images/webflow_logo_icon_169218.png';
import Card from '../../components/card/card';
import data from '../../work-data.json';
function App() {

  return (
    <div className="App">
        <div className="presentation" id='pres'>
            <h1>PRESENTATION</h1>
            <div className='line'></div>
            <p>Je suis un passionné du développement web avec 1 ans d'expérience dans ce domaine. 
                En tant que développeur Web Junior, je m'engage à concevoir et réaliser des sites web, de la création du cahier des charges 
                à la mise en ligne finale. Mon expertise me permet de transformer les idées en sites web interactifs et esthétiques, tout en 
                respectant les exigences spécifiques de chaque projet. Je suis constamment à l'affût des dernières tendances et technologies du web 
                pour offrir des solutions innovantes et optimisées. Mon objectif ultime est de créer des expériences en ligne exceptionnelles pour les utilisateurs, en alliant 
                créativité et expertise technique.
            </p>
        </div>
        <div className='realisation' id='real'>
            <h1>MES TRAVAUX</h1>
            <div className='lineB'></div>
            <div className='work-container'>
            {data.map((e, i) => {
                return <Card key={i} src={e.src} link={e.link} desc={e.description}/>;
            })}
            </div>
        </div>
        <div className='skills' id='skil'>
            <h1>Skills</h1>
            <div className='line'></div>
            <div className='skillTree'>
                <div className='html'>
                    <div className='colorRed'>
                        <p>80%</p>
                        <div className='stack'>
                            <img src={htmlLogo} alt="error" />
                            HTML
                        </div>
                    </div>
                </div>
                <div className='css'>
                    <div className='colorBlue'>
                        <p>80%</p>
                        <div className='stack'>
                            <img src={cssLogo} alt="error" />
                            CSS
                        </div>
                    </div>
                </div>
                <div className='js'>
                    <div className='colorYellow'>
                        <p>70%</p>
                        <div className='stack'>
                            <img src={jsLogo} alt="error" />
                            JS
                        </div>
                    </div>
                </div>
                <div className='react'>
                    <div className='colorReact'>
                        <p>40%</p>
                        <div className='stack'>
                            <img src={reactLogo} alt="error" />
                            REACT
                        </div>
                    </div>
                </div>
                <div className='webflow'>
                    <div className='colorLightBlue'>
                        <p>60%</p>
                        <div className='stack'>
                            <img src={webflowLogo} alt="error" />
                            WEB<br />
                            FLOW
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default App;