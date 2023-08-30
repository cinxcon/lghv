import { useState } from 'react';
import { createPortal } from 'react-dom';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

// 사용자 신규 등록
function PopupAccUserReg() {
  const [endDate, setEndDate] = useState(null);
  const [endEndDate, setEndEndDate] = useState(null);
  // SelectBox
  const optionAccState = [
    { value: '정상', label: '정상' },
    { value: '잠금', label: '잠금' }
  ];
  const [accState, setAccState] = useState(optionAccState[0]);
  const optionUserGroup = [
    { value: '그룹1', label: '그룹1' },
    { value: '그룹2', label: '그룹2' }
  ];
  const [userGroup, setUserGroup] = useState(optionUserGroup[0]);

  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>사용자 생성</h2>
        </div>
        <div className='content-section mb24'>
          <table className='table table-row'>
            <caption>사용자 등록</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col style={{ width: '35%' }} />
              <col style={{ width: '15%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor='userId'>아이디</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <span className='input-btn-wrap'>
                    <input type='text' name='userId' id='userId' className='input-repeatcheck-front' placeholder='아이디를 입력해주세요.' />
                    <button className='btn btn-black'>중복확인</button>
                  </span>
                </td>
                <th scope="row"><label htmlFor='userName'>이름</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' name='userName' id='userName' placeholder='이름을 입력해주세요.' />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='userOrg'>조직</label></th>
                <td>
                  <input type='text' name='userOrg' id='userOrg' placeholder='조직을 입력해주세요.' />
                </td>
                <th scope="row"><label htmlFor='userTitle'>직함</label></th>
                <td>
                  <input type='text' name='userTitle' id='userTitle' placeholder='직함을 입력해주세요.' />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='userEmail'>이메일</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                    <input type='text' name='userEmail' id='userEmail' placeholder='이메일을 입력해주세요.' />
                </td>
                <th scope="row"><label htmlFor='userPhone'>휴대폰 번호</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' name='userPhone' id='userPhone' placeholder='휴대폰 번호를 입력해주세요.' />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='userPw'>비밀번호</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' name='userPw' id='userPw' placeholder='비밀번호를 입력해주세요.' />
                  {/* 에러 일 때:
                  <input type='text' placeholder='비밀번호를 입력해주세요.' className='error' /> */}
                  <p className='notice size-sm'>8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</p>
                  {/* <p className='notice size-sm color-error'>8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</p>
                  <p className='notice size-sm color-success'>사용가능한 비밀번호입니다.</p> */}
                </td>
                <th scope="row"><label htmlFor='userPwCheck'>비밀번호 확인</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' name='userPwCheck' id='userPwCheck' placeholder='비밀번호 확인' />
                  <p className='notice size-sm'>8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</p>
                  {/* <p className='notice size-sm color-error'>비밀번호가 다릅니다. 다시 확인해주세요.</p>
                  <p className='notice size-sm color-success'>비밀번호가 일치합니다.</p> */}
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='userGroup'>사용자 그룹 이름</label></th>
                <td>
                  <Select defaultValue={optionUserGroup[0]} value={userGroup} onChange={setUserGroup} options={optionUserGroup} className='react-select-container' classNamePrefix="react-select" />
                </td>
                <th scope="row"><label htmlFor='date'>사용가능 기간</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <div className='flex-wrap between'>
                    <span className='half'><DatePicker locale={ko} selected={endDate} onChange={(date) => setEndDate(date)} endDate={endDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                    <span style={{ margin: '0 10px' }}>~</span>
                    <span className='half'><DatePicker locale={ko} selected={endEndDate} onChange={(date) => setEndEndDate(date)} endDate={endEndDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='statu'>상태</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <Select defaultValue={optionAccState[0]} value={accState} onChange={setAccState} options={optionAccState} className='react-select-container' classNamePrefix="react-select" />
                </td>
                <th scope="row"><label htmlFor='ip'>접속 로그인 IP</label></th>
                <td>
                  <input type='text' name='ip' id='ip' placeholder='IP를 입력해주세요.' />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='text'>설명</label></th>
                <td colSpan={3}>
                    <textarea name='text' id='text' style={{ height: '80px' }}></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='center'>
          <button className='btn btn-lg btn-primary'>확인</button>
        </div>
      </div>
    </PopupPortal>
  );
};

// 사용자 수정
function PopupAccUserModi() {
  const [endDate, setEndDate] = useState(new Date());
  const [endEndDate, setEndEndDate] = useState(new Date());
  // SelectBox
  const optionAccState = [
    { value: '정상', label: '정상' },
    { value: '잠금', label: '잠금' }
  ];
  const [accState, setAccState] = useState(optionAccState[0]);
  const optionUserGroup = [
    { value: '그룹1', label: '그룹1' },
    { value: '그룹2', label: '그룹2' }
  ];
  const [userGroup, setUserGroup] = useState(optionUserGroup[0]);

  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>사용자 수정</h2>
        </div>
        <div className='content-section mb24'>
          <table className='table table-row'>
            <caption>사용자 수정</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col style={{ width: '35%' }} />
              <col style={{ width: '15%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor='userId'>아이디</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <span className='input-btn-wrap'>
                    <input type='text' name='userId' id='userId' className='input-repeatcheck-front' value={'test11'} />
                    <button className='btn btn-black'>사용자조회</button>
                  </span>
                </td>
                <th scope="row"><label htmlFor='userName'>이름</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' name='userName' id='userName' value={'김철수'} />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='userOrg'>조직</label></th>
                <td>
                  <input type='text' name='userOrg' id='userOrg' value={'기간망운영팀'} />
                </td>
                <th scope="row"><label htmlFor='userTitle'>직함</label></th>
                <td>
                  <input type='text' name='userTitle' id='userTitle' value={'사원'} />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='userEmail'>이메일</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                    <input type='text' name='userEmail' id='userEmail' value={'test01@lghv.co.kr'} />
                </td>
                <th scope="row"><label htmlFor='userPhone'>휴대폰 번호</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' name='userPhone' id='userPhone' value={'010-1234-5678'} />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='userPw'>비밀번호</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' name='userPw' id='userPw' value={'***************'} />
                  {/* 에러 일 때:
                  <input type='text' placeholder='비밀번호를 입력해주세요.' className='error' /> */}
                  <p className='notice size-sm'>8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</p>
                  {/* <p className='notice size-sm color-error'>8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</p>
                  <p className='notice size-sm color-success'>사용가능한 비밀번호입니다.</p> */}
                </td>
                <th scope="row"><label htmlFor='userPwCheck'>비밀번호 확인</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' name='userPwCheck' id='userPwCheck' value={'***************'} />
                  <p className='notice size-sm'>8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</p>
                  {/* <p className='notice size-sm color-error'>비밀번호가 다릅니다. 다시 확인해주세요.</p>
                  <p className='notice size-sm color-success'>비밀번호가 일치합니다.</p> */}
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='userGroup'>사용자 그룹 이름</label></th>
                <td>
                  <Select defaultValue={optionUserGroup[0]} value={userGroup} onChange={setUserGroup} options={optionUserGroup} className='react-select-container' classNamePrefix="react-select" />
                </td>
                <th scope="row"><label htmlFor='date'>사용가능 기간</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <div className='flex-wrap between'>
                    <span className='half'><DatePicker locale={ko} selected={endDate} onChange={(date) => setEndDate(date)} endDate={endDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                    <span style={{ margin: '0 10px' }}>~</span>
                    <span className='half'><DatePicker locale={ko} selected={endEndDate} onChange={(date) => setEndEndDate(date)} endDate={endEndDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='statu'>상태</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <Select defaultValue={optionAccState[0]} value={accState} onChange={setAccState} options={optionAccState} className='react-select-container' classNamePrefix="react-select" />
                </td>
                <th scope="row"><label htmlFor='ip'>접속 로그인 IP</label></th>
                <td>
                  <input type='text' name='ip' id='ip' value={'198.23.123.156.22'} />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='text'>설명</label></th>
                <td colSpan={3}>
                  <textarea name='text' id='text' style={{ height: '80px' }}>테스트 입력</textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='center'>
          <button className='btn btn-lg btn-primary'>확인</button>
        </div>
      </div>
    </PopupPortal>
  );
};

// 사용자 삭제
function PopupAccUserDel() {
  const [endDate, setEndDate] = useState(new Date());
  const [endEndDate, setEndEndDate] = useState(new Date());
  // SelectBox
  const optionAccState = [
    { value: '정상', label: '정상' },
    { value: '잠금', label: '잠금' }
  ];
  const [accState, setAccState] = useState(optionAccState[0]);
  const optionUserGroup = [
    { value: '그룹1', label: '그룹1' },
    { value: '그룹2', label: '그룹2' }
  ];
  const [userGroup, setUserGroup] = useState(optionUserGroup[0]);

  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <div className="content-title">
          <h2>사용자 삭제</h2>
        </div>
        <div className='content-section mb24'>
          <table className='table table-row'>
            <caption>사용자 삭제</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col style={{ width: '35%' }} />
              <col style={{ width: '15%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor='userId'>아이디</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <span className='input-btn-wrap'>
                    <input type='text' name='userId' id='userId' className='input-repeatcheck-front' value={'test11'} readOnly />
                    <button className='btn btn-black'>사용자조회</button>
                  </span>
                </td>
                <th scope="row"><label htmlFor='userName'>이름</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' name='userName' id='userName' value={'김철수'} readOnly />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='userOrg'>조직</label></th>
                <td>
                  <input type='text' name='userOrg' id='userOrg' value={'기간망운영팀'} readOnly />
                </td>
                <th scope="row"><label htmlFor='userTitle'>직함</label></th>
                <td>
                  <input type='text' name='userTitle' id='userTitle' value={'사원'} readOnly />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='userEmail'>이메일</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                    <input type='text' name='userEmail' id='userEmail' value={'test01@lghv.co.kr'} readOnly />
                </td>
                <th scope="row"><label htmlFor='userPhone'>휴대폰 번호</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' name='userPhone' id='userPhone' value={'010-1234-5678'} readOnly />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='userPw'>비밀번호</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' name='userPw' id='userPw' value={'***************'} readOnly />
                </td>
                <th scope="row"><label htmlFor='userPwCheck'>비밀번호 확인</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' name='userPwCheck' id='userPwCheck' value={'***************'} readOnly />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='userGroup'>사용자 그룹 이름</label></th>
                <td>
                  <Select defaultValue={optionUserGroup[0]} value={userGroup} onChange={setUserGroup} options={optionUserGroup} className='react-select-container' classNamePrefix="react-select" isDisabled />
                </td>
                <th scope="row"><label htmlFor='date'>사용가능 기간</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <div className='flex-wrap between'>
                    <span className='half'><DatePicker locale={ko} selected={endDate} onChange={(date) => setEndDate(date)} endDate={endDate} dateFormat="yyyy-MM-dd" className="input-datepicker" readOnly /></span>
                    <span style={{ margin: '0 10px' }}>~</span>
                    <span className='half'><DatePicker locale={ko} selected={endEndDate} onChange={(date) => setEndEndDate(date)} endDate={endEndDate} dateFormat="yyyy-MM-dd" className="input-datepicker" readOnly /></span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='statu'>상태</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <Select defaultValue={optionAccState[0]} value={accState} onChange={setAccState} options={optionAccState} className='react-select-container' classNamePrefix="react-select" isDisabled />
                </td>
                <th scope="row"><label htmlFor='ip'>접속 로그인 IP</label></th>
                <td>
                  <input type='text' name='ip' id='ip' value={'198.23.123.156.22'} readOnly />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='text'>설명</label></th>
                <td colSpan={3}>
                    <div className='textarea-readonly'>테스트 입력</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='center'>
          <button className='btn btn-lg btn-primary'>확인</button>
        </div>
      </div>
    </PopupPortal>
  );
};
export { PopupAccUserReg, PopupAccUserModi, PopupAccUserDel };
