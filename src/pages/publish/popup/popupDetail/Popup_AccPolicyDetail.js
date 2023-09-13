import { createPortal } from 'react-dom';

const PopupPortal = ({ children }) => {
  const el = document.getElementById('popup-root');
  return createPortal(children, el)
}

function PopupAccPolicyReg() {
  return (
    <PopupPortal>
      <style>
        {`
          #root {display: none;}
        `}
      </style>
      <div className='new-window-wrap'>
        <button type='button' className='pop-close' onClick={() => { window.close() }}>닫기</button>
        <div className="content-title">
          <h2>접근제어 정책 상세</h2>
        </div>
        <div>
          <span className='total-view'>총 <b>4</b>개</span>
        </div>
        <div className='over-flow-x'>
          <table className="table" style={{ width: '140%' }}>
            <caption>table caption</caption>
            <colgroup>
              <col span={4} />
              <col span={7} style={{ width: '6.5%' }} />
              <col span={4} />
            </colgroup>
            <thead>
              <tr>
                <th scope='col'>사용자부서</th>
                <th scope='col'>사용자</th>
                <th scope='col'>장비</th>
                <th scope='col'>OS</th>
                <th scope='col' colSpan={7}>접속Protocol</th>
                <th scope='col'>Protocol <br />접속계정</th>
                <th scope='col'>접근정책</th>
                <th scope='col'>시작일시</th>
                <th scope='col'>종료일시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>호남인프라</td>
                <td>홍길동 Hong</td>
                <td>Infra Core1</td>
                <td>Linux</td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <input type="checkbox" name="protocol" id="ptc_4" value="" disabled />
                  <label htmlFor="ptc_4">SSH</label>
                </td>
                <td>
                  <input type="checkbox" name="protocol" id="ptc_5" value="" disabled />
                  <label htmlFor="ptc_5">Telnet</label>
                </td>
                <td>
                  <input type="checkbox" name="protocol" id="ptc_6" value="" disabled />
                  <label htmlFor="ptc_6">SFTP</label>
                </td>
                <td>
                  <input type="checkbox" name="protocol" id="ptc_7" value="" disabled />
                  <label htmlFor="ptc_7">FTP</label>
                </td>
                <td>admin</td>
                <td>L1</td>
                <td>2023-07-28 00:00:00</td>
                <td>2023-07-28 06:00:00</td>
              </tr>
              <tr>
                <td>호남인프라</td>
                <td>이철수 Kim</td>
                <td>Infra Core2</td>
                <td>Windows</td>
                <td></td>
                <td>
                  <input type="checkbox" name="protocol" id="ptc_2" value="" disabled />
                  <label htmlFor="ptc_2">RDP</label>
                </td>
                <td>
                  <input type="checkbox" name="protocol" id="ptc_3" value="" disabled />
                  <label htmlFor="ptc_3">Win RM</label>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>admin</td>
                <td>L0</td>
                <td>2023-07-28 00:00:00</td>
                <td>2023-07-28 06:00:00</td>
              </tr>
              <tr>
                <td>호남인프라</td>
                <td>김길동 Hong</td>
                <td>Infra Core3</td>
                <td>Network</td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <input type="checkbox" name="protocol" id="ptc_4" value="" disabled />
                  <label htmlFor="ptc_4">SSH</label>
                </td>
                <td>
                  <input type="checkbox" name="protocol" id="ptc_5" value="" disabled />
                  <label htmlFor="ptc_5">Telnet</label>
                </td>
                <td></td>
                <td>
                  <input type="checkbox" name="protocol" id="ptc_7" value="" disabled />
                  <label htmlFor="ptc_7">FTP</label>
                </td>
                <td>admin</td>
                <td>L1</td>
                <td>2023-07-28 00:00:00</td>
                <td>2023-07-28 06:00:00</td>
              </tr>
              <tr>
                <td>호남인프라</td>
                <td>김철수 Kim</td>
                <td>Infra Core3</td>
                <td>Web</td>
                <td>
                  <input type="checkbox" name="protocol" id="ptc_1" value="" disabled />
                  <label htmlFor="ptc_1">HTTPS</label>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>admin</td>
                <td>L0</td>
                <td>2023-07-28 00:00:00</td>
                <td>2023-07-28 06:00:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PopupPortal>
  );
};

export default PopupAccPolicyReg;
