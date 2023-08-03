import { useState } from 'react';

const ApprovalOrgTree = ({ onItemSelected }) => {
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
  const listData = {
    1: [
      { id: 1_1, name: 'Item 1.1 Content' },
      { id: 1_2, name: 'Item 1.2 Content' }
    ],
    2: [
      { id: 2_1, name: 'Item 2.1 Content' },
      { id: 2_2, name: 'Item 2.2 Content' }
    ],
    3: [
      { id: 3_1, name: 'Item 3.1 Content' },
      { id: 3_2, name: 'Item 3.2 Content' }
    ],
    4: [
      { id: 4, name: 'Item 2.1 Content' }
    ],
    5: [
      { id: 5, name: 'Item 2.1 Content' }
    ],
    6: [
      { id: 6, name: 'Item 6.1 Content' }
    ],
    7: [
      { id: 7_1, name: 'Item 7.1 Content' },
      { id: 7_2, name: 'Item 7.2 Content' }
    ],
    8: [
      { id: 8_1, name: 'Item 8.1 Content' },
      { id: 8_2, name: 'Item 8.2 Content' }
    ],
    9: [
      { id: 9, name: 'Item 5.1 Content' }
    ],
    10: [
      { id: 10_1, name: 'Item 10.1 Content' },
      { id: 10_2, name: 'Item 10.2 Content' }
    ],
    11: [
      { id: 11_1, name: 'Item 11.1 Content' },
      { id: 11_2, name: 'Item 11.2 Content' }
    ],
    12: [
      { id: 12, name: 'Item 12.1 Content' }
    ],
    13: [
      { id: 13, name: 'Item 13.1 Content' }
    ],
    14: [
      { id: 14, name: 'Item 14.1 Content' }
    ]
  };

  const [selectedItem, setSelectedItem] = useState('');
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedMenuName, setselectedMenuName] = useState('');

  const handleItemSelected = (item) => {
    // setSelectedItem(item.name);
    setSelectedMenu(item.id);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item.name); // 클릭된 항목의 이름을 상태로 설정
  };
  const handleItemSelect = (name) => {
    console.log(name);
    setselectedMenuName(name);
  };
  const handleConfirmClick = () => {
    onItemSelected(selectedMenuName); // 선택된 항목의 이름을 부모 컴포넌트로 전달
  };

  const getMenuItems = () => {
    if (selectedMenu === null) return null;

    return listData[selectedMenu].map((item) => (
      <li key={item.id}><span className="item-name" onClick={() => handleItemSelect(item.name)}> {item.name}</span></li>
    ));
  };

  return (
    <div className="tree-item">
      <button onClick={handleConfirmClick} className='btn'>확인</button>
      <div className='tree-wrap'>
      {treeData.map((item) => (
        <TreeItem
          key={item.id}
          item={item}
          onItemSelected={handleItemSelected}
          onItemClick={handleItemClick} // onItemClick 이벤트 핸들러를 전달
        />
      ))}
      </div>
       {/* Render the fetched list data */}
      <div className='list-item'>
          <h2>List Data:</h2>
          <ul>
            {getMenuItems()}
          </ul>
      </div>
      <div className='selected-item'>
        <span>선택됨 : </span>
        <input type="text" value={selectedItem} readOnly />
      </div>
    </div>
  );
};

const TreeItem = ({ item, onItemSelected }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleItemClick = () => {
    onItemSelected(item);
  };

  return (
    <div className="tree-item">
      <div className="tree-content">
        {item.children
          ? (<button onClick={handleToggle}>{isExpanded
              ? '−'
              : '+'}</button>)
          : null}
        <span className="item-name" onClick={handleItemClick}>
          {item.name}
        </span>
      </div>
      {isExpanded &&
        item.children &&
        item.children.map((child) => (
          <div key={child.id} className="tree-children">
            <TreeItem item={child} onItemSelected={onItemSelected} />
          </div>
        ))}
    </div>
  );
};

export default ApprovalOrgTree;
