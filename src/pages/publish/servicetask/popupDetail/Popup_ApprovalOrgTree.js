import { useState } from 'react';

const ApprovalOrgTree = ({ onItemSelected }) => {
  const treeData = [
    {
      id: 1,
      name: '플랫폼운영담당',
      children: [
        {
          id: 2,
          name: '기간망운영팀',
          children: [
            {
              id: 6,
              name: '기간망운영팀'
            },
            {
              id: 9,
              name: '품질안전협력'
            }
          ]
        },
        {
          id: 3,
          name: 'OMC팀',
          children: [
            {
              id: 4,
              name: '뉴비즈운영팀',
              children: [
                {
                  id: 7,
                  name: '운영1팀'
                },
                {
                  id: 8,
                  name: '운영2팀'
                }
              ]
            },
            {
              id: 5,
              name: '기술개발 팀'
            }
          ]
        }
      ]
    },
    {
      id: 10,
      name: '하나방송',
      children: [
        {
          id: 11,
          name: '가상부서'
        }
      ]
    }
  ];
  const listData = {
    1: [
      { id: 1_1, title: '플랫폼운영담당', name: '홍길동' },
      { id: 1_2, title: '플랫폼운영담당', name: '김길동' }
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
      { id: 4, name: 'Item 4.1 Content' }
    ],
    5: [
      { id: 5, name: 'Item 5.1 Content' }
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
      { id: 9, name: 'Item 9.1 Content' }
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
  const [selectedItemTitle, setSelectedItemTitle] = useState('');
  const [selectedMenu, setSelectedMenu] = useState(null);
  // const [selectedMenuName, setselectedMenuName] = useState('');

  const handleItemSelected = (item) => {
    // setSelectedItem(item.name);
    setSelectedMenu(item.id);
  };
  const handleItemClick = (item) => {
    setSelectedItemTitle(item.title); // 클릭된 항목의 이름을 상태로 설정
    setSelectedItem(item.name);
  };
  const handleItemSelect = (item) => {
    setSelectedItemTitle(item.title); // 클릭된 항목의 이름을 상태로 설정
    setSelectedItem(item.name);
  };
  const handleConfirmClick = () => {
    // onItemSelected(selectedMenuName); // 선택된 항목의 이름을 부모 컴포넌트로 전달
  };

  const approvalLineSave = () => {
    console.log('결제선 저장')
  }
  const handleDeleteRow = (rowIndex) => {
    console.log('삭제')
  };

  const getMenuItems = () => {
    if (selectedMenu === null) return null;

    return listData[selectedMenu].map((item) => (
      <li key={item.id}><span className="item-name" onClick={() => handleItemSelect(item)}>{item.title}/{item.name}</span></li>
    ));
  };

  return (
    <>
      <div className='approval-top flex-wrap between mb15'>
        <div className='line-select'>
          <fieldset>
              <legend>결제선 지정</legend>
              <input type="radio" name="approval-type" id="draft" value="" defaultChecked={true} />
              <label htmlFor="draft">기안</label>
              <input type="radio" name="approval-type" id="examine" value="" />
              <label htmlFor="examine">검토</label>
              <input type="radio" name="approval-type" id="adjustment" value="" />
              <label htmlFor="adjustment">조정</label>
              <input type="radio" name="approval-type" id="agreement" value="" />
              <label htmlFor="agreement">합의</label>
              <input type="radio" name="approval-type" id="approval" value="" />
              <label htmlFor="approval">결제</label>
              <input type="radio" name="approval-type" id="reception" value="" />
              <label htmlFor="reception">수신</label>
          </fieldset>
        </div>
        <div className='search-box'>
          <label htmlFor="name_search">이름</label>
          <input type='text' name='name-search' id='name_search' className='ml10' />
          <button type='button' className='btn btn-sm btn-black ml10'>검색</button>
        </div>
        <div className='btn-group'>
            <button onClick={approvalLineSave} className='btn'>결제선 저장</button>
            <button onClick={handleConfirmClick} className='btn ml10'>확인</button>
        </div>
      </div>
      <div className='approval-conts flex-wrap align-start'>
        <div className='tree-wrap'>
              <div className='tree-conts'>
              {treeData.map((item) => (
                <TreeItem
                  key={item.id}
                  item={item}
                  onItemSelected={handleItemSelected}
                  onItemClick={handleItemClick} // onItemClick 이벤트 핸들러를 전달
                />
              ))}
              </div>
        </div>
        <div className='list-item'>
              <h2>List Data:</h2>
              <ul>
                {getMenuItems()}
              </ul>
        </div>
        <div className='selected-item'>
            <table className="popup-table">
              <colgroup>
                <col style={{ width: '10%' }} />
                <col style={{ width: '25%' }} />
                <col style={{ width: '25%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '20%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">유형</th>
                  <th scope="col">결제자</th>
                  <th scope="col">SMS</th>
                  <th scope="col">E-MAIL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button type="button" className='btn btn-sm' onClick={handleDeleteRow}>X</button>
                  </td>
                  <td>{selectedItemTitle}</td>
                  <td>{selectedItem}</td>
                  <td>
                    <input type="checkbox" name="sms" id="sms" />
                    <label htmlFor="sms">SMS</label>
                  </td>
                  <td>
                    <input type="checkbox" name="email" id="email" />
                    <label htmlFor="email" >E-MAIL</label>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </>
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
          ? (<button onClick={handleToggle} className={isExpanded
              ? 'open'
              : ''} />)
          : null}
        {item.children
          ? (<span className="item-name" onClick={handleItemClick}>{item.name}</span>)
          : (<span className="item-name not-children" onClick={handleItemClick}>{item.name}</span>)
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

export default ApprovalOrgTree;
