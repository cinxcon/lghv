import { useState } from 'react';

const ApprovalOrgTree = () => {
  const treeData = [
    {
      id: 1,
      name: 'Engineering',
      children: [
        {
          id: 2,
          name: 'Engineering 1team',
          children: [
            {
              id: 6,
              name: 'Engineering 1team 1part',
              children: [
                {
                  id: 9,
                  name: 'Engineering 1team 1part 1cell'
                }
              ]
            }
          ]
        },
        {
          id: 3,
          name: 'Child 1-2',
          children: [
            {
              id: 4,
              name: 'Grandchild 1-2-1',
              children: [
                {
                  id: 7,
                  name: 'Great-Grandchild 1-2-1-1'
                },
                {
                  id: 8,
                  name: 'Great-Grandchild 1-2-1-2'
                }
              ]
            },
            {
              id: 5,
              name: 'Grandchild 1-2-2'
            }
          ]
        }
      ]
    },
    {
      id: 10,
      name: 'Root 2',
      children: [
        {
          id: 11,
          name: 'Child 2-1'
        },
        {
          id: 12,
          name: 'Child 2-2',
          children: [
            {
              id: 13,
              name: 'Grandchild 2-2-1'
            },
            {
              id: 14,
              name: 'Grandchild 2-2-2'
            }
          ]
        }
      ]
    }
  ];

  const menuData = {
    1: [
      { id: 1, name: 'Item 1 Content' },
      { id: 2, name: 'Item 1.1 Content' },
      { id: 3, name: 'Item 1.2 Content' }
    ],
    2: [
      { id: 6, name: 'Item 2.1 Content' }
    ],
    6: [
      { id: 9, name: 'Item 6.1 Content' }
    ],
    3: [
      { id: 4, name: 'Item 3.1 Content' },
      { id: 5, name: 'Item 3.2 Content' }
    ],
    4: [
      { id: 7, name: 'Item 4.1 Content' },
      { id: 8, name: 'Item 4.2 Content' }
    ],
    5: [
      { id: 10, name: 'Item 5.1 Content' }
    ],
    10: [
      { id: 11, name: 'Item 10.1 Content' },
      { id: 12, name: 'Item 10.2 Content' }
    ],
    11: [
      { id: 13, name: 'Item 11.1 Content' },
      { id: 14, name: 'Item 11.2 Content' }
    ],
    12: [
      { id: 15, name: 'Item 12.1 Content' }
    ]
  };
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleItemClick = (itemID) => {
    console.log('itemIDitemIDitemID', itemID);
    setSelectedMenu(itemID);
  };
  const handleConfirmClick = () => {
    //  onItemSelected(selectedItem); // 선택된 항목의 이름을 부모 컴포넌트로 전달
  };

  const getMenuItems = () => {
    if (selectedMenu === null) return null;

    return menuData[selectedMenu].map((item) => (
      <li key={item.id}>{item.name}</li>
    ));
  };
  console.log('listDatalistDatalistDatalistData', selectedMenu);
  return (
    <div className="tree-item">
      <button onClick={handleConfirmClick} className='btn'>확인</button>
      <div className='tree-wrap'>
      {treeData.map((item) => (
        <TreeItem key={item.id} item={item} onItemClick={handleItemClick} />
      ))}
      </div>
      {/* Render the fetched list data */}
        <div>
          <h2>List Data:</h2>
          <ul>
            {getMenuItems()}
          </ul>
        </div>
    </div>
  );
};

const TreeItem = ({ item, onItemClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleItemClick = () => {
    onItemClick(item.id);
    console.log('idididididididi', item.id);
  };

  return (
    <div className="tree-item">
      <div className="tree-content">
        {item.children
          ? (<button onClick={handleToggle}>{isExpanded
              ? '−'
              : '+'}</button>)
          : null}
        <span className="item-name" onClick={onItemClick}>
          {item.name}
        </span>
      </div>
      {isExpanded &&
        item.children &&
        item.children.map((child) => (
          <div key={child.id} className="tree-children">
            <TreeItem item={child} onItemClick={handleItemClick} />
          </div>
        ))}
    </div>
  );
};

export default ApprovalOrgTree;
