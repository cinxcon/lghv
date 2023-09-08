import { useState } from 'react';
import Select from 'react-select';
import ContentTitle from '../layout/ContentTitle';
import ResultPageView from '../common/ResultPageView';
import ResultNoData from '../common/ResultNoData';
import ResultListPaging from '../common/ResultListPaging';

function AccEquipmentList() {
  const [resultList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
  const pagedata = {
    title: '접근제어',
    subtitle: '장비 목록',
    SubMenu: 'yes',
    isDetail: 'no'
  }
  // 새창 팝업
  const onPopup = (url, name, width, height) => {
    const popupX = (window.screen.width / 2) - (width / 2);
    const popupY = (window.screen.height / 2) - (height / 2);
    window.open(url, name, 'status=no, height=' + height + ', width=' + width + ', left=' + popupX + ', top=' + popupY);
  }
  //  토글
  const [isToggled, setToggled] = useState(false);
  const handleButtonToggle = () => {
    setToggled(prevState => !prevState);
  };
  // SelectBox
  const optionEqType = [
    { value: '선택', label: '선택' },
    { value: '프록시', label: '프록시' },
    { value: '에이전트', label: '에이전트' }
  ];
  const [eqType, setEqType] = useState(optionEqType[0]);
  const optionModel = [
    { value: '선택', label: '선택' },
    { value: 'Linux', label: 'Linux' },
    { value: 'HPUX', label: 'HPUX' },
    { value: 'AIX', label: 'AIX' },
    { value: 'Solaris', label: 'Solaris' },
    { value: 'Windows', label: 'Windows' },
    { value: 'Network', label: 'Network' },
    { value: 'Web', label: 'Web' }
  ];
  const [model, setModel] = useState(optionModel[0]);
  const optionPortState = [
    { value: '선택', label: '선택' },
    { value: 'SSH', label: 'SSH' },
    { value: 'TELNET', label: 'TELNET' },
    { value: 'FTP', label: 'FTP' },
    { value: 'RDP', label: 'RDP' },
    { value: 'WinRM', label: 'WinRM' },
    { value: 'HTTP', label: 'HTTP' },
    { value: 'HTTPS', label: 'HTTPS' }
  ];
  const [portState, setPortState] = useState(optionPortState[0]);
  const optionEqState = [
    { value: '선택', label: '선택' },
    { value: '연결', label: '연결' },
    { value: '연결끊김', label: '연결끊김' }
  ];
  const [eqState, setEqState] = useState(optionEqState[0]);

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
              <caption>검색: 이름, 종류, 주소, 기종, 포트상태, 장비상태</caption>
              <colgroup>
                <col style={{ width: '6%' }} />
                <col span={2} style={{ width: '14%' }} />
                <col style={{ width: '6%' }} />
                <col span={2} style={{ width: '14%' }} />
                <col style={{ width: '6%' }} />
                <col span={3} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row"><label htmlFor="userName">이름</label></th>
                  <td colSpan={2}>
                    <input type="text" name="userNamet" id="userName" />
                  </td>
                  <th scope="row"><label htmlFor="eqType">종류</label></th>
                  <td colSpan={2}>
                    <Select defaultValue={optionEqType[0]} value={eqType} onChange={setEqType} options={optionEqType} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="address">주소</label></th>
                  <td colSpan={3}>
                    <input type="text" name="address" id="address" />
                  </td>
                </tr>
                <tr>
                  <th scope="row"><label htmlFor="model">기종</label></th>
                  <td colSpan={2}>
                    <Select defaultValue={optionModel[0]} value={model} onChange={setModel} options={optionModel} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="portState">포트상태</label></th>
                  <td colSpan={2}>
                    <Select defaultValue={optionPortState[0]} value={portState} onChange={setPortState} options={optionPortState} className='react-select-container' classNamePrefix="react-select" />
                  </td>
                  <th scope="row"><label htmlFor="eqState">장비상태</label></th>
                  <td colSpan={3}>
                    <Select defaultValue={optionEqState[0]} value={eqState} onChange={setEqState} options={optionEqState} className='react-select-container' classNamePrefix="react-select" />
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
            <button type="button" className="btn btn-low btn-md btn-exel">엑셀</button>
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
            <tr onClick={() => { onPopup('/LGHV-UIX-ACC/LGHV-UIX-ACC-0006', 'detail', '1280', '760') }} className='link'>
              <td>InfraCore1</td>
              <td>프록시</td>
              <td>Linux</td>
              <td>102.15.222.44</td>
              <td>SSH, Telnet,, FTP</td>
              <td><span className='color-disable'>연결끊김</span></td>
            </tr>
            {
              resultList.map(function(a, i) {
                return (
                  <tr key={i} onClick={() => { onPopup('/LGHV-UIX-ACC/LGHV-UIX-ACC-0006', 'detail', '1280', '760') }} className='link'>
                    <td>InfraCore1</td>
                    <td>프록시</td>
                    <td>Linux</td>
                    <td>102.15.222.44</td>
                    <td>SSH, Telnet,, FTP</td>
                    <td><span className='color-success'>연결</span></td>
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
