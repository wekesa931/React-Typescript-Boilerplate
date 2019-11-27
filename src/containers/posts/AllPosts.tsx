import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';
import { Spin } from 'antd';


import { IPosts } from '../../types/Posts'
import { AppActions } from '../../types/actions'
import { AppState } from '../../store'
import { getPosts } from '../../actions/postsActions'

import PostsContainer from '../../components/posts/AllPosts'

type Props = LinkStateProps & LinkDispatchProps;

const AllPosts: React.SFC<Props> = (props) => {

  useEffect(() => {
    const { getPosts } = props
    getPosts()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  let screenView = <div style={{width: '100%', padding: '5% 50%'}}>
      <Spin size='large' />
    </div>

  if(props.allPosts.length > 0){
    screenView = <PostsContainer 
    posts={props.allPosts}
    isLoading={false}
  />
  }

  return ( 
    <div>
      {screenView}
    </div>
  );
}

interface LinkStateProps {
    allPosts: IPosts[];
}

interface LinkDispatchProps {
  getPosts: () => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    allPosts: state.allPosts
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  getPosts: bindActionCreators(getPosts, dispatch),
});
 
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts));

