import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle'
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';
import Select from 'react-select';

function TemplateList() {
  const pagedata = {
    title: '템플릿생성',
    subtitle: '템플릿 목록',
    SubMenu: 'yes'
  }
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
  const onPopup = () => {
    const url = '/LGHV-UIX-WRK/LGHV-UIX-WRK-0012-Detail';
    const popupWidth = 1280;
    const popupHeight = 800;
    const popupX = (window.screen.width / 2) - (popupWidth / 2);
    const popupY = (window.screen.height / 2) - (popupHeight / 2);
    window.open(url, 'Detail', 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY);
  }
  return (
    <>
      <ContentTitle data={pagedata} />
      <div className='content-section'>
        <div className='search-wrap type-s'>
            <table className='search'>
                <caption>템플릿 리스트</caption>
                  <colgroup>
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '40%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '40%' }} />
                  </colgroup>
                <tbody>
                  <tr>
                  <th scope="row"><label htmlFor="type">작업종류</label></th>
                      <td>
                          <Select defaultValue={optionsTemplateType[0]} value={templateType} onChange={setTemplateType} options={optionsTemplateType} className='react-select-container' classNamePrefix="react-select" />
                      </td>
                      <th scope="row"><label htmlFor="formName">양식명</label></th>
                      <td>
                      <span className='input-btn-wrap'>
                          <input type="text" name="formName" id="formName" className='input-w-80' placeholder='양식명' />
                          <button className='btn btn-low btn-ref'>초기화</button>
                          <button className='btn btn-black btn-search-txt'>검색</button>
                      </span>
                      </td>
                  </tr>
                </tbody>
            </table>
        </div>
      </div>
      <div className='content-section'>
      <div className="result-pageview">
        <ResultPageView />
      </div>
      {/* 목록 영역 */}
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
              <tr className='link' key={item.id} onClick={() => { onPopup() }}>
              <td className="center">{index + 1}</td>
              <td>{item.category}</td>
              <td className='left'>{item.formName}</td>
              <td>{item.date}</td>
              </tr>))}
            </tbody>
        </table>
      <ResultNoData />
      <ResultListPaging />
    </div>
     </>
  )
}

export default TemplateList;
