function PopupNotiMethod() {
  return (
    <>
      <table className="popup-table">
        <caption>table caption</caption>
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
            <td>등록자/부서</td>
            <td>
              <input type="checkbox" name="a" id="sms1" checked="checked" readOnly />
              <label htmlFor="sms1" className="hide">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="a" id="email1" disabled />
              <label htmlFor="email1" className="hide">E-MAIL</label>
            </td>
          </tr>
          <tr>
            <td>검토자</td>
            <td>
              <input type="checkbox" name="b" id="sms2" disabled />
              <label htmlFor="sms2" className="hide">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="b" id="email2" checked="checked" readOnly />
              <label htmlFor="email2" className="hide">E-MAIL</label>
            </td>
          </tr>
          <tr>
            <td>가입자</td>
            <td>
              <input type="checkbox" name="c" id="sms3" disabled />
              <label htmlFor="sms3" className="hide">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="c" id="email3" checked="checked" readOnly />
              <label htmlFor="email3" className="hide">E-MAIL</label>
            </td>
          </tr>
          <tr>
            <td>NOC / DMC</td>
            <td>
              <input type="checkbox" name="d" id="sms4" disabled />
              <label htmlFor="sms4" className="hide">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="d" id="email4" disabled />
              <label htmlFor="email4" className="hide">E-MAIL</label>
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

function PopupNotiMethodWRK() {
  return (
    <>
      <table className="popup-table">
        <caption>table caption</caption>
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
              <input type="checkbox" name="a" id="sms1" checked="checked" readOnly />
              <label htmlFor="sms1" className="hide">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="a" id="email1" disabled />
              <label htmlFor="email1" className="hide">E-MAIL</label>
            </td>
          </tr>
          <tr>
            <td>결재자</td>
            <td>
              <input type="checkbox" name="b" id="sms2" disabled />
              <label htmlFor="sms2" className="hide">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="b" id="email2" checked="checked" readOnly />
              <label htmlFor="email2" className="hide">E-MAIL</label>
            </td>
          </tr>
          <tr>
            <td>수신자</td>
            <td>
              <input type="checkbox" name="c" id="sms3" disabled />
              <label htmlFor="sms3" className="hide">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="c" id="email3" checked="checked" readOnly />
              <label htmlFor="email3" className="hide">E-MAIL</label>
            </td>
          </tr>
          <tr>
            <td>가입자</td>
            <td>
              <input type="checkbox" name="d" id="sms4" disabled />
              <label htmlFor="sms4" className="hide">SMS</label>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <ul className="list-primary">
        <li>가입자의 경우, 헬로비전 가입자에게 보내는 것임으로 신중하게 선택하시기 바랍니다.</li>
      </ul>
    </>
  )
}

export { PopupNotiMethod, PopupNotiMethodWRK };
