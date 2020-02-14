import { connect } from 'react-redux';
import TopList from '../../components/TopList';
import { mapKeyToItems } from '../../helpers';

const mapStateToProps = state => ({
  playersData: mapKeyToItems(state.players.data, 'userId'),
});

export default connect(
  mapStateToProps,
  null)(TopList);
