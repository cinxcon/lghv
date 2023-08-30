import { useState } from 'react';
import { createPortal } from 'react-dom';
import ResultPageView from '../../common/ResultPageView';
import ResultNoData from '../../common/ResultNoData';
import ResultListPaging from '../../common/ResultListPaging';
import Select from 'react-select';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

const Worker = ({ onItemSelected }) => {
  const data = [
    { cell: 'DG1', address: '태백~도계 국간망', dtn: 83, net: 29, voip: 8, atv: 12, total: 132 },
    { cell: 'DG1', address: '태백~도계 국간망', dtn: 83, net: 29, voip: 8, atv: 12, total: 132 },
    { cell: 'DG1', address: '태백~도계 국간망', dtn: 83, net: 29, voip: 8, atv: 12, total: 132 },
    { cell: 'DG1', address: '태백~도계 국간망', dtn: 83, net: 29, voip: 8, atv: 12, total: 132 }
  ];

  const handleConfirmClick = () => {
  // 템플릿 선택
  }
  //  토글
  const [isToggled, setToggled] = useState(false);

  // input clear
  const handleButtonToggle = () => {
    setToggled(prevState => !prevState);
  };

  // 데이터 리스트
  const optionsUserType = [
    { value: 'all', label: '전체' },
    { value: '서울인프라팀', label: '서울인프라팀' },
    { value: '경북인프라팀', label: '경북인프라팀' }
  ];

  const optionsCompanyType = [
    { value: 'all', label: '전체' },
    { value: 'so', label: 'SO' }
  ];

  const optionsPositionType = [
    { value: 'all', label: '전체' },
    { value: 'Cell', label: 'Cell' }
  ];
  const optionsRankType = [
    { value: 'all', label: '전체' },
    { value: 'Cell', label: 'Cell' }
  ];

  const [userType, setUserType] = useState(optionsUserType[0]);
  const [companyType, setCompanyType] = useState(optionsCompanyType[0]);
  const [positionType, setPositionType] = useState(optionsPositionType[0]);
  const [rankType, setRankType] = useState(optionsRankType[0]);

  const [checkboxStates, setCheckboxStates] = useState(false);
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxStates((prevState) => ({
      ...prevState,
      [id]: checked
    }));
  };
  const selectedCount = Object.values(checkboxStates).filter(Boolean).length;
  // 윈도우 팝업
  const onPopup = (url, name, width, height) => {
    const popupWidth = width;
    const popupHeight = height;
    const popupX = (window.screen.width / 2) - (popupWidth / 2);
    const popupY = (window.screen.height / 2) - (popupHeight / 2);
    window.open(url, name, 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY);
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
            <div className='content-title'>
             <h2>사용자 선택</h2>
            </div>
            <div className='content-section'>
                <div className='search-wrap'>
                    <div className='title flex-wrap between'>
                        <h3>검색 조건</h3>
                        <button className={`btn-fold ${isToggled ? 'close' : ''}`} onClick={handleButtonToggle} id='fold-open'>검색영역 열기</button>
                    </div>
                    <div className={`toggle-box ${isToggled ? 'hide' : ''}`}>
                    <table className='search'>
                        <caption>템플릿 검색 영역</caption>
                        <colgroup>
                            <col style={{ width: '9%' }} />
                            <col style={{ width: '25%' }} />
                            <col style={{ width: '8%' }} />
                            <col style={{ width: '25%' }} />
                            <col style={{ width: '8%' }} />
                            <col style={{ width: '25%' }} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope='row'><label htmlFor='company'>회사</label></th>
                                <td>
                                    <Select defaultValue={optionsCompanyType[0]} value={companyType} onChange={setCompanyType} options={optionsCompanyType} className='react-select-container' classNamePrefix="react-select" />
                                </td>
                                <th scope='row'><label htmlFor='position'>직책</label></th>
                                <td>
                                    <Select defaultValue={optionsPositionType[0]} value={positionType} onChange={setPositionType} options={optionsPositionType} className='react-select-container' classNamePrefix="react-select" />
                                </td>
                                <th scope='row'><label htmlFor='rank'>직급</label></th>
                                <td>
                                    <Select defaultValue={optionsRankType[0]} value={rankType} onChange={setRankType} options={optionsRankType} className='react-select-container' classNamePrefix="react-select" />
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'><label htmlFor='user_id'>사용자ID</label></th>
                                <td>
                                    <input type='text' name='user_id' id='user_name' placeholder='사용자ID' />
                                </td>
                                <th scope='row'><label htmlFor='user_name'>이름 </label></th>
                                <td>
                                    <input type='text' name='user_name' id='user_name' placeholder='이름' />
                                </td>
                                <th scope='row'><label htmlFor='user_email'>이메일</label></th>
                                <td>
                                    <input type='text' name='user_email' id='user_email' placeholder='이메일' />
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'><label htmlFor='user_type'>사용자구분</label></th>
                                <td>
                                    <Select defaultValue={optionsUserType[0]} value={userType} onChange={setUserType} options={optionsUserType} className='react-select-container' classNamePrefix="react-select" />
                                </td>
                                <th scope='row'><label htmlFor='cell '>부서</label></th>
                                <td colSpan={3}>
                                    <span className='input-btn-wrap'>
                                        <span className='input input_org input-search-front'></span>
                                        <button type='button' className='btn-search' onClick={() => { onPopup('/popup/PopupDepartment', 'PopupDepartment', '480', '760') }}>찾기</button>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='btn-wrap right'>
                        <button className='btn btn-low btn-ref'>초기화</button>
                        <button className='btn btn-black btn-search-txt'>검색</button>
                    </div>
                    </div>
                </div>
                </div>
            <div className='result-pageview mb15'>
                <ResultPageView />
                <div className='btn-wrap'>
                    <span className='cheked-item'><em>{ selectedCount }</em>개 선택</span>
                    <button type='button' className='btn btn-md ml10'>확인</button>
                </div>
            </div>
            <table className='popup-table center'>
                <caption>제목, 등록번호, 등록자, 등록부서, 등록일, 종료일, 구역명, 완료예정일, 구분 항목의 검색 영역</caption>
                <colgroup>
                    <col style={{ width: '5%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '35%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '10%' }} />
                </colgroup>
                <thead>
                <tr>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>CELL</th>
                    <th rowSpan={2}>주소</th>
                    <th colSpan={4}>가입자 모수</th>
                    <th rowSpan={2}>합</th>
                </tr>
                <tr>
                    <th>DTN</th>
                    <th>NET</th>
                    <th>VOIP</th>
                    <th>ATV</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                <tr key={row.id} onClick={handleConfirmClick} className='link'>
                    <td>
                        <input type='checkbox' name={`service ${index}`} id={`ser_${index}`} onChange={handleCheckboxChange} />
                        <label htmlFor={`ser_${index}`} style={{ margin: '0' }}></label>
                    </td>
                    <td>{row.cell}</td>
                    <td>{row.address}</td>
                    <td>{row.dtn}</td>
                    <td>{row.net}</td>
                    <td>{row.voip}</td>
                    <td>{row.atv}</td>
                    <td>{row.total}</td>
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

export default Worker;
