import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getTodos } from '../actions/toDoActions'
import { AppState } from '../store'
import { AppActions } from '../types/actions'
import { ITodos } from '../types/Todos'
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

type Props = LinkStateProps & LinkDispatchProps;

// class Application extends React.Component<Props> {
//   componentWillMount(){
//     const { getTodos } = this.props
//     getTodos()
//   }
//   render() { 
//     console.log(this.props)
//     return ( 
//       <div>
//         Yes!
//       </div>
//      );
//   }
// }

const Application: React.SFC<Props> = (props) => {

  useEffect(() => {
    const { getTodos } = props
    getTodos()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  // @ts-ignore
  const renderTodos = props.todos[0] && props.todos[0].map((todo) => <div key={todo.id}>
      <h2>{todo.title}</h2>
      <p>{
          todo.completed ? 'Completed' : 'Incomlete'
      }</p>
    </div>
  )


  return ( 
    <div>
      {renderTodos}
    </div>
  );
}
 



interface LinkStateProps {
  todos: ITodos[];
}

interface LinkDispatchProps {
  getTodos: () => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    todos: state.allTodos
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  getTodos: bindActionCreators(getTodos, dispatch),
});
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);