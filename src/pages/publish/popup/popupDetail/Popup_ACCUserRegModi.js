import { useState } from 'react';
import { createPortal } from 'react-dom';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

// 사용자 신규 등록
function PopupACCUserReg() {
  const [endDate, setEndDate] = useState(null);
  const [endEndDate, setEndEndDate] = useState(null);

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
        <div className='content-section'>
          <table className='table table-row'>
            <caption>table caption</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col style={{ width: '35%' }} />
              <col style={{ width: '15%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor='category'>아이디</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <span className='input-btn-wrap'>
                    <input type='text' className='input-repeatcheck-front' />
                    <button className='btn btn-black'>중복확인</button>
                  </span>
                </td>
                <th scope="row"><label htmlFor='category'>이름</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='category'>조직</label></th>
                <td>
                  <input type='text' />
                </td>
                <th scope="row"><label htmlFor='category'>직함</label></th>
                <td>
                  <input type='text' />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='category'>이메일</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                    <input type='text' />
                </td>
                <th scope="row"><label htmlFor='category'>휴대폰 번호</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='category'>비밀번호</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                    <input type='text' />
                </td>
                <th scope="row"><label htmlFor='category'>비밀번호 확인</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='category'>사용자 그룹 이름</label></th>
                <td>
                    <select>
                      <option>기본</option>
                      <option>그룹1</option>
                    </select>
                </td>
                <th scope="row"><label htmlFor='category'>사용가능 기간</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <div className='flex-wrap between'>
                    <span className='half'><DatePicker locale={ko} selected={endDate} onChange={(date) => setEndDate(date)} endDate={endDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                    <span style={{ margin: '0 10px' }}>~</span>
                    <span className='half'><DatePicker locale={ko} selected={endEndDate} onChange={(date) => setEndEndDate(date)} endDate={endEndDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='category'>상태</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                    <select>
                      <option>정상</option>
                    </select>
                </td>
                <th scope="row"><label htmlFor='category'>접속 로그인 IP</label></th>
                <td>
                  <input type='text' />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='category'>설명</label></th>
                <td colSpan={3}>
                    <textarea></textarea>
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
function PopupACCUserModi() {
  const [endDate, setEndDate] = useState(null);
  const [endEndDate, setEndEndDate] = useState(null);

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
        <div className='content-section'>
          <table className='table table-row'>
            <caption>table caption</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col style={{ width: '35%' }} />
              <col style={{ width: '15%' }} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor='category'>아이디</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                    <input type='text' value={'text11'} readOnly />
                </td>
                <th scope="row"><label htmlFor='category'>이름</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' value={'김철수'} readOnly />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='category'>조직</label></th>
                <td>
                  <input type='text' value={'기간망운영팀'} readOnly />
                </td>
                <th scope="row"><label htmlFor='category'>직함</label></th>
                <td>
                  <input type='text' value={'사원'} readOnly />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='category'>이메일</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' value={'test01@lghv.co.kr'} readOnly />
                </td>
                <th scope="row"><label htmlFor='category'>휴대폰 번호</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <input type='text' value={'010-1234-5678'} readOnly />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='category'>사용자 그룹 이름</label></th>
                <td>
                    <select readOnly>
                      <option selected>기본</option>
                      <option>그룹1</option>
                    </select>
                </td>
                <th scope="row"><label htmlFor='category'>사용가능 기간</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                  <div className='flex-wrap between'>
                    <span className='half'><DatePicker locale={ko} selected={endDate} onChange={(date) => setEndDate(date)} endDate={endDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                    <span style={{ margin: '0 10px' }}>~</span>
                    <span className='half'><DatePicker locale={ko} selected={endEndDate} onChange={(date) => setEndEndDate(date)} endDate={endEndDate} dateFormat="yyyy-MM-dd" className="input-datepicker" /></span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='category'>상태</label> <span aria-label="required" className='color-primary'>*</span></th>
                <td>
                    <select>
                      <option selected>정상</option>
                    </select>
                </td>
                <th scope="row"><label htmlFor='category'>접속 로그인 IP</label></th>
                <td>
                  <input type='text' value={'198.23.123.156.22'} readOnly />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor='category'>설명</label></th>
                <td colSpan={3}>
                  <textarea value={'테스트 입력'} ></textarea>
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

export { PopupACCUserReg, PopupACCUserModi };
