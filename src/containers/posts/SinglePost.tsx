import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { Spin } from 'antd';
import { RouteComponentProps } from 'react-router';

import { IPosts } from '../../types/Posts'
import { AppActions } from '../../types/actions'
import { AppState } from '../../store'
import { getSinglePost } from '../../actions/postsActions'

type Props = LinkStateProps & LinkDispatchProps & RouteComponentProps;

const SinglePost: React.SFC<Props> = (props) => {

  useEffect(() => {
    const { getSinglePost } = props
    // @ts-ignore
    const { id } = props.match.params
    
    getSinglePost(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  console.log('all props =========>',props.singlePost);

  let screenView = <Spin size='large' />

  if(props.singlePost.length > 0){
    const article = props.singlePost[0]
    screenView = <div>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </div>
  }

  return ( 
    <div>
      {screenView}
    </div>
  );
}

interface LinkStateProps {
  singlePost: IPosts[];
}

interface LinkDispatchProps {
  getSinglePost: (id: number) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    singlePost: state.allPosts
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

