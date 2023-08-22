// LGHV-UIX-ACC-0005 장비목록 AccEquipmentList
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import ContentTitle from '../layout/ContentTitle';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';

function AccEquipmentList() {
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  const pagedata = {
    title: '접근제어',
    subtitle: '장비 목록',
    SubMenu: 'yes',
    isDetail: 'no'
  }

  // 새창 팝업
  const onPopup = () => {
    const url = '/LGHV-UIX-ACC/LGHV-UIX-ACC-0006';
    window.open(url, '_blank', 'popup');
  }

  //  토글
  const [isToggled, setToggled] = useState(false);
  const handleButtonToggle = () => {
    setToggled(prevState => !prevState);
  };

  // input clear
  const [userName, setUserNameValue] = useState('');
  const onUserNameInput = (e) => setUserNameValue(e.target.value);
  const onUserNameClear = () => {
    setUserNameValue('');
  }
  const [eqTypeValue, setEqTypeValue] = useState('');
  const onEqTypeInput = (e) => setEqTypeValue(e.target.value);
  const onEqTypeClear = () => {
    setEqTypeValue('');
  }
  const [addressValue, setAddressValue] = useState('');
  const onAddressInput = (e) => setAddressValue(e.target.value);
  const onAddressClear = () => {
    setAddressValue('');
  }
  const [modelValue, setModelValue] = useState('');
  const onModelInput = (e) => setModelValue(e.target.value);
  const onModelClear = () => {
    setModelValue('');
  }
  const [portValue, setPortValue] = useState('');
  const onPortInput = (e) => setPortValue(e.target.value);
  const onPortClear = () => {
    setPortValue('');
  }
  const [eqStatusValue, setEqStatusValue] = useState('');
  const onEqStatusInput = (e) => setEqStatusValue(e.target.value);
  const onEqStatusClear = () => {
    setEqStatusValue('');
  }

  return (
    <>
      <ContentTitle data={pagedata} />
      {/* 검색 영역 */}
      <div className='content-section'>
        <div className='search-wrap'>
          <div className='title flex-wrap between'>
            <h3>검색 조건</h3>
            <button className={`btn-fold ${isToggled ? 'close' : ''}`} onClick={handleButtonToggle} id='fold-open'>검색영역 열기</button>
          </div>
          <div className={`toggle-box ${isToggled ? 'hide' : ''}`}>
            <table className='search'>
              <caption>table caption</caption>
              <colgroup>
                <col span={10} style={{ width: '10%' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row"><label htmlFor="userName">이름</label></th>
                  <td colSpan={2}>
                    <span className='input-clear-wrap'>
                      <input type="text" name="userNamet" id="userName" placeholder='이름' value={userName} onInput={onUserNameInput} />
                      <button type="button" className='clear-search-button' onClick={onUserNameClear}>삭제</button>
                    </span>
                  </td>
                  <th scope="row"><label htmlFor="eqType">종류</label></th>
                  <td colSpan={2}>
                    <span className='input-clear-wrap'>
                      <input type="text" name="eqType" id="eqType" placeholder='종류' value={eqTypeValue} onInput={onEqTypeInput} />
                      <button type="button" className='clear-search-button' onClick={onEqTypeClear}>삭제</button>
                    </span>
                  </td>
                  <th scope="row"><label htmlFor="address">주소</label></th>
                  <td colSpan={3}>
                    <span className='input-clear-wrap'>
                      <input type="text" name="address" id="address" placeholder='주소' value={addressValue} onInput={onAddressInput} />
                      <button type="button" className='clear-search-button' onClick={onAddressClear}>삭제</button>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="model">기종</label></th>
                  <td colSpan={2}>
                    <span className='input-clear-wrap'>
                      <input type="text" name="model" id="model" placeholder='기종' value={modelValue} onInput={onModelInput} />
                      <button type="button" className='clear-search-button' onClick={onModelClear}>삭제</button>
                    </span>
                  </td>
                  <th scope="row"><label htmlFor="port">포트상태</label></th>
                  <td colSpan={2}>
                    <span className='input-clear-wrap'>
                      <input type="text" name="port" id="port" placeholder='포트상태' value={portValue} onInput={onPortInput} />
                      <button type="button" className='clear-search-button' onClick={onPortClear}>삭제</button>
                    </span>
                  </td>
                  <th scope="row"><label htmlFor="eqStatus">장비상태</label></th>
                  <td colSpan={3}>
                    <span className='input-clear-wrap'>
                      <input type="text" name="eqStatus" id="eqStatus" placeholder='장비상태' value={eqStatusValue} onInput={onEqStatusInput} />
                      <button type="button" className='clear-search-button' onClick={onEqStatusClear}>삭제</button>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="btn-wrap right">
              <button className='btn btn-low btn-ref'>초기화</button>
              <button className='btn btn-black btn-search-txt'>검색</button>
            </div>
          </div>
        </div>
      </div>
      {/* 목록 영역 */}
      <div className='content-section'>
        <div className="result-pageview">
          <ResultPageView />
          <div className='btn-wrap'>
            <button type="button" className="btn btn-md btn-reg">등록</button>
          </div>
        </div>
        <table className="table">
          <caption>table caption</caption>
          <colgroup>
            <col span="6" />
          </colgroup>
          <thead>
            <tr>
              <th scope='col'>이름</th>
              <th scope='col'>종류</th>
              <th scope='col'>기종</th>
              <th scope='col'>주소</th>
              <th scope='col'>포트상태</th>
              <th scope='col'>장비상태</th>
            </tr>
          </thead>
          <tbody>
            {
              resultList.map(function(a, i) {
                return (
                  <tr key={i} onClick={onPopup} className='link'>
                    <td>InfraCore1</td>
                    <td>프록시</td>
                    <td>Linux</td>
                    <td>102.15.222.44</td>
                    <td>SSH, Telnet,, FTP</td>
                    <td>연결</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <ResultNoData />
        <ResultListPaging />
      </div>
    </>
  )
}

export default AccEquipmentList;
