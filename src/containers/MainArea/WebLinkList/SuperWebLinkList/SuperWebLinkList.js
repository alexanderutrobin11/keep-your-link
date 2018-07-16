import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

// classes
import classes from './SuperWebLinkList.css';

// containers
import WebLinkBlock from './WebLinkBlock/WebLinkBlock';
import WebLinkBlockTrash from "./WebLinkBlockTrash/WebLinkBlockTrash";

// images
import TestImage1 from '../../../../assets/testImages/testImage.jpeg';
import Favicon1 from '../../../../assets/testImages/faviconMedium.ico';

import TestImage2 from '../../../../assets/testImages/littleGirl.jpeg';
import Favicon2 from '../../../../assets/testImages/apple-touch-icon-180x180.png';

import TestImage3 from '../../../../assets/testImages/tj_image.jpg';
import Favicon3 from '../../../../assets/testImages/favicon.ico';

const images = [TestImage1, TestImage2, TestImage3];
const favicons = [Favicon1, Favicon2, Favicon3];

const SortableItem = SortableElement((item) => {
  if (item.value.type === 'simple') {
    return <WebLinkBlock
      title={item.value.title}
      domain={item.value.domain}
      description={item.value.description}
      image={item.value.image}
      favicon={item.value.favicon}
      buttonSelected={item.buttonSelected}
      buttonUnselected={item.buttonUnselected}
      isDragging={item.isDragging}
      // isDragged={item.isDragged}
    />;
  }
  else if (item.value.type === 'trash') {
      return <WebLinkBlockTrash
      title={item.value.title}
      domain={item.value.domain}
      image={item.value.image}
      // favicon={item.value.favicon}
      listName={item.value.listName}
      listType='private'
      daysQuantity={item.value.daysQuantity}

    />;
  }
});

const SortableList = SortableContainer(({items, buttonSelected, buttonUnselected, isDraggable, isDragging}) => {
  return (
    <div className={classes.SuperWebLinkList}>
      {items.map((value, index) => (
        <SortableItem
          disabled={!isDraggable}
          key={`item-${index}`}
          index={index}
          value={value}
          buttonSelected={buttonSelected}
          buttonUnselected={buttonUnselected}
          isDragging={isDragging}
          // isDragged={draggedElementIndex === index}
        />
      ))}
    </div>
  );
});

class SuperWebLinkList extends Component {
  constructor(props) {
    super(props);
    let webLinkBlocks = [];
    webLinkBlocks.push({
      type: 'trash',
      title: `Trash number`,
      listName: 'Films',
      daysQuantity: '5 days',
      domain: 'medium.com',
      description: "lools", // в trash description не нужен
      image: images[0],
      favicon: favicons[0],
    });

    for (let i = 0; i < 20; i++) {
      let image = images[Math.floor(Math.random() * 3)];
      let favicon = favicons[Math.floor(Math.random() * 3)];

      webLinkBlocks.push({
        type: 'simple',
        title: `Link number: ${i}`,
        domain: 'medium.com',
        description: "lools",
        image: image,
        favicon: favicon,
      });
    }

    this.state = {
      webLinkBlocks: webLinkBlocks,
      isDraggable: true,
      isDragging: false,
      draggedElementIndex: null,
    };
  }

  buttonSelected = () => {
    this.setState({isDraggable: false,})
  }

  buttonUnselected = () => {
    if (!this.state.isDraggable) {
      this.setState({isDraggable: true,})
    }
  }

  onSortStart = ({index}) => {
    this.setState({
      isDragging: true,
    });
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      webLinkBlocks: arrayMove(this.state.webLinkBlocks, oldIndex, newIndex),
      isDragging: false,
    });
  };

  render() {
    return (
      <SortableList
        isDraggable={this.state.isDraggable}
        isDragging={this.state.isDragging}
        buttonSelected={this.buttonSelected}
        buttonUnselected={this.buttonUnselected}
        useWindowAsScrollContainer={true}
        transitionDuration={500}
        pressDelay={150}
        axis='xy'
        items={this.state.webLinkBlocks}
        onSortStart={this.onSortStart}
        onSortEnd={this.onSortEnd}
      />
    );
  }
}

export default SuperWebLinkList;