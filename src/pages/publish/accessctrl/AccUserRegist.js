import ContentTitle from '../layout/ContentTitle';

function AccUserRegist() {
  return (
    <>
      <ContentTitle />
      <div className='user-regist-top-btn-group'>
        <button className='btn'>결재선 지정</button>
      </div>
      {/* 결재선 지정 했을 때 */}
      <table className='table result mt20'>
        <caption>결재선 지정 내용 : 구분, 결재자, 상태, 결제일시, 의견 정보</caption>
        <colgroup>
          <col span="5" />
        </colgroup>
        <thead>
          <tr>
            <th scope='col'>구분</th>
            <th scope='col'>결재자</th>
            <th scope='col'>상태</th>
            <th scope='col'>결제일시</th>
            <th scope='col'>의견</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>기안</td>
            <td>홍길동(000001)</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>합의</td>
            <td>홍길동(000001)</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>결재</td>
            <td>홍길동(000001)</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <table className='table result mt20'>
        <caption>수신 정보</caption>
        <colgroup>
          <col span="2" />
        </colgroup>
        <tbody>
          <tr>
            <th scope='row'>수신</th>
            <td>홍길동(000001), 홍길동(000001)</td>
          </tr>
        </tbody>
      </table>
      {/* 상태값 신규생성 일때 */}
      <div className='user-regist-wrap mt20'>
        <div className='state-group'>
          <fieldset>
            <legend>상태값</legend>
            <input type="radio" name="state" id="state_1" value="" checked />
            <label htmlFor="state_1">신규생성</label>
            <input type="radio" name="state" id="state_2" value="" />
            <label htmlFor="state_2">잠금해제</label>
            <input type="radio" name="state" id="state_3" value="" />
            <label htmlFor="state_3">이슈관리</label>
            <input type="radio" name="state" id="state_4" value="" />
            <label htmlFor="state_4">삭제</label>
          </fieldset>
        </div>
        <div className='search-wrap'>
          <table className='search'>
            <caption>사용자 등록 폼: 아이디, 이름, 조직, 직함, 이메일, 휴대폰 번호, 비밀번호, 비밀번호 확인, 사용자 그룹 이름, 사용가능 기간, 상태, 접속 로그인 IP, 설명 항목 등록</caption>
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: '40%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '40%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row"><label htmlFor="userid">아이디<i>필수</i></label></th>
                <td>
                  <span className='input-btn-wrap'>
                    <input type="text" name="userid" id="userid" placeholder='아이디' />
                    <button className='btn btn-low' >중복확인</button>
                  </span>
                </td>
                <th scope="row"><label htmlFor="username">이름<i>필수</i></label></th>
                <td>
                  <input type="text" name="username" id="username" placeholder='이름' />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="org">조직</label></th>
                <td>
                  <input type="text" name="org" id="org" placeholder='조직' />
                </td>
                <th scope="row"><label htmlFor="titleof">직함</label></th>
                <td>
                  <input type="text" name="titleof" id="titleof" placeholder='직함' />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="email">이메일<i>필수</i></label></th>
                <td>
                  <input type="text" name="email" id="email" placeholder='이메일' />
                </td>
                <th scope="row"><label htmlFor="phone">휴대폰 번호<i>필수</i></label></th>
                <td>
                  <input type="text" name="phone" id="phone" placeholder='휴대폰 번호' />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="userpw">비밀번호<i>필수</i></label></th>
                <td>
                  <input type="text" name="userpw" id="userpw" placeholder='비밀번호' />
                </td>
                <th scope="row"><label htmlFor="userpwcheck">비밀번호 확인<i>필수</i></label></th>
                <td>
                  <input type="text" name="userpwcheck" id="userpwcheck" placeholder='비밀번호 확인' />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="usergroup">사용자 그룹 이름</label></th>
                <td>
                  <span className='input-btn-wrap'>
                    <input type="text" name="usergroup" id="usergroup" placeholder='사용자 그룹 이름' />
                    <button className='btn btn-low' >그룹생성</button>
                  </span>
                </td>
                <th scope="row"><label htmlFor="date">사용가능 기간<i>필수</i></label></th>
                <td>
                  <input type="text" name="date" id="date" placeholder='사용가능 기간' />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="state">상태<i>필수</i></label></th>
                <td>
                  <select name="state" id="state">
                    <option value="a" selected>정상</option>
                    <option value="b">잠금</option>
                  </select>
                </td>
                <th scope="row"><label htmlFor="ip">접속 로그인 IP</label></th>
                <td>
                  <input type="text" name="ip" id="ip" placeholder='접속 로그인 IP' />
                </td>
              </tr>
              <tr>
                <th scope="row"><label htmlFor="ex">설명</label></th>
                <td colSpan={3}>
                  <textarea></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='user-regist-add-btn-group'>
        <button className='btn btn-lg btn-primary'>사용자 추가</button>
      </div>
      <div className='user-regist-bottom-btn-group'>
        <button className='btn btn-low'>취소</button>
        <button className='btn btn-primary'>등록</button>
      </div>
      {/* 상태값 신규생성 외 다른값 일때 */}

    </>
  )
}

export default AccUserRegist;
