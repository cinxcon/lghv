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
    { isNotice: true, category: '작업신청', formName: '작업 신청서 기본 폼', date: '2023.07.01' },
    { isNotice: true, category: '보고', formName: '기간망 작업신청서 작업세부', date: '2023.07.01' },
    { isNotice: true, category: '기록', formName: '서비스개발 작업신청서', date: '2023.07.01' },
    { isNotice: false, category: '작업신청', formName: 'MY 작업 신청서 기본 폼', date: '2023.07.01' },
    { isNotice: false, category: '보고', formName: 'MY 기간망 작업신청서 작업세부', date: '2023.07.01' },
    { isNotice: false, category: '기록', formName: 'MY 서비스개발 작업신청서', date: '2023.07.01' },
    { isNotice: false, category: '작업신청', formName: 'MY 작업신청서 작업개요', date: '2023.07.01' },
    { isNotice: false, category: '보고', formName: 'MY 기간 망 작업 신청서', date: '2023.07.01' },
    { isNotice: false, category: '기록', formName: 'MY 선로 작업 신청서', date: '2023.07.01' },
    { isNotice: false, category: '기록', formName: 'MY 기간 망 작업 신청서', date: '2023.07.01' },
    { isNotice: false, category: '작업신청', formName: 'MY 선로 작업 신청서', date: '2023.07.01' },
    { isNotice: false, category: '보고', formName: 'MY 기간 망 작업 신청서', date: '2023.07.01' },
    { isNotice: false, category: '작업신청', formName: 'MY 선로 작업 신청서', date: '2023.07.01' }
  ];
  const countTrue = data.filter(item => item.isNotice === true).length;
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
  const [selectedOption, setSelectedOption] = useState('team');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
      <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
        <div className="content-title">
          <h2>템플릿 불러오기</h2>
        </div>
        <div className='template-top'>
            <table className='search'>
                <caption>템플릿 리스트</caption>
                  <colgroup>
                  <col style={{ width: '7%' }} />
                  <col style={{ width: '17%' }} />
                  <col style={{ width: '7%' }} />
                  <col style={{ width: '25%' }} />
                  <col style={{ width: '7%' }} />
                  <col style={{ width: '40%' }} />
                  </colgroup>
                <tbody>
                  <tr>
                      <th scope="row">템플릿 구분</th>
                      <td>
                        <input type="radio" name="type" id="type_team" value="team" checked={selectedOption === 'team'} onChange={handleOptionChange} />
                        <label htmlFor="type_team">팀별</label>
                        <input type="radio" name="type" id="type_personal" value="personal" checked={selectedOption === 'personal'} onChange={handleOptionChange} />
                        <label htmlFor="type_personal">개인별</label>
                      </td>
                      <th scope="row"><label htmlFor="type">템플릿 분류</label></th>
                      <td>
                          <Select defaultValue={optionsTemplateType[0]} value={templateType} onChange={setTemplateType} options={optionsTemplateType} className='react-select-container' classNamePrefix="react-select" />
                      </td>
                      <th scope="row"><label htmlFor="formName">양식명</label></th>
                      <td>
                      <span className='input-btn-wrap'>
                          <input type="text" name="formName" id="formName" style={{ width: '70%' }} placeholder='양식명' />
                          <button className='btn btn-low btn-ref'>초기화</button>
                          <button onClick={templateSearch} className='btn btn-black btn-search'>검색</button>
                      </span>
                      </td>
                  </tr>
                </tbody>
            </table>
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
                { item.isNotice ? (<td><span className='box-primary'>공지</span></td>) : (<td>{(index + 1) - countTrue}</td>)}
                <td className='left'>{item.category}</td>
                <td className='left'>{item.formName}</td>
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
