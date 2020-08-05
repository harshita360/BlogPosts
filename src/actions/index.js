import _  from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostAndUsers=()=>async (dispatch,getState)=>{

  await dispatch(fetchPosts());
  //async//inner function gets called,

  const userIds=_.uniq(_.map(getState().posts,'userId')) //returns an array of all  userid's-->filter just the unique userid
  userIds.forEach(id=>dispatch(fetchUser(id)));//call the action creater fetchuser(id) and then dispatch the result .

};//iterate  over the unique list of id and for each id call the fetchuser action creater.



export const fetchPosts=()=>{
  return async (dispatch)=>{//inner function
  const response=await jsonPlaceholder.get('/posts');

  dispatch({type:'FETCH_POSTS',payload:response.data})
};
};
//here we are defining a function fetchposts that is going to return another function.

export const fetchUser=id=>async dispatch=>{
  const response=await jsonPlaceholder.get(`/users/${id}`);

  dispatch({type:'FETCH_USER',payload:response.data});
};




/*export const fetchUser=(id)=>{
  return (dispatch)=>{
    _fetchUser(id,dispatch);

  };

};

const _fetchUser=()=>_.memoize(async(id,dispatch)=>{

  const response =await jsonPlaceholder.get(`/users/${id}`);
   dispatch({type:'FETCH_USER',payload:response.data});

})*/
