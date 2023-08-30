import { createPortal } from 'react-dom';
import ResultPageView from '../../common/ResultPageView';
import ResultNoData from '../../common/ResultNoData';
import ResultListPaging from '../../common/ResultListPaging';
import { useState } from 'react';
import Select from 'react-select';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

const LoadTemplate = ({ onItemSelected }) => {
  const data = [
    { category: '작업신청', formName: '작업 신청서 기본 폼', date: '2023.07.01' },
    { category: '보고', formName: '기간망 작업신청서 작업세부', date: '2023.07.01' },
    { category: '기록', formName: '서비스개발 작업신청서', date: '2023.07.01' },
    { category: '작업신청', formName: '작업신청서 작업개요', date: '2023.07.01' },
    { category: '보고', formName: '기간 망 작업 신청서', date: '2023.07.01' },
    { category: '기록', formName: '선로 작업 신청서', date: '2023.07.01' },
    { category: '기록', formName: '기간 망 작업 신청서', date: '2023.07.01' },
    { category: '작업신청', formName: '선로 작업 신청서', date: '2023.07.01' },
    { category: '보고', formName: '기간 망 작업 신청서', date: '2023.07.01' },
    { category: '작업신청', formName: '선로 작업 신청서', date: '2023.07.01' }
  ];

  const optionsTemplateType = [
    { value: 'all', label: '전체' },
    { value: '작업신청', label: '작업신청' }
  ];
  const [templateType, setTemplateType] = useState(optionsTemplateType[0]);

  const templateSearch = () => {
    // 템플릿 검색
  }

  const handleConfirmClick = () => {
  // 템플릿 선택
  }

  return (
    <>
      <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>템플릿 불러오기</h2>
        </div>
        <div className='template-top flex-wrap'>
            <div className='flex-wrap'>
              <label htmlFor='category'>템플릿 분류</label>
              <Select defaultValue={optionsTemplateType[0]} value={templateType} onChange={setTemplateType} options={optionsTemplateType} className='react-select-container w60' classNamePrefix="react-select" />
            </div>
            <div className='flex-wrap'>
              <label htmlFor="name_search">이름</label>
                <span className='input-btn-wrap'>
                  <input type='text' name='name-search' id='name_search' className='input-w-80' />
                   <div className='btn-wrap'>
                    <button className='btn btn-ref'>초기화</button>
                    <button onClick={templateSearch} className='btn btn-black btn-search'>검색</button>
                   </div>
                </span>
            </div>
        </div>
        <div className="result-pageview">
            <ResultPageView />
        </div>
        <table className="table">
            <caption>템플릿 리스트</caption>
              <colgroup>
              <col style={{ width: '5%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '65%' }} />
              <col style={{ width: '15%' }} />
              </colgroup>
            <thead>
            <tr>
                <th className="center">NO</th>
                <th className="center">분류</th>
                <th className="center">양식명</th>
                <th className="center">등록일</th>
            </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
              <tr className='link' key={item.id} onClick={handleConfirmClick}>
              <td className="center">{index + 1}</td>
              <td>{item.category}</td>
              <td>{item.formName}</td>
              <td>{item.date}</td>
              </tr>))}
            </tbody>
        </table>
        <ResultNoData />
        <ResultListPaging />
      </div>
      </PopupPortal>
    </>
  );
};

export default LoadTemplate;
