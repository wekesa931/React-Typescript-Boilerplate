import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { RouteComponentProps } from 'react-router';

import { IPosts } from '../../types/Posts'
import { AppActions } from '../../types/actions'
import { AppState } from '../../store'
import { getSinglePost } from '../../actions/postsActions'
import SinglePostItem from '../../components/posts/singlePost'

type Props = LinkStateProps & LinkDispatchProps & RouteComponentProps;

const SinglePost: React.SFC<Props> = (props) => {

  useEffect(() => {
    const { getSinglePost } = props
    // @ts-ignore
    const { id } = props.match.params
    
    getSinglePost(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const { singlePost } = props

  return (
    <SinglePostItem singlePost={singlePost} />
  );
}

interface LinkStateProps {
  singlePost: IPosts;
}

interface LinkDispatchProps {
  getSinglePost: (id: number) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    singlePost: state.singlePost
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  getSinglePost: bindActionCreators(getSinglePost, dispatch),
});
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost);

