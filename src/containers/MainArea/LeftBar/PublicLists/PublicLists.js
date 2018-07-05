import React, { Component } from 'react';

// classes
import classes from './PublicLists.css';

// image
import Plus from '../../../../assets/images/listsImages/Plus.svg';

// component
// import PublicListItem from '../../../../components/ListItem/PublicListItem/PublicListItem';
import ListItem from '../../../../components/ListItem/ListItem';

class PublicLists extends Component {
  render() {
    return (
      <div className={classes.PublicLists}>
        <h1 style={{marginLeft: '20px'}}>PUBLIC LISTS</h1>
        <img style={{height: '14px', cursor: 'pointer'}} src={Plus} alt="Plus"/>
        <ListItem listItemType='public' isNew type="active" >New List One</ListItem>
        <ListItem listItemType='public' isNew type="simple" >New List One</ListItem>
        <ListItem listItemType='public' type="active" >New List One</ListItem>
        {/*<PublicListItem isNew type="active">New List One</PublicListItem>*/}
        {/*<PublicListItem isNew type="simple">New List Two</PublicListItem>*/}
        {/*<PublicListItem isNew type="simple">New List Three</PublicListItem>*/}
        {/*<PublicListItem type="simple">University</PublicListItem>*/}
        {/*<PublicListItem type="simple">Work Project</PublicListItem>*/}
        {/*<PublicListItem type="active">Party</PublicListItem>*/}
      </div>
    );
  }
}

export default PublicLists;