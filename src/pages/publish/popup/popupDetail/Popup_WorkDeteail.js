import { useState } from 'react';
import { createPortal } from 'react-dom';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

const WorkDeteail = ({ onItemSelected }) => {
  const treeData = [
    {
      id: 1,
      name: 'Network (NOC) Switch,Router',
      children: [
        {
          id: 2,
          name: 'Network (NOC) Router'
        },
        {
          id: 3,
          name: 'Network (NOC) Switch'
        }
      ]
    },
    {
      id: 4,
      name: 'CMTS',
      children: [
        {
          id: 5,
          name: 'CMTS 1'
        },
        {
          id: 6,
          name: 'CMTS 2'
        }
      ]
    },
    {
      id: 7,
      name: 'CMTSVDSL',
      children: [
        {
          id: 8,
          name: 'VDSL 1'
        },
        {
          id: 9,
          name: 'VDSL 2'
        }
      ]
    }
  ];
  const data = [
    { name: '인터넷' },
    { name: '디지털방송' },
    { name: '8VSB' },
    { name: '기간망' },
    { name: '인터넷전화' },
    { name: '전송망' },
    { name: '기반설비' },
    { name: 'NMS' },
    { name: 'CAMS' },
    { name: '비전클라우드' },
    { name: '헬로캠' },
    { name: '지상파' },
    { name: '지역채널_북인천통합송출센터' },
    { name: '보안설비' },
    { name: '파워클라우드' },
    { name: '플랫폼' },
    { name: '전기차충전' },
    { name: 'TOMS' },
    { name: 'VOD ' }
  ];
  const [selectedItem, setSelectedItem] = useState(data[0]); // 초기값으로 첫 번째 항목 선택

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.value;
    setSelectedItem(data[selectedIndex]);
  };

  const handleItemSelected = (item) => {
    onItemSelected(item.name);
  };

  return (
    <>
      <PopupPortal>
        <style>
          {`
            #root {display: none;}
          `}
        </style>
        <div className='new-window-wrap'>
        <div className='pop-search-wrap'>
            <label htmlFor='work-type'>선택 :</label>
            <select name='work-type' id='work_type' onChange={handleSelectChange} className='select-item'>
            {data.map((item, index) => (
              <option key={index} value={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className='approval-conts alone'>
          <div className='tree-wrap alone'>
          <h4 className='work-title'>전체({selectedItem.name})</h4>
            <div className='tree-conts'>
            {treeData.map((item) => (
            <TreeItem
                key={item.id}
                item={item}
                onItemSelected={handleItemSelected}
            />
            ))}
          </div>
        </div>
      </div>
      </div>
      </PopupPortal>
    </>
  );
};

const TreeItem = ({ item, onItemSelected }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleItemSelected = () => {
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
          ? (<span className="item-name" onClick={handleItemSelected}>{item.name}</span>)
          : (<span className="item-name not-children" onClick={handleItemSelected}>{item.name}</span>)
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

export default WorkDeteail;
