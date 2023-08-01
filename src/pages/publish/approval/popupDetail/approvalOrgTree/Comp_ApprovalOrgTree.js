import { useState } from 'react';

const ApprovalOrgTree = ({ onItemSelected, onClose }) => {
  const treeData = [
    {
      id: 1,
      name: 'Root 1',
      children: [
        {
          id: 2,
          name: 'Child 1-1',
          children: [
            {
              id: 6,
              name: 'Grandchild 1-1-1',
              children: [
                {
                  id: 9,
                  name: 'Great-Grandchild 1-1-1-1'
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
  const [selectedItem, setSelectedItem] = useState('');
  const handleItemSelected = (itemName) => {
    setSelectedItem(itemName);
  };
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName); // 클릭된 항목의 이름을 상태로 설정
  };
  const handleConfirmClick = () => {
    onItemSelected(selectedItem); // 선택된 항목의 이름을 부모 컴포넌트로 전달
    onClose(); // 팝업을 닫음
  };

  return (
    <div className="tree-item">
      <div className='selected'>
        <span>부서</span>
        <input type="text" value={selectedItem} readOnly />
        <button onClick={handleConfirmClick} className='btn'>확인</button>
      </div>
      {treeData.map((item) => (
        <TreeItem
          key={item.id}
          item={item}
          onItemSelected={handleItemSelected}
          onItemClick={handleItemClick} // onItemClick 이벤트 핸들러를 전달
        />
      ))}
    </div>
  );
};

const TreeItem = ({ item, onItemSelected }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleItemClick = () => {
    onItemSelected(item.name);
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
