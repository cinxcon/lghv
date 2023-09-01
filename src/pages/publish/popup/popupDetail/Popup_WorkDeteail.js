import { useState } from 'react';
import { createPortal } from 'react-dom';
import Select from 'react-select';

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

  const handleItemSelected = (item) => {
    onItemSelected(item.name);
  };
  // 셀렏트 리스트
  const optionsIfraType = [
    { value: 'all', label: '전체' },
    { value: '서울인프라팀', label: '서울인프라팀' },
    { value: '경북인프라팀', label: '경북인프라팀' }
  ];

  const optionsSoType = [
    { value: 'all', label: '전체' },
    { value: 'so', label: 'SO' }
  ];

  const optionsWorkType = [
    { value: '인터넷', label: '인터넷' },
    { value: '디지털방송', label: '디지털방송' },
    { value: '8VSB', label: '8VSB' },
    { value: '기간망', label: '기간망' },
    { value: '인터넷전화', label: '인터넷전화' },
    { value: '전송망', label: '전송망' },
    { value: '기반설비', label: '기반설비' },
    { value: 'NMS', label: 'NMS' },
    { value: 'CAMS', label: 'CAMS' },
    { value: '비전클라우드', label: '비전클라우드' },
    { value: '헬로캠', label: '헬로캠' },
    { value: '지상파', label: '지상파' },
    { value: '지역채널_북인천통합송출센터', label: '지역채널_북인천통합송출센터' },
    { value: '보안설비', label: '보안설비' },
    { value: '파워클라우드', label: '파워클라우드' },
    { value: '플랫폼', label: '플랫폼' },
    { value: '전기차충전', label: '전기차충전' },
    { value: 'TOMS', label: 'TOMS' },
    { value: 'VOD', label: 'VOD ' }
  ];

  const [infraType, setInfraType] = useState(optionsIfraType[0]);
  const [soType, setSoType] = useState(optionsSoType[0]);
  const [workType, setWorkType] = useState(optionsSoType[0]);

  return (
    <>
      <PopupPortal>
        <style>
          {`
            #root {display: none;}
          `}
        </style>
        <div className='new-window-wrap'>
        <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
        <div className='content-title'>
          <h2>작업 상세</h2>
        </div>
        <div className='pop-search-wrap'>
          <div className='flex-wrap mb15'>
            <span className='box'>인프라팀/SO</span>
            <Select defaultValue={optionsIfraType[0]} value={infraType} onChange={setInfraType} options={optionsIfraType} className='react-select-container w40' classNamePrefix="react-select" />
            <Select defaultValue={optionsSoType[0]} value={soType} onChange={setSoType} options={optionsSoType} className='react-select-container w40 ml8' classNamePrefix="react-select" />
          </div>
          <div className='flex-wrap'>
            <span className='box'>선택</span>
            <Select defaultValue={optionsWorkType[0]} value={workType} onChange={setWorkType} options={optionsWorkType} className='react-select-container w80' classNamePrefix="react-select" />
          </div>
        </div>
        <div className='approval-conts alone'>
          <div className='tree-wrap alone'>
          <h4 className='work-title'>전체({workType.label})</h4>
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
