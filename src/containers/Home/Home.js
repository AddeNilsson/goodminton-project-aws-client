import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MaterialIcon from 'material-icons-react';

import { Card, CardContent, CardImage } from '../../components/Card';
import Grid from '../../components/Grid';
import img from '../../assets/img/img.jpg';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';


const Home =({ getData, mock, loading, clearData }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Grid row classes="flex-center">
      <Grid xs={12} sm={10} md={8} lg={6} xl={5}>
        <Card>
          <CardImage imgUrl={img} />
          <CardContent>
            <h2>Welcome</h2>
            <Button isLoading={isLoading} color="blue">Foo</Button>
            <Button handleClick={() => setIsLoading(!isLoading)} color="blue">Toggle</Button>
            <IconButton isLoading={isLoading}>
              <MaterialIcon icon="dashboard" />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  mock: state.mock.data,
  loading: state.app.isLoading,
});

// const mapDispatchToProps = dispatch => bindActionCreators({
//   getData,
//   clearData,
// }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
