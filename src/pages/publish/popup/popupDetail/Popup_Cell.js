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

const LoadCell = ({ onItemSelected }) => {
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
  const [subjecValue, setSubjecValue] = useState('');
  const onSubjecInput = (e) => setSubjecValue(e.target.value);
  const onSubjecClear = () => {
    setSubjecValue('');
  }

  const handleButtonToggle = () => {
    setToggled(prevState => !prevState);
  };

  // 데이터 리스트
  const optionsIfraType = [
    { value: 'all', label: '전체' },
    { value: '서울인프라팀', label: '서울인프라팀' },
    { value: '경북인프라팀', label: '경북인프라팀' }
  ];

  const optionsSoType = [
    { value: 'all', label: '전체' },
    { value: 'so', label: 'SO' }
  ];

  const optionsCellType = [
    { value: 'all', label: '전체' },
    { value: 'Cell', label: 'Cell' }
  ];

  const [infraType, setInfraType] = useState(optionsIfraType[0]);
  const [soType, setSoType] = useState(optionsSoType[0]);
  const [cellType, setCellType] = useState(optionsCellType[0]);

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
            <div className="content-title">
             <h2>CELL 등록</h2>
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
                            <col span={10} style={{ width: '10%' }} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row"><label htmlFor="infra">인프라팀</label></th>
                                <td colSpan={2}>
                                   <Select defaultValue={optionsIfraType[0]} value={infraType} onChange={setInfraType} options={optionsIfraType} className='react-select-container' classNamePrefix="react-select" />
                                </td>
                                <th scope="row"><label htmlFor="SO ">SO </label></th>
                                <td colSpan={2}>
                                    <Select defaultValue={optionsSoType[0]} value={soType} onChange={setSoType} options={optionsSoType} className='react-select-container' classNamePrefix="react-select" />
                                </td>
                                <th scope="row"><label htmlFor="cell ">CELL</label></th>
                                <td colSpan={3}>
                                    <span className='input-btn-wrap'>
                                        <Select defaultValue={optionsCellType[0]} value={cellType} onChange={setCellType} options={optionsCellType} className='react-select-container w80' classNamePrefix="react-select" />
                                        <button type='button' className='btn-check-28' onClick={() => { onPopup('/popup/PopupCellList', 'CellList', '800', '600') }}>찾기</button>
                                        <button type='button' className='btn-del-28'>삭제</button>
                                    </span>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row"><label htmlFor="subjec">제목</label></th>
                                <td colSpan={9}>
                                    <span className='input-clear-wrap'>
                                        <input type="text" name="subject" id="subjec" placeholder='제목' value={subjecValue} onInput={onSubjecInput} />
                                        <button type="button" className='clear-search-button' onClick={onSubjecClear}>삭제</button>
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
            <div className="result-pageview mb15">
                <ResultPageView />
                <div className='btn-wrap'>
                    <span className='cheked-item'><em>{ selectedCount }</em>개 선택</span>
                    <button type="button" className='btn btn-low btn-md ml10'>해당 없음</button>
                    <button type="button" className='btn btn-low btn-md'>전사</button>
                    <button type="button" className='btn btn-low btn-md'>SO 전제선택</button>
                    <button type="button" className='btn btn-md'>확인</button>
                </div>
            </div>
            <table className="popup-table center">
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
                        <input type="checkbox" name={`service ${index}`} id={`ser_${index}`} onChange={handleCheckboxChange} />
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

export default LoadCell;
