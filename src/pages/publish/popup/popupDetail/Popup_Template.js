import { createPortal } from 'react-dom';
import ResultPageView from '../../common/ResultPageView';
import ResultNoData from '../../common/ResultNoData';
import ResultListPaging from '../../common/ResultListPaging';

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
        <table className='popup-table mb15'>
        <caption>템플릿 분류</caption>
          <colgroup>
            <col style={{ width: '15%' }} />
            <col style={{ width: '35%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '40%' }} />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row"><label htmlFor='category'>템플릿 분류</label></th>
              <td>
                <select name="category" id="category">
                <option value="">선택</option>
                </select>
              </td>
              <th scope="row"><label htmlFor="name_search">검색</label></th>
              <td>
                <span className='input-btn-wrap'>
                  <input type='text' name='name-search' id='name_search' className='input-search-front' />
                  <button onClick={templateSearch} className='btn btn-black btn-search'>검색</button>
                </span>
              </td>
          </tr>
          </tbody>
        </table>
        <div className="result-pageview">
            <ResultPageView />
        </div>
        <table className="table">
            <caption>템플릿 리스트</caption>
              <colgroup>
              <col style={{ width: '15%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '50%' }} />
              <col style={{ width: '20%' }} />
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
