import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJs, faShopify } from '@fortawesome/free-brands-svg-icons'; 
import './skills.css'; 
import expressIcon from './ex.png';
import typescriptIcon from './typescript.png';
import mongodbIcon from './mongodb.png';
import mysqIcon from './mysql.png';
import javaIcon from './java.png';
import cIcon from './c.png';
import pythonIcon from './python.png';
import phpIcon from './php.png';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <section ref={ref} className={`p-5 skill ${inView ? 'animate' : ''}`} id='skills'>
        <div className="container-fluid">
          {/* Title */}
          <div className="row text-white text-center">
            <div className="col m-4">
              <h1 className="display-4">Skills</h1>
              <div className="underline mb-4"></div>
            </div>
          </div>
          
          <div className="row my-5">
            <div className="col-md-4 text-center">
              <FontAwesomeIcon icon={faReact} style={{color: "#63E6BE", fontSize: '80px'}} />
              <h1 className="text-white mb-3">React.JS</h1>
            </div>
            <div className="col-md-4 text-center">
              <FontAwesomeIcon icon={faNodeJs} style={{color: "#00422e", fontSize: '80px'}} />
              <h1 className="text-white mb-3">Node.JS</h1>
            </div>
            <div className="col-md-4 text-center">
              <img src={expressIcon} alt="Express.JS"/>
              <h1 className="text-white mb-3">Express.JS</h1>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-4 text-center">
              <FontAwesomeIcon icon={faJs} style={{color: "#E8D44D", fontSize: '80px'}} />
              <h1 className="text-white mb-3">Javascript</h1>
            </div>
            <div className="col-md-4 text-center">
              <img src={typescriptIcon} alt="Typescript"/>
              <h1 className="text-white mb-3">Typescript</h1>
            </div>
            <div className="col-md-4 text-center">
              <img src={mongodbIcon} alt="Mongodb"/>
              <h1 className="text-white mb-3">Mongodb</h1>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-4 text-center">
              <img src={mysqIcon} alt="MySQL"/>  
              <h1 className="text-white mb-3">MySQL</h1>
            </div>
            <div className="col-md-4 text-center">
              <img src={javaIcon} alt="Java"/> 
              <h1 className="text-white mb-3">Java</h1>
            </div>
            <div className="col-md-4 text-center">
              <img src={cIcon} alt="C++"/> 
              <h1 className="text-white mb-3">C++</h1>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-4 text-center">
              <img src={pythonIcon} alt="Python"/> 
              <h1 className="text-white mb-3">Python</h1>
            </div>
            <div className="col-md-4 text-center">
              <img src={phpIcon} alt="PHP"/> 
              <h1 className="text-white mb-3">PHP</h1>
            </div>
            <div className="col-md-4 text-center">
              <FontAwesomeIcon icon={faShopify} style={{color: "#FFFFFF", fontSize: '80px'}} />  
              <h1 className="text-white mb-3">Shopify</h1>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Skills;
