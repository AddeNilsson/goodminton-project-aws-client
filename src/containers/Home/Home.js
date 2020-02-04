import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../../logo.svg';
import { getData, clearData } from '../../actions/actions';

const Home =({ getData, mock, loading, clearData }) => {
  const btnText = loading
    ? 'Loading..'
    : mock
      ? 'Clear'
      : 'Fetch';

  const bgImage = mock
    ? `url(${mock.sprites.front_default})`
    : `url(${logo})`;

  const handleClick = () => (mock ? clearData() : getData() );

  return (
    <div className="flex flex-center">
      <div className="col-xs-12 col-md-4">
        <div className='card'>
          <div className="card-image" style={{ backgroundImage: bgImage }} />
          <div className='card-content'>
            <div className="">
              <h2>Welcome</h2>
              { mock ? mock.name : 'None' } has landed
            </div>
          </div>
          <div className="card-content">
            <button className="blue" onClick={handleClick}>{ btnText }</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  mock: state.mock.data,
  loading: state.app.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData,
  clearData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
