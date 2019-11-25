import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

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
  
  return ( 
    <div>
      <PostsContainer 
        posts={props.allPosts}
      />
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
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts);