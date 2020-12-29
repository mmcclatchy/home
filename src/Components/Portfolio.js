import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects, i) {
        var projectImage = 'images/portfolio/' + projects.image;
        
        return (
          <div key={projects.title} id={`portfolio-item-${i}`} className="columns portfolio-item">
            <a href={projects.url} title={projects.title}>
              <div className="item-wrap">
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        )
      })
    }

    return (
      <section id="works">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Work.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
