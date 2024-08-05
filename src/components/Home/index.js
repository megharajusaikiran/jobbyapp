import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  findjobsclicked = () => {
    const {history} = this.props
    history.replace('/jobs')
  }

  render() {
    return (
      <div>
        <Header />
        <div className="HomeMaindiv">
          <h1 className="heading">
            Find The Job That <br /> Fits Your Life
          </h1>
          <p className="para">
            Millions of people are searching for jobs,salary <br />{' '}
            information,company reviews.Find the jobs that fits your <br />{' '}
            abilities and potential
          </p>
          <button
            onClick={this.findjobsclicked}
            className="buttonstyle"
            type="button"
          >
            Find Jobs
          </button>
        </div>
      </div>
    )
  }
}
export default Home