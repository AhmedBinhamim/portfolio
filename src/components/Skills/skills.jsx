import React from 'react';
import './skills.css'; // Assuming the CSS is saved in Skills.css

const Skills = () => {
  return (
    <section className="p-5 skill">
      <div className="container-fluid">
        {/* Title */}
        <div className="row text-white text-center">
          <div className="col m-4">
            <h1 className="display-4">Skills</h1>
            <div className="underline mb-4"></div>
          </div>
        </div>
        {/* End of Title */}
        <div className="row my-5">

          <div className="col-md-4 text-center">
            <i className="fas fa-cogs fa-5x text-danger mb-4"></i>
            <h1 className="text-white mb-3">React.JS</h1>
          </div>
          <div className="col-md-4 text-center">
            <i className="fas fa-crop fa-5x text-danger mb-4"></i>
            <h1 className="text-white mb-3">Node.JS</h1>
          </div>
          <div className="col-md-4 text-center">
            <i className="fas fa-database fa-5x text-danger mb-4"></i>
            <h1 className="text-white mb-3">Express.JS</h1>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Skills;
