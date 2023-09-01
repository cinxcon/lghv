function PopupNotiMethod() {
  return (
    <>
      <table className="popup-table">
        <caption>통보 방법: 등록자/부서, 검토자, 가입자, NOC / DMC</caption>
        <colgroup>
          <col span={4} style={{ width: '25%' }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">대상</th>
            <th scope="col">SMS</th>
            <th scope="col">E-MAIL</th>
            <th scope="col">알림톡</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>등록자/부서</td>
            <td>
              <input type="checkbox" name="a" id="sms1" checked="checked" readOnly />
              <label htmlFor="sms1" className="invisible">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="a" id="email1" disabled />
              <label htmlFor="email1" className="invisible">E-MAIL</label>
            </td>
            <td>
                <input type="checkbox" name="a" id="talk1" disabled />
                <label htmlFor="talk1" className='invisible' >알림톡</label>
            </td>
          </tr>
          <tr>
            <td>검토자</td>
            <td>
              <input type="checkbox" name="b" id="sms2" disabled />
              <label htmlFor="sms2" className="invisible">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="b" id="email2" checked="checked" readOnly />
              <label htmlFor="email2" className="invisible">E-MAIL</label>
            </td>
            <td>
                <input type="checkbox" name="b" id="talk2" checked="checked" readOnly />
                <label htmlFor="talk2" className='invisible' >알림톡</label>
              </td>
          </tr>
          <tr>
            <td>가입자</td>
            <td>
              <input type="checkbox" name="c" id="sms3" disabled />
              <label htmlFor="sms3" className="invisible">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="c" id="email3" checked="checked" readOnly />
              <label htmlFor="email3" className="invisible">E-MAIL</label>
            </td>
            <td>
                <input type="checkbox" name="c" id="talk3" disabled />
                <label htmlFor="talk3" className='invisible' >알림톡</label>
              </td>
          </tr>
          <tr>
            <td>NOC / DMC</td>
            <td>
              <input type="checkbox" name="d" id="sms4" disabled />
              <label htmlFor="sms4" className="invisible">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="d" id="email4" disabled />
              <label htmlFor="email4" className="invisible">E-MAIL</label>
            </td>
            <td>
                <input type="checkbox" name="d" id="talk4" disabled />
                <label htmlFor="talk4" className='invisible' >알림톡</label>
              </td>
          </tr>
        </tbody>
      </table>
      <ul className="list-primary">
        <li>가입자의 경우, 헬로비전 가입자에게 보내는 것임으로 신중하게 선택하시기 바랍니다.</li>
      </ul>
    </>
  )
}

// 작업관리
function PopupNotiMethodWRK() {
  return (
    <>
      <table className="popup-table">
        <caption>통보 방법: 등록자/소속팀, 결재자, 수신자, 가입자</caption>
        <colgroup>
          <col span={4} style={{ width: '25%' }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">대상</th>
            <th scope="col">SMS</th>
            <th scope="col">E-MAIL</th>
            <th scope="col">알림톡</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>등록자 / 소속팀</td>
            <td>
              <input type="checkbox" name="a" id="sms1" checked="checked" readOnly />
              <label htmlFor="sms1" className="invisible">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="a" id="email1" disabled />
              <label htmlFor="email1" className="invisible">E-MAIL</label>
            </td>
            <td>
                <input type="checkbox" name="a" id="talk1" disabled />
                <label htmlFor="talk1" className='invisible' >알림톡</label>
            </td>
          </tr>
          <tr>
            <td>결재자</td>
            <td>
              <input type="checkbox" name="b" id="sms2" disabled />
              <label htmlFor="sms2" className="invisible">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="b" id="email2" checked="checked" readOnly />
              <label htmlFor="email2" className="invisible">E-MAIL</label>
            </td>
            <td>
                <input type="checkbox" name="b" id="talk2" disabled />
                <label htmlFor="talk2" className='invisible' disabled>알림톡</label>
            </td>
          </tr>
          <tr>
            <td>수신자</td>
            <td>
              <input type="checkbox" name="c" id="sms3" disabled />
              <label htmlFor="sms3" className="invisible">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="c" id="email3" checked="checked" readOnly />
              <label htmlFor="email3" className="invisible">E-MAIL</label>
            </td>
            <td>
                <input type="checkbox" name="c" id="talk3" checked="checked" readOnly />
                <label htmlFor="talk3" className='invisible' >알림톡</label>
            </td>
          </tr>
          <tr>
            <td>가입자</td>
            <td>
              <input type="checkbox" name="d" id="sms4" disabled />
              <label htmlFor="sms4" className="invisible">SMS</label>
            </td>
            <td></td>
            <td>
                <input type="checkbox" name="d" id="talk4" disabled />
                <label htmlFor="talk4" className='invisible' >알림톡</label>
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="list-primary">
        <li>가입자의 경우, 헬로비전 가입자에게 보내는 것임으로 신중하게 선택하시기 바랍니다.</li>
      </ul>
    </>
  )
}

// 장애관리
function PopupNotiMethodBLK() {
  return (
    <>
      <table className="popup-table">
        <caption>통보 방법: 등록자/소속팀, 검토자, 결재자, 수신자, 가입자</caption>
        <colgroup>
          <col span={3} style={{ width: '33%' }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">대상</th>
            <th scope="col">SMS</th>
            <th scope="col">E-MAIL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>등록자 / 소속팀</td>
            <td>
              <input type="checkbox" name="a" id="sms1" checked="checked" />
              <label htmlFor="sms1" className="invisible">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="a" id="email1" />
              <label htmlFor="email1" className="invisible">E-MAIL</label>
            </td>
            <td>
                <input type="checkbox" name="a" id="talk1" disabled />
                <label htmlFor="talk1" className='invisible' >알림톡</label>
            </td>
          </tr>
          <tr>
            <td>검토자</td>
            <td>
              <input type="checkbox" name="b" id="sms2" />
              <label htmlFor="sms2" className="invisible">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="b" id="email2" checked="checked" />
              <label htmlFor="email2" className="invisible">E-MAIL</label>
            </td>
            <td>
                <input type="checkbox" name="b" id="talk2" disabled />
                <label htmlFor="talk2" className='invisible' >알림톡</label>
            </td>
          </tr>
          <tr>
            <td>결재자</td>
            <td>
              <input type="checkbox" name="c" id="sms3" />
              <label htmlFor="sms3" className="invisible">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="c" id="email3" checked="checked" />
              <label htmlFor="email3" className="invisible">E-MAIL</label>
            </td>
            <td>
                <input type="checkbox" name="c" id="talk3" disabled />
                <label htmlFor="talk3" className='invisible' >알림톡</label>
            </td>
          </tr>
          <tr>
            <td>수신자</td>
            <td>
              <input type="checkbox" name="d" id="sms4" />
              <label htmlFor="sms4" className="invisible">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="d" id="email4" checked="checked" />
              <label htmlFor="email4" className="invisible">E-MAIL</label>
            </td>
            <td>
                <input type="checkbox" name="d" id="talk4" disabled />
                <label htmlFor="talk4" className='invisible' >알림톡</label>
            </td>
          </tr>
          <tr>
            <td>가입자</td>
            <td>
              <input type="checkbox" name="e" id="sms5" />
              <label htmlFor="sms5" className="invisible">SMS</label>
            </td>
            <td></td>
            <td>
                <input type="checkbox" name="e" id="talk5" disabled />
                <label htmlFor="talk5" className='invisible' >알림톡</label>
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="list-primary">
        <li>가입자의 경우, 헬로비전 가입자에게 보내는 것임으로 신중하게 선택하시기 바랍니다.</li>
      </ul>
    </>
  )
}

export { PopupNotiMethod, PopupNotiMethodWRK, PopupNotiMethodBLK };
