/* eslint-disable */
// LGHV-UIX-ACC-0007 사용자 등록 AccUserRegist
import { useState } from 'react';
import ContentTitle from '../layout/ContentTitle';
import { Popup, Alert } from '../popup/Popup';
import PopupNotiMethod from '../popup/popupDetail/Popup_NotiMethod_Set';
import PopupLine from '../popup/popupDetail/Popup_Approval';

function AccUserRegist() {
  const pagedata = {
    title: '접근제어',
    subtitle: '사용자 등록',
    SubMenu: 'yes',
    isDetail: 'no'
  }

  // 새창 팝업
  const onPopupReg = () => {
    const url = '/popup/Popup_ACCUserReg';
    window.open(url, '_blank', 'popup');
  }
  const onPopupModi = () => {
    const url = '/popup/Popup_ACCUserModi';
    window.open(url, '_blank', 'popup');
  }

  // 팝업
  const [onLoad, setOnLoad] = useState(false);
  const [approvalLine, setApprovalLine] = useState(false);
  const [notimethod, setNotimethod] = useState(false);
  const [clear, setClear] = useState(false);
  const [tempsave, setTempsave] = useState(false);

  //  토글
  const [divStates, setDivStates] = useState([false, false, false, false, false, false]);
  const handleDivToggle = (index) => {
    const newDivStates = [...divStates];
    newDivStates[index] = !newDivStates[index];
    setDivStates(newDivStates);
  };

  return (
    <>
      <ContentTitle data={pagedata} />
      <div className='content-section'>
        <div className="detail-top-btn-group">
          <span className='noti color-primary'>(*)는 필수 입력 항목 입니다.</span>
          <button className='btn btn-pop' onClick={() => { setOnLoad(true) }}>불러오기</button>
          <button className='btn btn-pop' onClick={() => { setApprovalLine(true) }}>결제선 지정</button>
          <button className='btn btn-pop' onClick={() => { setNotimethod(true) }}>통보방법</button>
          <button className='btn btn-ref' onClick={() => { setClear(true) }}>새로작성</button>
          <button className='btn btn-temp' onClick={() => { setTempsave(true) }}>임시저장</button>
        </div>
        <Popup open={onLoad} close={() => { setOnLoad(false) }} type="xlg" header="불러오기">
          {/* <PopupWorkOnLoad /> */}
          불러오기
        </Popup>
        <Popup open={approvalLine} close={() => { setApprovalLine(false) }} type="xlg" header="결제선 지정">
          <PopupLine />
        </Popup>
        <Popup open={notimethod} close={() => { setNotimethod(false) }} header="통보방법">
          <PopupNotiMethod />
        </Popup>
        <Alert open={clear} close={() => { setClear(false) }}>
          <div>저장된 내용이 사라집니다. <br /> 새로 작성 하시겠습니까?</div>
        </Alert>
        <Alert open={tempsave} close={() => { setTempsave(false) }}>
          <div>임시 저장 합니다.</div>
        </Alert>
      </div>
      {/* 결재선 지정 */}
      <div className='content-section'>
        <div className={`flex-wrap between ${divStates[0] ? 'under-line' : ''}`}>
          <h3>결재</h3>
          <div className="btn-wrap">
            <button className={`btn-fold ${divStates[0] ? 'close' : ''}`} onClick={() => handleDivToggle(0)} id='fold-open'>결재 열기</button>
          </div>
        </div>
        <div className={`toggle-box ${divStates[0] ? 'hide' : ''} `}>
          <div className='flex-wrap between align-start'>
              <table className='table half'>
                <caption>결제 라인 정보</caption>
                <colgroup>
                  <col style={{ width: '8%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '12%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '40%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope='col'>구분</th>
                    <th scope='col'>결재자</th>
                    <th scope='col'>상태</th>
                    <th scope='col'>결재일시</th>
                    <th scope='col'>의견</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>기안</td>
                    <td>홍길동(123456)</td>
                    <td>기안</td>
                    <td>2023-01-01 11:00:00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>결재</td>
                    <td>박길동(aggdd)</td>
                    <td><span className='color-success'>승인</span></td>
                    <td>2023-01-02 11:00:00</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <table className='table table-row half'>
                <caption>합의 수신 정보</caption>
                <colgroup>
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '90%' }} />
                </colgroup>
                <tbody>
                <tr>
                  <th scope='row'>합의</th>
                  <td>홍길동(123456), 박길동(aggdd)</td>
                </tr>
                <tr>
                  <th scope='row'>수신</th>
                  <td>김길동(bb3456), 홍길동(test)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='content-section'>
        <div className={`flex-wrap between ${divStates[1] ? 'under-line' : ''}`}>
          <h3>사용자 관리 기안</h3>
          <div className="btn-wrap">
            <button className={`btn-fold ${divStates[1] ? 'close' : ''}`} onClick={() => handleDivToggle(1)} id='fold-open'>사용자 관리 기안 열기</button>
          </div>
        </div>
        <div className={`toggle-box ${divStates[1] ? 'hide' : ''} `}>
          <table className='table table-row'>
            <caption>사용자 관리 기안 정보</caption>
            <colgroup>
              <col style={{ width: '20%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>제목</th>
                <td>
                  <input type='text' />
                </td>
              </tr>
              <tr>
                <th scope='row'>기안 내용</th>
                <td>
                  <textarea></textarea>
                </td>
              </tr>
              <tr>
                <th scope='row'>기안 첨부</th>
                <td>
                  <input type="file"id="File"name="File"className="form-file"style={{ width: '100%', display: 'none' }} title="기안첨부" />
                  <div className="input-group file-attach flex-wrap between"style={{ width: '100%' }} >
                    <input type="text"className="i-file-name"id="noIndex1"title="기안첨부"readOnly=""/>
                    <span className="input-addon">
                      <label htmlFor="File" className="btn">찾아보기</label>
                    </span>
                    <span className="input-addon">
                      <button className="btn btn-low">추가</button>
                    </span>
                    <span className="input-addon">
                      <button className="btn btn-low">삭제</button>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex-wrap between'>
        <div className='content-section half'>
          <h3>접근제어 사용자 검색</h3>
          <div className='flex-wrap between'>
            <select name="user_group" id="user_group" style={{ width: '20%' }}>
              <option value="all">전체</option>
            </select>
            <input type='text' style={{ width: '70%' }} />
            <button className='btn btn-black'>검색</button>
          </div>
          <table className='table mt8'>
            <caption>접근제어 사용자 검색: 아이디, 이름, 그룹, 계정상태</caption>
            <colgroup>
              <col span={4} />
            </colgroup>
            <thead>
              <tr>
                <th scope='col'>아이디</th>
                <th scope='col'>이름</th>
                <th scope='col'>그룹</th>
                <th scope='col'>계정상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>test01</td>
                <td>홍길동</td>
                <td>테스트그룹</td>
                <td>사용중</td>
              </tr>
              <tr>
                <td>test02</td>
                <td>박길동</td>
                <td>테스트그룹</td>
                <td>잠금</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ margin: '0 40px' }}>
          <button className='btn'> → </button>
        </div>
        <div className='content-section half'>
          <h3>접근제어 사용자 신청 정보</h3>
          <div className='right'>
            <button className='btn' onClick={onPopupReg}>신규</button>
            <button className='btn' onClick={onPopupModi}>수정</button>
            <button className='btn'>삭제</button>
          </div>
          <table className='table mt8'>
            <caption>접근제어 사용자 신청: 아이디, 이름, 그룹, 계정상태</caption>
            <colgroup>
              <col style={{ width: '10%' }} />
              <col span={5} />
            </colgroup>
            <thead>
              <tr>
                <th scope='col'><input type='checkbox' /></th>
                <th scope='col'>아이디</th>
                <th scope='col'>이름</th>
                <th scope='col'>그룹</th>
                <th scope='col'>계정상태</th>
                <th scope='col'>상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><button class="btn-del-28">삭제</button></td>
                <td>test01</td>
                <td>홍길동</td>
                <td>테스트그룹</td>
                <td>사용중</td>
                <td>신규</td>
              </tr>
              <tr>
                <td><button class="btn-del-28">삭제</button></td>
                <td>test02</td>
                <td>박길동</td>
                <td>테스트그룹</td>
                <td>잠금</td>
                <td>삭제</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AccUserRegist;
