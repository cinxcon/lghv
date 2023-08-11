import { useState } from 'react';

const Rreviewer = ({ onItemSelected }) => {
  const treeData = [
    {
      id: 1,
      name: '대표이사',
      children: [
        {
          id: 2,
          name: '회장'
        },
        {
          id: 3,
          name: '기술실',
          children: [
            {
              id: 4,
              name: '품질혁신팀'
            }
          ]
        },
        {
          id: 5,
          name: '플랫폼운영담당',
          children: [
            {
              id: 6,
              name: '미디어운영팀'
            },
            {
              id: 7,
              name: '기간망운영팀',
              children: [
                {
                  id: 8,
                  name: '컨버전스운용팀_관제'
                },
                {
                  id: 9,
                  name: '품질안전협력'
                }
              ]
            },
            {
              id: 10,
              name: 'OMC팀'
            },
            {
              id: 11,
              name: '뉴비즈운영팀'
            }
          ]
        }
      ]
    },
    {
      id: 12,
      name: '하나방송',
      children: [
        {
          id: 13,
          name: '가상부서'
        }
      ]
    }
  ];
  const listData = {
    1: [
      { id: 'da', title: '대표이사', name: '김헬로' },
      { id: 'db', title: '품질혁신팀', name: '손혁신' },
      { id: 'dc', title: '미디어운영팀', name: '이디어' },
      { id: 'dd', title: '컨버전스운용팀_관제', name: '김관제' },
      { id: 'de', title: '품질안전협력', name: '박안전' },
      { id: 'df', title: 'OMC팀', name: '권큐엠' },
      { id: 'dg', title: '뉴비즈운영팀', name: '손뉴비' }
    ],
    2: [
      { id: 'da', title: '대표이사', name: '김헬로' }
    ],
    3: [
      { id: 'db', title: '품질혁신팀', name: '손혁신' }
    ],
    4: [
      { id: 'db', title: '품질혁신팀', name: '손혁신' }
    ],
    5: [
      { id: 'dc', title: '미디어운영팀', name: '이디어' },
      { id: 'dd', title: '컨버전스운용팀_관제', name: '김관제' },
      { id: 'de', title: '품질안전협력', name: '박안전' }
    ],
    6: [
      { id: 'dc', title: '미디어운영팀', name: '이디어' }
    ],
    7: [
      { id: 'dd', title: '컨버전스운용팀_관제', name: '김관제' },
      { id: 'de', title: '품질안전협력', name: '박안전' }
    ],
    8: [
      { id: 'dd', title: '컨버전스운용팀_관제', name: '김관제' }
    ],
    9: [
      { id: 'de', title: '품질안전협력', name: '박안전' }
    ],
    10: [
      { id: 'df', title: 'OMC팀', name: '권큐엠' }
    ],
    11: [
      { id: 'dg', title: '뉴비즈운영팀', name: '손뉴비' }
    ],
    12: [
      { id: 'dh', title: '가상부서', name: '김나니' }
    ],
    13: [
      { id: 'dh', title: '가상부서', name: '김나니' }
    ]
  };

  const [selectedTree, setSelectedTree] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [trActive, setTrActive] = useState('');

  const handleItemSelected = (item) => {
    setSelectedTree(item.id);
  };
  const listItemSelect = (item) => {
    const newRow = { id: item.id, title: item.title, name: item.name };
    const activeListItem = document.getElementById(item.id);
    console.log(activeListItem);
    activeListItem.classList.add('active');
    if (!isDuplicate(newRow)) {
      setTableData([...tableData, newRow]);
    }
  };
  const isDuplicate = (newRow) => {
    // newRow와 rows에 이미 있는 데이터를 비교하여 중복 여부 확인
    return tableData.some((tableData) => tableData.name === newRow.name);
  };

  const deleteRow = (id) => {
    const updatedData = tableData.filter(row => row.id !== id);
    const listItem = document.getElementById(id);
    console.log('row;', id);
    if (tableData.length === 1) {
      alert('선택 내용이 사라 집니다.');
      setSelectedName(null);
    }
    setTableData(updatedData);
    // setTrActive(null);
    if (listItem !== null) {
      listItem.classList.remove('active');
    }
  };

  const reviewerSelect = (name, rowIndex) => {
    setTrActive(rowIndex);
    setSelectedName(name); // 선택된 항목의 이름을 부모 컴포넌트로 전달
  };

  const handleConfirmClick = () => {
    if (selectedName === null) {
      alert('검토자를 선택하지 않으셨습니다.');
    } else {
      onItemSelected(selectedName);
    }
  };

  const getMenuItems = () => {
    if (selectedTree === null) return null;

    return listData[selectedTree].map((item) => (
      <li key={item.id} id={item.id} onClick={() => listItemSelect(item)} ><span className="item-title">{item.title}</span><span className="item-name">{item.name}</span></li>
    ));
  };

  return (
    <>
     <div className='approval-conts flex-wrap align-start'>
        <div className='tree-wrap'>
              <div className='tree-conts'>
              <div className='logo'>엘지 유플러스</div>
              {treeData.map((item) => (
                <TreeItem
                  key={item.id}
                  item={item}
                  onItemSelected={handleItemSelected}
                />
              ))}
              </div>
        </div>
        <div className='list-item'>
              <ul>
                {getMenuItems()}
              </ul>
        </div>
        <div className='selected-item'>
            <table className="popup-table">
              <colgroup>
                <col style={{ width: '10%' }} />
                <col style={{ width: '40%' }} />
                <col style={{ width: '40%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">부서</th>
                  <th scope="col">성명</th>
                </tr>
              </thead>
              <tbody>
              {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td><button onClick={() => deleteRow(row.id)} className='btn btn-delete'>x</button></td>
                <td onClick={() => reviewerSelect(row.name, rowIndex)} className={trActive === rowIndex ? 'active' : ''}>{row.title}</td>
                <td onClick={() => reviewerSelect(row.name, rowIndex)} className={trActive === rowIndex ? 'active' : ''}>{row.name}</td>
              </tr>
              ))}
              </tbody>
            </table>
        </div>
      </div>
      <div className='right'>
        <button onClick={handleConfirmClick} className='btn btn-primary ml10'>검토자 설정</button>
      </div>
    </>
  );
};

const TreeItem = ({ item, onItemSelected }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleItemSelected = (item) => {
    const treeitem = document.querySelectorAll('.item-name');
    const activeItem = document.getElementById(item.id);
    console.log(treeitem, activeItem);
    treeitem.forEach(element => {
      element.classList.remove('active');
    });
    activeItem.classList.add('active');
    onItemSelected(item);
  };

  return (
    <div className={`tree-item ${!item.children ? 'close' : 'open'}`}>
      <div className="tree-content">
        {item.children
          ? (<button onClick={handleToggle} className={isExpanded
              ? 'open'
              : ''} />)
          : null}
        {item.children
          ? (<span id={item.id} className='item-name' onClick={() => handleItemSelected(item)}>{item.name}</span>)
          : (<span id={item.id} className='item-name not-children' onClick={() => handleItemSelected(item)}>{item.name}</span>)
        }
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

export default Rreviewer;
